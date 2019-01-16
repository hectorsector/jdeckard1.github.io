/*
https://lidiascode.azurewebsites.net/how-to-create-an-animated-sticky-header/
*/

$(window).scroll(function () {
  if ($(this).scrollTop() > 1) {
    $('.navbar-default').addClass('navbar-shrink')
      } else {
    $('.navbar-default').removeClass('navbar-shrink')
      }
})
