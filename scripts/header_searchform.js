$(document).ready(function () {
    const searchBtn = $('.search__button'),
          logoElem = $('.picture__logo'),
          searchFormElem = $('.js__search__form'),
          searchInputElem = $('.js__search__input');

          if (!searchInputElem.width() && ($(window).width() < 1024)) {
            searchFormElem.on('submit',searchBtn ,function () {
                  return false;
            });
            searchFormElem.on('click', searchBtn, function(event){
                  event.preventDefault();
                  searchFormElem.unbind('submit');
                  logoElem.addClass('picture__logo__off');
                  searchInputElem.addClass('search__input__mobile');
                  searchBtn.addClass('search__button__mobile__pressed');
                  searchInputElem.focus();
                  searchFormElem.append(`
                        <button class="close__button js__close__button" name="close-button" aria-label="Скрыть поиск" type="button">x</button>
                  `)
                  .on('click', '.js__close__button', function(event){
                        event.preventDefault();
                        searchInputElem.val('');
                        $(this).remove();
                        logoElem.removeClass('picture__logo__off');
                        searchInputElem.removeClass('search__input__mobile');
                        searchBtn.removeClass('search__button__mobile__pressed');
                        searchFormElem.on('submit',searchBtn ,function () {
                              return false;
                        });
                  });
                  
                  searchBtn.on('click', function(e){
                        searchFormElem.submit();
                  });
                  
                  $('body').on('click', (e) => {
                        if ( !searchFormElem.is(e.target) && searchFormElem.has(e.target).length === 0) {
                              searchInputElem.val('');
                              $('.js__close__button').remove();
                              logoElem.removeClass('picture__logo__off');
                              searchInputElem.removeClass('search__input__mobile');
                              searchBtn.removeClass('search__button__mobile__pressed');
                              searchFormElem.on('submit',searchBtn ,function () {
                                    return false;
                              });
                        }
                    });
            });

      };
});