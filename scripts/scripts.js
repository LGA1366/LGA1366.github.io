// swiper

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// accordion

$( function() {
  $( ".accordion" ).accordion({
    collapsible: true,
    active: 6,
    icons: null,
    header: "button"
  });
});

// burger

const burgerBtn = document.querySelector('.js-header-burger'),
      headerNavList = document.querySelector('.header__navigation');
burgerBtn.addEventListener('click', function(e){
  e.preventDefault;
  document.body.classList.toggle('show-burger');
  headerNavList.classList.toggle('container')
});
