// ==UserScript==
// @name       TW116 - playScript
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @match      http://tw116.com/*/*/
// @copyright  2016+, You
// @require http://code.jquery.com/jquery-latest.js
// @downloadURL https://raw.githubusercontent.com/cnhuang/js/master/tampermonkey/tw116PlayScript.js
// ==/UserScript==

var src = 'https://raw.githubusercontent.com/cnhuang/js/master/tampermonkey/tw116PlayScript.js?' + (new Date()).toISOString();
var stringData = $.ajax({
                    url: src,
                    async: false
                 }).responseText;
eval(stringData);
