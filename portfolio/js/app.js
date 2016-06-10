$(document).ready(function() {

  $('#side_links').on('click', function() {
    $('.sidebar').css({
      'left': '-190px'
    });
  });

  $('#side_links').on('click', function() {
    $('.hamburger').css({
      'left': '20px'
    });
  });

  $('.hamburger').on('click', function() {
    console.log('hamburger clicked');
  });


});
