
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

  constructor(element, tvData, movieData){
    this.element = element;
    //this.tvData = tvData;
    //this.movieData = movieData;    
    this.parentDiv = this.addParentDiv();
    
    this.init();
  }
  
  init () {    
    const init_ = () => {
      this.tabs = {};

      this.headerContainer = Util.appendNewElement(this.parentDiv);
      this.bodyContainer = Util.appendNewElement(this.parentDiv);

      this.loadTvTab(tvSeries).onclick();
      this.loadMovieTab(movies);

      this.addToolBar();
    };
    
    var stringData = $.ajax({
                    url: 'https://raw.githubusercontent.com/cnhuang/js/master/tampermonkey/shows.js?' + (new Date()).toISOString(),
                    async: false
                 }).responseText;
    eval(stringData); 
    init_();
  }
  
  // Movie Tab
  loadMovieTab(data) {
    const render = (tv, url, all, unWatched) => {      
      const tvName = tv.name || (() => {
        if (all.length == 0)
          return 'Unknown';
        else 
          return /mz=(.*?)S/.exec(all[0].url) || `Can't parse from ${all[0].url}`;
      })();

      let html = `<div><a target=_blank href='${url}'>${tvName}</a></div>`;
      unWatched.forEach((e) => {
        html += `<span style="padding-right:20px;" id="${e.id}"><a href="${e.url}">${e.name}</a></span>`;
      });
      return html;
    };
    return this.addTab(data, render, 'movie', 'Movies');
  }

  // TV Tab
  loadTvTab(data) {
    const render = (tv, url, all, unWatched) => {      
      const tvName = tv.name || (() => {
        if (all.length == 0)
          return 'Unknown';
        else 
          return /mz=(.*?)S/.exec(all[0].url) || `Can't parse from ${all[0].url}`;
      })();

      let html = `<div><a target=_blank href='${url}'>${tvName} (${tv.id}, watched: ${tv.done || 0})</a></div>`;
      unWatched.forEach((e) => {
        html += `<span style="padding-right:20px;" id="${e.id}"><a href="${e.url}">${e.name}</a></span>`;
      });
      return html;
    };
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
  addTab(data, render, id, innerText) {
    let tab = Util.appendNewElement(this.headerContainer, this.tabStyle());
    tab.innerText = innerText;
    
    const content = Util.appendNewElement(this.bodyContainer, {display: 'none'});
    this.loadData(content, this.parseData, data, render);
    this.tabs[id] = content;
    tab.onclick = () => this.openTab(id);        
    return tab;
  }
    
  loadData(element, parseFunc, data, render) {
    const successCallback = (d, url, content) => {
      parseFunc(element, d, url, content, render);
    };

    const failCallabck = (d, url) => {
      console.log(`Error: ${url} - ${d}`);
    };

    data.forEach((d, index) =>{
      const url = `http://www.tw116.com/vod-play-id-${d.id}-sid-0-pid-0.html`;
      $.get(url, successCallback.bind(this, d, url))
        .fail(failCallabck(d, url));
    });
  }
  
  parseData(parentDiv, data, url, content, render) {  
    const url_list = content.match(/var\s+url_list.*?;/);
    const players = decodeURIComponent(url_list).split('$$$');
    const unWatched = [];
    const all = [];
    console.log(players);

    if (players) {
      const player = players.find((p) => p.includes('xfplay://')) || '';
      const links = player.split('+++') || [];
      links.forEach((link, index) => {
        const tokens = link.split('++');
        const name = tokens[0];
        const url = tokens[1];
        const id = `${data.id}-${index}`;
        
        if (!data.done || data.done <= index) {
          unWatched.push({name, url, id});
        }
        all.push({name, url, id});
      });
    }

    var d = Util.appendNewElement(parentDiv, {marginBottom: '20px'});
    d.innerHTML = render(data, url, all, unWatched);
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
};

// Data
const tvSeries = [
  {id: "67551", done: 1, name: "Elementary V"},
  {id: "67571", done: 1, name: "scopin III"},
  {id: "67402", name: "Black list IV", done: 8},
  {id: "67358", done: 6, name: "shield IV"},
  {id: "67286", name: "Blind spot II", done: 8},
  {id: "59887", done: 18, name: '美国恐怖故事：畸形秀'},
  {id: "67505", name: "Luke Cage", done: 1},
  {id: "67567", name: "時空守衛 Timeless", done: 5},
  {id: "63524", name: "美国恐怖故事第五季"},
  {id: "63902"},
  {id: "63716"},
  {id: "64759", done: 6},
  {id: "64702", done: 6, name: "Agent carter"},
  {id: "63761", done: 10},
  {id: "65662", name: "12Monkey II", done: 13},
  {id: "65885", name: "Game of Throne", done: 10},
  {id: "40555", name: "black mirror S1"},
  {id: "50254", name: "black mirror S2"},
  {id: "67826", name: "black mirror S3"},
  {id: "67072", name: "誰是兇手", done: 0},
  {id: "66715", name: "怪奇物語", done: 0},
  {id: "67580", name: "Flash III", done: 0}, 
  {id: "67445", name: "Hells Kitchen XVI", done: 0},
  {id: "62207", name: "Mr. Robot", done: 0},
  {id: "67552", name: "West World HBO", done: 0},
  {id: "59724", name: "Get away with murder I/III"}
];

const movies = [
  {id: "66111"}
];
// Main function
Util.loadJQuery(() => new MyTw116(document.getElementsByTagName('body')[0], tvSeries, movies));
