
// Utility
class Util {};
Util.loadScript = (url, callback) => {
  // Adding the script tag to the head as suggested before
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url + '?' + (new Date()).toISOString();;

  // Then bind the event to the callback function.
  // There are several events for cross browser compatibility.
  script.onreadystatechange = callback;
  script.onload = callback;

  // Fire the loading
  head.appendChild(script);
};

Util.loadJQuery = (callback) => {
  Util.loadScript('http://code.jquery.com/jquery-latest.js', callback);
};

Util.loadTextAsJs = (url) => {
  const stringData = $.ajax({
    url: url + '?' + (new Date()).toISOString(),
    async: false
  }).responseText;
  eval(stringData);
};

Util.appendNewElement = (parent, style = {}) => {
  const d = Util.getNewElement(style);
  parent.appendChild(d);
  return d;
};

Util.getNewElement = (style = {}) => {
  const d = document.createElement('div');  
  for (let k in style) {
    d.style[k] = style[k];
  }
  return d;
};

// MyTw116
class MyTw116 {

  constructor(element){
    this.element = element;
    this.parentDiv = this.addParentDiv();
    
    this.init();
  }
  
  init () {    
    let tvData;
    let movieData;
    const init_ = () => {
      this.tabs = {};

      this.headerContainer = Util.appendNewElement(this.parentDiv);
      this.bodyContainer = Util.appendNewElement(this.parentDiv);

      console.log(tvData);
      this.loadTvTab(tvData).onclick();
      this.loadMovieTab(movieData);

      this.addToolBar();
    };
    
    Util.loadTextAsJs('https://raw.githubusercontent.com/cnhuang/js/master/tampermonkey/shows.js');
    init_();
  }
  
  // Movie Tab
  loadMovieTab(data) {
    const render = (show, url, episodes) => {      
      const showName = this.getShowName(show, episodes);

      let html = `<div><a target=_blank href='${url}'>${showName}</a></div>`;
      episodes.forEach((e) => {
        html += `<span style="padding-right:20px;" id="${e.id}"><a href="${e.url}">${e.name}</a></span>`;
      });
      return html;
    };
    return this.addTab(data, render, 'movie', 'Movies');
  }

  // TV Tab
  loadTvTab(data) {
    const render = (show, url, episodes) => {      
      const showName = this.getShowName(show, episodes);

      let html = `<div><a target=_blank href='${url}'>${showName} (${show.id}, watched: ${show.done || 0})</a></div>`;
      episodes.forEach((e) => {
        html += `<span style="padding-right:20px;" id="${e.id}"><a href="${e.url}">${e.name}</a></span>`;
      });
      return html;
    };
    console.log(data);
    return this.addTab(data, render, 'tv', 'TV');
  }
  
  // Toolbar
  addToolBar() {
    let refresh = Util.appendNewElement(this.headerContainer, this.tabStyle());
    refresh.innerHTML = '<img src=\'https://goo.gl/3yWlJj\' style=\'width: 25px\' />';
    refresh.onclick = () => {
      $(this.parentDiv).empty();
      this.init();
    };
  }
  
  // Utility
  addTab(shows, render, id, innerText) {
    let tab = Util.appendNewElement(this.headerContainer, this.tabStyle());
    tab.innerText = innerText;
    
    const content = Util.appendNewElement(this.bodyContainer, {display: 'none'});
    
    console.log(shows);
    this.loadData(content, this.parseData, shows, render);
    this.tabs[id] = content;
    tab.onclick = () => this.openTab(id);        
    return tab;
  }
    
  loadData(element, parseFunc, shows, render) {
    const successCallback = (show, url, content) => {
      parseFunc(element, show, url, content, render);
    };

    const failCallabck = (show, url) => {
      console.log(`Error: ${url} - ${show}`);
    };

    console.log(shows);
    shows.forEach((show, index) =>{
      const url = `http://www.tw116.com/vod-play-id-${show.id}-sid-0-pid-0.html`;
      $.get(url, successCallback.bind(this, show, url))
        .fail(failCallabck(show, url));
    });
  }
  
  parseData(parentDiv, show, url, content, render) {  
    const url_list = content.match(/var\s+url_list.*?;/);
    const players = decodeURIComponent(url_list).split('$$$');
    const episodes = [];

    if (players) {
      const player = players.find((p) => p.includes('xfplay://')) || '';
      const links = player.split('+++') || [];
      links.forEach((link, index) => {
        const tokens = link.split('++');
        const name = tokens[0];
        const url = tokens[1];
        const id = `${show.id}-${index}`;
        const watched = show.done && show.done > index;
        episodes.push({name, url, id, watched});
      });
    }

    var d = Util.appendNewElement(parentDiv, {marginBottom: '20px'});
    d.innerHTML = render(show, url, episodes);
  }
  
  openTab(id) {
    for (let k in this.tabs) {
      const v = this.tabs[k];
      v.style = v.style || {};
      if (k != id) {
        v.style.display = 'none';
      } else {
        v.style.display = 'block';
      }
    }
  }

  addParentDiv() {
    var div = Util.getNewElement({
      backgroundColor: 'black',
      top: '0px',
      padding: '40px',
      width: '100%'
    });
    div.id = 'linksDiv';
    if (this.element.children && this.element.children.length > 0) {
      this.element.insertBefore(div, this.element.children[0]);
    } else {
      this.element.appendChild(div);
    }
    return div;
  }
  
  tabStyle() {
    return {
      cursor: 'pointer',
      marginBottom: '20px',
      marginRight: '20px',
      display: 'inline-block'
    };
  }
  
  getShowName(show, episodes) {
    return show.name || (() => {
      if (episodes.length == 0)
        return 'Unknown';
      else 
        return /mz=(.*?)S/.exec(episodes[0].url) || `Can't parse from ${episodes[0].url}`;
    })();
  }
};

// Main function
Util.loadJQuery(() => new MyTw116(document.getElementsByTagName('body')[0]));
