$(document).ready(function () {
    const headerBurgerBtn = $('.js__header__burger');
    
    headerBurgerBtn.on('click', function(event){
        event.preventDefault();
        $('body').toggleClass('show__burger');
    });
});