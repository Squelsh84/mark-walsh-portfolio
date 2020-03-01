$(document).ready(function () {
  $('#mainCarousel').carousel({
    interval: 4000
  });

  var clickEvent = false;
  $('#mainCarousel').on('click', '.nav a', function () {
    clickEvent = true;
    $('.nav li').removeClass('active');
    $(this).parent().addClass('active');
  }).on('slid.bs.carousel', function (e) {
    if (!clickEvent) {

      var count = $('#indexmenu').children().length - 1;
      var current = $('#indexmenu li.active');
      current.removeClass('active').next().addClass('active');
      var id = parseInt(current.next().data('slide-to'));
      if (isNaN(id)) {
        $('#indexmenu li').first().addClass('active');
      }
    }
    clickEvent = false;
  });
});



$(document).ready(function () {
  new WOW().init();
});





$(function () {
  $('a[href*=#]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
  });
});



/* Back to top btn */

let btn = $('#back-to-top');

$(window).scroll(() => {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', (e) => {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});



/* function to refresh page when Modal close button is clicked */

function refreshPage() {
  window.location.reload();
}




