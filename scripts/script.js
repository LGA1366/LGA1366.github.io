$(document).ready(function(){
    const localdate = new Date(),
          date = new Date().toLocaleDateString(),
          time = localdate.getHours() + ":" + localdate.getMinutes(),
          topbarWrapperElem = $('.js__datetime__wrapper');
    
    topbarWrapperElem.append(`
    <time class="topbar__time" datetime="2019-08-21T16:00">${time}</time>
    <time class="topbar__date" datetime="2019-08-21T16:00">${date}</time>
    `
    );

    const burgerBtn = $('.js__header__burger'),
          headerContainerElem = $('.js__fixed__container__header');

        headerContainerElem.on('click', '.js__header__burger', function(event){
        event.preventDefault();
        console.log($(this));
        $(this).find('.header__burger__span').toggleClass('pressed');
        $(this).parents('.js__fixed__container__header').find('.header__navigation').toggleClass('header__navigation__burger');
        $(this).parents('.js__fixed__container__header').find('.header__navigation__list').toggleClass('header__navigation__list__burger');
        $(this).parents('.js__fixed__container__header').find('.header__nav__item').toggleClass('header__nav__item__burger');
        $(this).parents('html').toggleClass('show__burger');

    });
        const baseUrl = "http://data.fixer.io/api/latest?access_key=",
              key = "fede7e12e787ff5ee406bcaa05ef258f",
              eurRow = $('.js__eur__exchange'),
              usdRow = $('.js__usd__exchange');
        
        let eurRate, usdRate, usd;

        $.ajax({
            url: baseUrl+key,   
            dataType: 'jsonp',
            success: function(json) {
                
                if (!json.success) {
                    eurRow.append(
                    `<td class="unavailable" rowspan="2">Сервис временно недоступен</td>`
                    );
                    usdRow.css("border-bottom","none");
                    eurRow.css("border-bottom","none");
                    console.log(json.error.info);
                } else {
                    eurRate = json.rates.RUB.toFixed(4);
                    usd = json.rates.USD;
                    usdRate = (eurRate/usd).toFixed(4);
                    eurRow.append(
                            `<td>${eurRate}</td>`
                    );
                    usdRow.append(
                            `<td>${usdRate}</td>`
                    );   
                }          
            }
        });
});