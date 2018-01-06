

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

Util.loadJsText = (url) => {
  return $.ajax({
    url: url + '?' + (new Date()).toISOString(),
    async: false
  }).responseText;
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
    this.selectedTab = 'tv';
    
    this.init();
  }
  
  init () {    
    let data = [{url: location.href}];
    this.bodyContainer = Util.appendNewElement(this.parentDiv);
    this.loadMovieTab(data);
  }
  
  // Movie Tab
  loadMovieTab(data) {
    const render = (show, episodes) => {      
      const showName = this.getShowName(show, episodes);
      const hasWatched = episodes.find((e) => e.watched);
      const watchedStyle = hasWatched ? 'color: gray;text-decoration: line-through;' : '';

      let html = `<div><a target=_blank href='${show.url}' style="${watchedStyle}">${showName}</a></div>`;
      if (!hasWatched) {
        episodes.forEach((e) => {
          const watchedStyle = e.watched ? 'color: gray;text-decoration: line-through;' : '';
          html += `<span style="padding-right:20px;" id="${e.id}"><a style="${watchedStyle}" href="${e.url}">${e.name}</a></span>`;
        });
      }
      return html;
    };
    this.addTab(data, render);
  }
  
  // Utility
  addTab(shows, render) {
    const content = Util.appendNewElement(this.bodyContainer, {display: 'none'});
    this.loadData(content, this.parseData, shows, render);
  }
    
  loadData(element, parseFunc, shows, render) {
    const successCallback = (show, content) => {
      parseFunc(element, show, content, render);
    };

    const failCallabck = (show, url) => {
      console.log(`Error loading: ${show.url}`);
    };
    
    const parse = (show) => {
      const url = `http://www.tw116.com/vod-play-id-${show.id}-sid-0-pid-0.html`;
      if (!show.url) {
        show.url = url;
      }
      $.get(url, successCallback.bind(this, show))
          .fail(failCallabck(show));
    };

    const parseMainPage = (show, content) => {
      const nameMatch = content.match(/<strong id=\"mname\">(.*?)</) || [];
      if (nameMatch.length > 1) {
        show.name = nameMatch[1];
      }
      
      const detailUrlMatch = content.match(/vod-play-id-(\d+)-/) || [];
      if (detailUrlMatch.length > 1) {
        show.id = detailUrlMatch[1];
        parse(show);
      } else {
        console.log(`No id found for ${show.name} - ${show.url}`);
      }
    };
    
    shows.forEach((show, index) =>{
      if (show.url) {
        $.get(show.url, parseMainPage.bind(this, show))
      } else {
        parse(show);
      }
    });
  }
  
  parseData(parentDiv, show, content, render) {  
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
    d.innerHTML = render(show, episodes);
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
    this.selectedTab = id;
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
