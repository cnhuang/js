
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
    this.init();
  }
  
  init () {    
    const init_ = () => {
      this.bodyContainer = Util.appendNewElement(this.parentDiv);
      this.loadMovieTab();
    };
    
    eval(Util.loadJsText('https://raw.githubusercontent.com/cnhuang/js/master/tampermonkey/shows.js'));
    init_();
  }
  
  // Movie Tab
  loadMovieTab(data, tabName) {
    const render = (episodes) => {      
      let html;
      episodes.forEach((e) => {
        html += `<span style="padding-right:20px;" id="${e.id}"><a href="${e.url}">${e.name}</a></span>`;
      });
      return html;
    };
    this.addTab(render);
  }

  // Utility
  addTab(render) {
    const content = Util.appendNewElement(this.bodyContainer);
    this.parseData(content, '', document.documentElement.innerHTML, render);
  }
    
  parseData(parentDiv, content, render) {  
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
        const id = `${index}`;
        episodes.push({name, url, id, watched});
      });
    }

    var d = Util.appendNewElement(parentDiv, {marginBottom: '20px'});
    d.innerHTML = render(episodes);
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
};

// Main function
Util.loadJQuery(() => new MyTw116(document.getElementsByTagName('body')[0]));
