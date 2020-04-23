$(document).ready(function(){
    const topbarWrapperElem = $('.js__datetime__wrapper'),
          datetempWrapperEl = $('.js__header__datetemp__wrapper'),
          fullPcDateTime = new Date().toISOString().slice(0, -8),
          localPcTime =  new Date().toLocaleTimeString().slice(0, -3),
          localPcDate = new Date().toLocaleDateString(),
          shortPcDate = new Date().toLocaleString('ru', {month:'long', day:'numeric',weekday: 'short' }).split(', ').reverse().join(', ');
    
    topbarWrapperElem.append(`
        <time class="topbar__time" datetime="${fullPcDateTime}">${localPcTime}
            <span class="topbar__date">${localPcDate}</span>
        </time>
    `);

    datetempWrapperEl.prepend(`
        <time class="header__date" datetime="${fullPcDateTime}">${shortPcDate} 
            <span class="header__time">${localPcTime}</span>
        </time>
    `);
});