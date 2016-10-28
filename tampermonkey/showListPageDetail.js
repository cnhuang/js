
// Utility

myUtil = function() {};

myUtil.prototype.loadScript = function(url, callback)
{
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
}

myUtil.prototype.loadJQuery = function(callback) {
	this.loadScript('http://code.jquery.com/jquery-latest.js', callback);
}

var util = new myUtil();

// End Utility

var tvSeries = [
{id: "67551", done: 0, name: "Elementary V"},
{id: "67571", done: 0, name: "scopin III"},
{id: "67402", name: "Black list IV", done: 0},
{id: "67358", done: 0, name: "shield IV"},
{id: "67286", name: "Blind spot II", done: 6},
{id: "59887", done: 18, name: '美国恐怖故事：畸形秀'},
{id: "67505", name: "Luke Cage", done: 0},
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
{id: "67567", name: "時空守衛 Timeless", done: 0},
{id: "67445", name: "Hells Kitchen XVI", done: 0},
{id: "62207", name: "Mr. Robot", done: 0},
{id: "67552", name: "West World HBO", done: 0},
{id: "59724", name: "Get away with murder I/III"}
];

var parentDiv;

function addParentDiv() {
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

function getElement(parent, append, tag) {
	if (!tag) {
		tag = 'div';
	}
	var d = document.createElement(tag);
	if (append) {
		parent.appendChild(d);
	}
	return d;
}

function loadData(parentDiv) {

	var successCallback = function(tv, url, parentDiv, content) {
		parseData(parentDiv, tv, url, content);
	};

	var failCallabck = function(tv, url, parentDiv) {
		console.log(tv);
	};

	for (var i = 0; i < tvSeries.length; i++) {
		var url = 'http://www.tw116.com/vod-play-id-' + tvSeries[i].id + '-sid-0-pid-0.html';
		$.get(url, successCallback.bind(this, tvSeries[i], url, parentDiv))
			.fail(failCallabck.bind(this, tvSeries[i], url, parentDiv));
	}
}

function parseData(parentDiv, tv, url, content) {  
	var url_list = content.match(/var\s+url_list.*?;/);
	var html = '';
	var players = decodeURIComponent(url_list).split('$$$');
	console.log(players);
	if (players) {
		for (var i = 0; i < players.length; i++) {
			var player = players[i];
			if (player.indexOf("xfplay://") > -1) {
				var title;
				var links = player.split('+++');
				if (links) {
					for (var j = 0; j < links.length; j++) {

						if (tv.done && tv.done > j) {
							continue;
						}

						var tokens = links[j].split('++');
						var name = tokens[0];
						var link = tokens[1];
						if (html.length == 0) {
							var m = /mz=(.*?)S/;
							var execResult = m.exec(link);
							if (execResult) {
							  	html = '<div>' + execResult[1] + ' (' + tv.id + ')</div>';
							} else {
								html = '<div>' + tv.name + ' (' + tv.id + ')</div>';
							}
						}
						var id = tv.id + '-' + j;
						html += '<span style="padding-right:20px;" id="' + id + '">'
							+ '<a href="' + link + '">'+ name +'</a></span>';
					}
				}

			}
		}
	}

	if (html.length == 0) {
		html = '<div><a target=_blank href=' + url + '>' + tv.name + ' (' + tv.id + ', watched:' + tv.done + ')</a></div>';
	}
	var d = getElement(parentDiv, true);
	d.innerHTML = html;
	d.style.marginBottom = '20px';
}

function load() {
	var parentDiv = addParentDiv();
	var tabContainer = getElement(parentDiv, true);
	var tvTab = getElement(parentDiv, true);
	tvTab.style.marginBottom = '20px';
	tvTab.style.marginRight = '20px';
	tvTab.innerText = 'TV';
	var tvContent = getElement(parentDiv, true);
	loadData(tvContent);
}

util.loadJQuery(load);
