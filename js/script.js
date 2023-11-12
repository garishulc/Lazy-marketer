$(document).ready(function () {
  $('.icon-menu').click(function (event) {
    $(".icon-menu").toggleClass('_active');
    $(".menu__body").toggleClass('_active');
    $('body').toggleClass('lock');
  });
});

$(document).ready(function () {
  $('.menu__link, .header__menu-logo').click(function (event) {
    $('.icon-menu, .menu__body').removeClass('_active');
    $('body').removeClass('lock')
  });
});

$(document).ready(function () {
  // плавное перемещение страницы к нужному блоку
  $("nav li a").click(function () {
    elementClick = $(this).attr("href");
    //для смещения позиции вертикальной  точки перемещенния добавляем к параметру (top - 125) - в пикселя
    destination = $(elementClick).offset().top  -200;
    $("body,html").animate({ scrollTop: destination }, 100);
  });
  $(function (a) {
    // при клике на ссылку плавно поднимаемся вверх
    $("#back-top a").click(function () {
      $("body,html").animate({ scrollTop: 0 }, 100);
      return false;
    });
  });
});
// инициализируем Swiper
// new Swiper('.price-slider');