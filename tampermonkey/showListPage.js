// ==UserScript==
// @name       TW116 - showListPage
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @match      http://www.tw116.com/?my*
// @copyright  2016+, You
// @require http://code.jquery.com/jquery-latest.js
// @downloadURL https://raw.githubusercontent.com/cnhuang/js/master/tampermonkey/showListPage.js
// ==/UserScript==

var src = 'https://raw.githubusercontent.com/cnhuang/js/master/tampermonkey/showListPageDetail.js?' + (new Date()).toISOString();
var stringData = $.ajax({
                    url: src,
                    async: false
                 }).responseText;
alert(stringData);
//var d = document.createElement("script");
//d.setAttribute('type', 'application/javascript');
//d.src = src;
//document.getElementsByTagName('body')[0].appendChild(d);
