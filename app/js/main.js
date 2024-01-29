// #region header-top
// select
$('.select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
        if ($this.children('option').eq(i).is(':selected')){
          $('li[rel="' + $this.children('option').eq(i).val() + '"]').addClass('is-selected')
        }
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
      $list.find('li.is-selected').removeClass('is-selected');
      $list.find('li[rel="' + $(this).attr('rel') + '"]').addClass('is-selected');
        $list.hide();
        //console.log($this.val());
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});
// active menu nav
$(document).ready(function () {
  $("ul li a").click(function () {
    $("li a").removeClass("active");
    $(this).addClass("active");
  });
});
// selectric
$(function() {
  // $('#basic').selectric();
  $('[id*="basic"]').selectric();
});

// slider
(function ($) {
  $(function () {
    $('.header__preview-slider').slick({
      asNavFor: '.header__slider-wrapper',
      arrows: false,
      fade: true,
    });
  });
})(jQuery);
// 
(function ($) {
  $(function(){
    $('.header__slider-wrapper').slick({
      arrows: true,
      prevArrow:
        '<div class="slider-arrows slider-arrows__left"><div class="arr-left"></div></div>',
      nextArrow:
        '<div class="slider-arrows slider-arrows__right"><div class="arr-right"></div></div>',
      asNavFor: '.header__preview-slider',
    });
  });
})(jQuery);
  // #endregion
  // #region main
  // slider preference
(function ($) {
  $(function () {
    $('.preference-option').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,
        variableWidth: true,
        prevArrow:
          '<div class="slider-arrows slider-arrows__left"><div class="arr-right"></div></div>',
        nextArrow:
        '<div class="slider-arrows slider-arrows__right"><div class="arr-left"></div></div>',
        // autoplay: true,
        // speed: 2000,
        // autoplaySpeed: 5000,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              // centerMode: false,
              // variableWidth: false,
              // dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ],
    });
  });
  // 1
  $(document).ready(function() {
      let isUp = false;
      // Добавляем обработчик события клика на furnitureDescription
      $('.furniture').click(function() {
          // Если элемент поднят, то опускаем его
          if (isUp) {
              $('.furniture-description').animate({
                  'bottom': '30px'
              }, 500); // 500 миллисекунд - время анимации
          }
          // Если элемент опущен, то поднимаем его
          else {
              $('.furniture-description').animate({
                  'bottom': '125px'
              }, 500); // 500 миллисекунд - время анимации
          }
          // Инвертируем состояние
          isUp = !isUp;
          // Используем slideToggle() для скрытия/показа элемента furnitureDescriptionAll
          $('.furniture-description__all').slideToggle();
      });
  });
  // 2
  $(document).ready(function() {
      let isUp = false;
      // Добавляем обработчик события клика на furnitureDescription
      $('.safe').click(function() {
          // Если элемент поднят, то опускаем его
          if (isUp) {
              $('.furniture-safe').animate({
                  'bottom': '30px'
              }, 500); // 500 миллисекунд - время анимации
          }
          // Если элемент опущен, то поднимаем его
          else {
              $('.furniture-safe').animate({
                  'bottom': '125px'
              }, 500); // 500 миллисекунд - время анимации
          }
          // Инвертируем состояние
          isUp = !isUp;
          // Используем slideToggle() для скрытия/показа элемента furnitureDescriptionAll
          $('.furniture-safe__all').slideToggle();
      });
  });
  // 3
  $(document).ready(function() {
      let isUp = false;
      // Добавляем обработчик события клика на furnitureDescription
      $('.delivery').click(function() {
          // Если элемент поднят, то опускаем его
          if (isUp) {
              $('.furniture-delivery').animate({
                  'bottom': '30px'
              }, 500); // 500 миллисекунд - время анимации
          }
          // Если элемент опущен, то поднимаем его
          else {
              $('.furniture-delivery').animate({
                  'bottom': '125px'
              }, 500); // 500 миллисекунд - время анимации
          }
          // Инвертируем состояние
          isUp = !isUp;
          // Используем slideToggle() для скрытия/показа элемента furnitureDescriptionAll
          $('.furniture-delivery__all').slideToggle();
      });
  });

})(jQuery);
// TABS
(function ($) {
  $( function() {
    $("#tabs").tabs({
      hide: { effect: "explode", duration: 1000 },
      show: { effect: "blind", duration: 1000 },
    });
  } );
})(jQuery);

// #endregion
//  Validation Form
// #region validation form
(function ($) {
  $(function() {
    //при нажатии на кнопку с id="save"
    $('#save').click(function(e) {
        e.preventDefault();
      //переменная formValid
      let formValid = true;
      //перебрать все элементы управления input
      $('input').each(function() {
      //найти предков, которые имеют класс .form-group, для установления success/error
      let formGroup = $(this).parents('.form-group');
      //для валидации данных используем HTML5 функцию checkValidity
      if (this.checkValidity()) {
        //добавить к formGroup класс .has-success, удалить has-error
        formGroup.addClass('has-success').removeClass('has-error');
      } else {
        //добавить к formGroup класс .has-error, удалить .has-success
        formGroup.addClass('has-error').removeClass('has-success');
        //отметить форму как невалидную
        formValid = false;
      }
    });
  });
  });
  // Back to top button
let btn = $('#button');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});
})(jQuery)
// #endregion
// wow.js
new WOW().init();
