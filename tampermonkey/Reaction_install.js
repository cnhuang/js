// ==UserScript==
// @name         Reaction Install
// @namespace    http://www.recreation.gov/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://www.recreation*
// @require      http://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==

let src = 'https://raw.githubusercontent.com/cnhuang/js/master/tampermonkey/Reaction.js?' + (new Date()).toISOString();
let stringData = $.ajax({
                    url: src,
                    async: false
                 }).responseText;
eval(stringData);
