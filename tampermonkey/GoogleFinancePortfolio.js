
var f = function() {
  let parent = document.querySelector('.portfolio-header-row');
  if (!parent)
    return;
  let ths = parent.querySelectorAll('th');
  let lastIndex;
  let sharesIndex;
  let costIndex;
  ths.forEach((th, i) => {
    let label = th.querySelector('.sortable-label');
    if (label) {
      switch(label.innerHTML) {
        case 'Last price':
          lastIndex = i;
          break;
        case 'Cost basis':
          costIndex = i;
          break;
        case 'Shares':
          sharesIndex = i;
          break;
        case 'Cost per Share':
          return;
      }
    }
  });
  let shareBaseTitleElem = document.createElement("th");
  shareBaseTitleElem.innerHTML = 'Cost per Share';
  parent.insertBefore(shareBaseTitleElem, ths[lastIndex + 1]);

  let rows = document.querySelectorAll('.gf-table tbody tr');
  rows.forEach((row) => {
    let tds = row.querySelectorAll('td');
    let cost = parseInt(tds[costIndex].innerHTML.replace(',', ''));
    let share = parseInt(tds[sharesIndex].innerHTML.replace(',', ''));
    let shareBase = cost / share * 100;
    shareBase = Math.round(shareBase) / 100;
    if (isNaN(shareBase))
      shareBase = '';
    let shareBaseElem = document.createElement("td");
    shareBaseElem.innerHTML = shareBase;
    shareBaseElem.className = 'pf-table-cell rgt';
    row.insertBefore(shareBaseElem, tds[lastIndex + 1]);
    console.log(`${cost} / ${share} = ${shareBase}`);
  }); 
};

ff() {
  f();
  window.setTimeout(ff, 5000);
}
ff();
