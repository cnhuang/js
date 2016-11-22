
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
    this.loadScript('http://code.jquery.com/jquery-latest.js', callback);
};


class MyTw116 {

    constructor(tvData){
        this.parentDiv = addParentDiv();
        this.tabContainer = addEmptyElement(this.parentDiv);
        this.tvData = tvData;
        this.loadTvTab();
    }

    loadTvTab() {
        this.tvTab = addEmptyElement(this.parentDiv);
        this.tvTab.style = {marginBottom: '20px', marginRight: '20px'};
        this.tvTab.innerText = 'TV';
        this.tvContent = addEmptyElement(this.parentDiv);
        this.loadTvData(tvContent);
    }


    loadTvData(element) {
        const successCallback = (tv, url, parentDiv, content) => {
            this.parseTvData(parentDiv, tv, url, content);
        };

        const failCallabck = (tv, url, parentDiv) => {
            console.log(tv);
        };

        this.tvData.forEach((data, index) =>{
            const url = `http://www.tw116.com/vod-play-id-${data[index].id}-sid-0-pid-0.html`;
            $.get(url, successCallback(tvSeries[i], url, parentDiv))
                .fail(failCallabck(tvSeries[i], url, parentDiv));
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
        document.getElementsByTagName('body')[0].appendChild(div);
        div.innerHTML = '';
        return div;
    };

    static addEmptyElement(parent, append = true, tag = 'div') {
        var d = document.createElement(tag);
        if (append) {
            parent.appendChild(d);
        }
        return d;
    }


    parseData(parentDiv, tv, url, content) {  
        const url_list = content.match(/var\s+url_list.*?;/);
        const players = decodeURIComponent(url_list).split('$$$');
        const unWatched = [];
        console.log(players);

        if (players) {
            const player = players.find((p) => player.contains('xfplay://')) || '';
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

        let html = `<div><a target=_blank href='${url}'>${tv.name} (${tv.id}, watched: ${tv.done})</a></div>`;
        unWatched.forEach((e) => {
            html += `<span style="padding-right:20px;" id="${e.id}"><a href="${e.url}">${e.name}</a></span>`;
        });
        var d = addEmptyElement(parentDiv);
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


Util.loadJQuery(() => new MyTw116(tvSeries));
