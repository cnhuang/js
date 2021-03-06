
var f = () => {
  let parent = document.querySelector('.portfolio-header-row');
  if (!parent)
    return;
  let ths = parent.querySelectorAll('th');
  console.log(ths);
  let lastIndex;
  let sharesIndex;
  let costIndex;
  ths.forEach((th, i) => {
    let label = th.querySelector('.sortable-label');
    if (label) {
    console.log(label.innerHTML);
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
          lastIndex = costIndex = sharesIndex = undefined;
          return;
      }
    }
  });

  if (! (lastIndex && costIndex && sharesIndex))
    return;

  console.log(`${lastIndex} ${costIndex} ${sharesIndex}`); 
  let rows = document.querySelectorAll('.gf-table tbody tr');
  console.log(rows);
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
    
  let shareBaseTitleElem = document.createElement("th");
  let shareBaseTitleSpan = document.createElement("span");
  shareBaseTitleSpan.className = 'sortable-label';
  shareBaseTitleSpan.innerHTML = 'Cost per Share';
  shareBaseTitleElem.appendChild(shareBaseTitleSpan);
  parent.insertBefore(shareBaseTitleElem, ths[lastIndex + 1]);
};

var ff = () => {
  f();
  window.setTimeout(ff, 5000);
}
ff();
