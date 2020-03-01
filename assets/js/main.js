/*-- built in function for sections appearing on scroll --*/

$(document).ready(function () {
  new WOW().init();
});




/*-- Back to top btn --*/

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



/*-- function to refresh page when Modal close button is clicked --*/

function refreshPage() {
  window.location.reload();
}

