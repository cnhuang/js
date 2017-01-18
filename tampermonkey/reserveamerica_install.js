// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://www.reserveamerica.com/*
// @require      http://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==

const USER_NAME = 'cnhuang@gmail.com';
const PASSWORD = 'g3sj61u3';
const CAMP_URL = 'http://www.reserveamerica.com/switchBookingAction.do?contractCode=NRSO&parkId=70928&siteId=203394&camparea=82267465&arvdate=03%2F31%2F2017&lengthOfStay=2&dateChosen=true';
const NUM_OCCUPANTS = 1;
const NUM_VEHICLES = 1;
const CARD_TYPE = 'DISC'; //'VISA', 'MAST', 'DISC', 'AMEX'
const CARD_NUMBER = '123456789';
const CARD_EXP_MONTH = '09';
const CARD_EXP_YEAR = '2019';
const FIRST_NAME = 'First Name';
const LAST_NAME = 'Last Name';

let src = 'https://raw.githubusercontent.com/cnhuang/js/master/tampermonkey/reserveamerica.js?' + (new Date()).toISOString();
let stringData = $.ajax({
                    url: src,
                    async: false
                 }).responseText;
eval(stringData);
