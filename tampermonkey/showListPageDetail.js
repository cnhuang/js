
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


class MyTw116 {

    constructor(element, tvData){
        this.element = element;
        this.parentDiv = this.addParentDiv();
        this.tabContainer = this.addEmptyElement(this.parentDiv);
        this.tvData = tvData;
        this.loadTvTab();
    }

    loadTvTab() {
        this.tvTab = this.addEmptyElement(this.parentDiv);
        this.tvTab.style = {marginBottom: '20px', marginRight: '20px'};
        this.tvTab.innerText = 'TV';
        this.tvContent = this.addEmptyElement(this.parentDiv);
        this.loadTvData(this.tvContent);
    }


    loadTvData(element) {
        const successCallback = (tv, url, parentDiv, content) => {
            this.parseTvData(parentDiv, tv, url, content);
        };

        const failCallabck = (tv, url, parentDiv) => {
            console.log(tv);
        };

        this.tvData.forEach((data, index) =>{
            const url = `http://www.tw116.com/vod-play-id-${data.id}-sid-0-pid-0.html`;
            $.get(url, successCallback.bind(this, data, url, element))
                .fail(failCallabck(data, url, element));
        });
    }

    addParentDiv() {
        var div = document.createElement("div");
        div.id = 'linksDiv';
        div.style.position = "absolute";    
        div.style.backgroundColor = 'black';
        div.style.top = '0px';
        div.style.padding = '40px';
        div.style.width = '100%';
        if (this.element.children && this.element.children.length > 0) {
            this.element.children.insertBefore(div, this.element.children[0]);
        } else {
            this.element.children.appendChild(div);
        }
        return div;
    };

    addEmptyElement(parent, append = true, tag = 'div') {
        var d = document.createElement(tag);
        if (append) {
            parent.appendChild(d);
        }
        return d;
    }


    parseTvData(parentDiv, tv, url, content) {  
        const url_list = content.match(/var\s+url_list.*?;/);
        const players = decodeURIComponent(url_list).split('$$$');
        const unWatched = [];
        console.log(players);

        if (players) {
            const player = players.find((p) => p.includes('xfplay://')) || '';
            const links = player.split('+++') || [];
            links.forEach((link, index) => {
                if (tv.done && tv.done > index) return;

                const tokens = link.split('++');
                const name = tokens[0];
                const url = tokens[1];
                const id = `${tv.id}-${index}`;
                unWatched.push({name, url, id});
            });
        }

        let tvName = tv.name || (() => {
              if (unWatched.length == 0)
                  return undefined;
              else 
                  return /mz=(.*?)S/.exec(unWatched[0].url);
            })();
        let html = `<div><a target=_blank href='${url}'>${tv.name} (${tv.id}, watched: ${tv.done})</a></div>`;
        unWatched.forEach((e) => {
            html += `<span style="padding-right:20px;" id="${e.id}"><a href="${e.url}">${e.name}</a></span>`;
        });
        var d = this.addEmptyElement(parentDiv);
        d.innerHTML = html;
        d.style.marginBottom = '20px';
    }
};

// End Utility

var tvSeries = [
    {id: "67551", done: 0, name: "Elementary V"},
    {id: "67571", done: 0, name: "scopin III"},
    {id: "67402", name: "Black list IV", done: 8},
    {id: "67358", done: 6, name: "shield IV"},
    {id: "67286", name: "Blind spot II", done: 6},
    {id: "59887", done: 18, name: '美国恐怖故事：畸形秀'},
    {id: "67505", name: "Luke Cage", done: 1},
    {id: "67567", name: "時空守衛 Timeless", done: 5},
    {id: "63524"},
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


Util.loadJQuery(() => new MyTw116(document.getElementsByTagName('body')[0], tvSeries));
