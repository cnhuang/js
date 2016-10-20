// ==UserScript==
// @name       TW116 - my222
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @match      http://www.tw116.com/?my*
// @copyright  2016+, You
// @require http://code.jquery.com/jquery-latest.js
// @downloadURL https://raw.githubusercontent.com/cnhuang/js/master/test.js
// ==/UserScript==

var src = 'https://googledrive.com/host/0BzLXAgqss-F0RTk3WVgxcXpwUTA?' + (new Date()).toISOString();
var d = document.createElement("script");
d.setAttribute('type', 'application/javascript');
d.src = src;
document.getElementsByTagName('body')[0].appendChild(d);

/// from github
