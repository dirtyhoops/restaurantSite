$(document).ready(function() {
  $('#nav-link-home').click(function() {
    $path = $('#header').offset().top;
    $('html, body').animate({ scrollTop: $path }, 850);
  });
  $('#nav-link-logo').click(function() {
    $path = $('#header').offset().top;
    $('html, body').animate({ scrollTop: $path }, 850);
  });
  $('#nav-link-about').click(function() {
    $path = $('#section-about').offset().top;
    $('html, body').animate({ scrollTop: $path }, 850);
  });
  $('#nav-link-drinks').click(function() {
    $path = $('#section-menu-drinks').offset().top;
    $('html, body').animate({ scrollTop: $path }, 850);
  });
  $('#nav-link-menu').click(function() {
    $path = $('#section-menu').offset().top;
    $('html, body').animate({ scrollTop: $path }, 850);
  });
  $('#nav-link-reservation').click(function() {
    $path = $('#reservation').offset().top;
    $('html, body').animate({ scrollTop: $path }, 850);
  });
  $('#nav-link-location').click(function() {
    $path = $('#section-location').offset().top;
    $('html, body').animate({ scrollTop: $path }, 850);
  });
});

// for navigation bar when it's mobile size
$(document).ready(function() {
  $('.nav__menuicon').on('click', function() {
    $('nav ul').toggleClass('showing');
  });
});

$(document).ready(function() {
  $('.nav__menu ul li a').on('click', function() {
    $('nav ul').toggleClass('showing');
  });
});

// scrolling effect for nav bar
$(window).on('scroll', function() {
  if ($(window).scrollTop() > 20) {
    $('nav').addClass('black');
  } else {
    $('nav').removeClass('black');
  }
});
