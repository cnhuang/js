// ==UserScript==
// @name         Google Finance Portfolio
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://www.google.com/finance/portfolio*
// @require      http://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==

let src = 'https://raw.githubusercontent.com/cnhuang/js/master/tampermonkey/GoogleFinancePortfolio.js?' + (new Date()).toISOString();
let stringData = $.ajax({
                    url: src,
                    async: false
                 }).responseText;
eval(stringData);
