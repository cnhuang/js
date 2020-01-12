(function() {
    'use strict';

    function getElm(selector) {
      return $(selector).length == 0 ? null : $(selector)[0];
    };

    function addControlPanel() {
      const header = getElm('header.nav-header-container');
      let panel = getElm('#control-panel');
      if (!panel) {
        panel = $(`<div id='control-panel' style='width:100%;height:100px;'>
                        <input plcaseholder="StartDate yyyy-mm-dd">
                      </div>`);
        header.append(panel);
        console.log('added control panel)';
      }
    }

    addControlPanel();
})();
