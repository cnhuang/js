// ==UserScript==
// @name         Reaction Install
// @namespace    http://www.recreation.gov/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://www.recreation.gov/*
// @require      http://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==


(function() {
    'use strict';

    let stopFlag = false;

    function getElm(selector) {
      return $(selector).length == 0 ? null : $(selector);
    };

    function addControlPanel() {
      const header = getElm('header.nav-header-container');
      let panel = getElm('#control-panel');
      if (!panel) {
        panel = $(`<div id="control-panel" style="width:100%;border:1px solid;padding:24px;display:flex;background-color:#ababf922;">
                     <div style="display:flex;flex-direction:column; padding-right:24px;">
                       <!-- <div style="display:flex;">
                         <div>Token: <input type="text" id="h-token"></div>
                       </div>
                       <div style="display:flex;">
                         <div>Account id: <input type="text" id="h-accountId"></div>
                       </div>
                       <div style="display:flex;">
                         <div>Booking dates: <input type="text" placeholder="yyyy-mm-dd[, yyyy-mm-dd]" id="h-startDate"></div>
                       </div> -->
                       <div style="display:flex;">
                         <!-- <div>Camp id: <input type="text" id="h-campId" value="232450"></div> -->
                         <div>Site id: <input type="text" id="h-siteId"></div>
                         <div>days: <input type="text" id="h-days" value="1"></div>
                       </div>
                       <div style="display:flex;">
                         <div>Starting Time: <input type="text" placeholder="hhmm" id="h-startTime"></div>
                       </div>
                     </div>
                     <div>
                       <div>
                         <button id="h-addSiteId">Add site id</button>
                         <button id="h-book">Book</button>
                         <button id="h-stop">Stop</button>
                       </div>
                       <textarea id="h-log" rows="10" cols="50" readonly>initialized</textarea>
                     </div>
                   </div>`);
        header.after(panel[0]);
        getElm('#h-book').bind( "click", () => start());
        getElm('#h-addSiteId').bind( "click", () => addSiteId());
        getElm('#h-stop').bind( "click", () => stop());
        isTableReady().done(() => addSiteId());
      }
    }

    function start() {
        stopFlag = false;
        const now = new Date();
        let minutes = now.getMinutes();
        if (minutes < 10) {
            minutes = `0${minutes}`;
        }
        const nowTime = `${now.getHours()}${minutes}`;
        const targetTime = Number(getElm('#h-startTime').val());
        console.log(targetTime + '-' + nowTime);

        if (targetTime > nowTime) {
            log('will start @ ' + targetTime);
            setTimeout(() => start(), 1000);
        } else {
            book();
        }
    }

    function refresh() {
        document.querySelector('.rec-icon-refresh').parentElement.click();
        log('reloading table');
        return isTableReady();
    }

    function isTableReady() {
        var deferred = $.Deferred();

        var myVar = setInterval(() => {
            if(getElm('#availability-table') && !getElm('#availability-table').hasClass('table-has-overlay')) {
                deferred.resolve(true);
                clearInterval(myVar);
                log('table ready');
            } else {
                log('checking table')
            }
        }, 100);

        return deferred.promise();
    }

    function book() {
        log('bookling');
        if(document.querySelector('.rec-icon-expand')) {
            document.querySelector('.rec-icon-expand').parentElement.click();
        }
        refresh().done(() => {
            const siteId = getElm('#h-siteId').val();
            const days = Number(getElm('#h-days').val());
            const tds = getElm(`#${siteId} td`).get();
            clickTd(tds[1]);
            if (days > 1) {
                clickTd(tds[1 + days]);
            }
            const bookBtn = getElm('.rec-campground-availability-book-now-content > button');
            if (bookBtn && !bookBtn.hasClass('sarsa-button-disabled')) {
                bookBtn.click();
            } else {
                if (stopFlag) {
                    log('stop');
                } else {
                    setTimeout(() => book(), 1000);
                }
            }
        });;
    }

    function clickTd(td) {
        const b = $('button', td);
        if (b) {
            b.click();
        }
    }

    function stop() {
        stopFlag = true;
    }

    function addSiteId() {
        $('#availability-table tbody tr').get().forEach((tr) => {
             getElm(`#${tr.id} button`).get(0).append(`(${tr.id})`);
          });
    }

    function checkAvalibility() {
        const dateStr = getElm("#h-startDate").val();
        log('checking 2020-' + dateStr);
        const dates = dateStr.split(',').map((s) => s.trim());
        const months = new Set();
        const results = [];
        dates.forEach((d) => {
            const m = d.split('-')[1];
            if (months.has(m)) {
                return;
            }
            months.add(m);
            const url = `https://www.recreation.gov/api/camps/availability/campground/${getElm("#h-campId").val()}/month?start_date=2020-${m}-01T00:00:00.000Z`;
            $.get(url, (data) => results.push(data));
        });

        const gate_a = {
            "value": getElm("#h-token").val(),
            "description": "campingAvailabilityGridBooking",
            "success":true,
            "terminal":"east"
        };

        const data = {
                 'reservations': [
                     {
                         'account_id':'49826746',
                         'campsite_id':'42153',
                         'check_in':'2020-01-13T00:00:00.000Z',
                         'check_out':'2020-01-14T00:00:00.000Z',
                         'reservation_options': {
                             'recommendation_referrer': null
                         }
                     },
                     {
                         'account_id':'49826746',
                         'campsite_id':'42154',
                         'check_in':'2020-01-13T00:00:00.000Z',
                         'check_out':'2020-01-14T00:00:00.000Z',
                         'reservation_options': {
                             'recommendation_referrer': null
                         }
                     }
                 ],
            gate_a,
        };

        const url = `https://www.recreation.gov/api/camps/reservations/campgrounds/${getElm("#h-campId").val()}/multi`;
        $.ajax({
            url: url,
            type: "POST",
            dataType: "json",
            data: JSON.stringify(data),
            contentType: "application/json"
        });
       // $.post(`https://www.recreation.gov/api/camps/reservations/campgrounds/${getElm("#h-campId").val()}/multi`, JSON.stringify(data));
    }

    function log(str) {
        const area = $("#h-log");
        if (area) {
            area.val(area.val() + "\n" + str);
        } else {
            console.log(str);
        }
    }

    log('>>> lets recreation');
    addControlPanel();
})();
