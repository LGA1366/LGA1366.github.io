$(document).ready(function(){
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