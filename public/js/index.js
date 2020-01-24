$(document).ready(function() {
  // -----------------------------------------------
  // site loader
  $(window).on('load', () => {
    // listen for load of window
    setTimeout(function() {
      $('.loader-wrapper').addClass('zero-opacity');
    }, 1000);
    setTimeout(function() {
      $('.loader-wrapper').addClass('hidden');
    }, 2000);
  });

  // set the amount of clicks for the hamburger menu
  let clicks = 0;
  // ------------------------------------------------
  // Navbar fading
  $('#Navbar a').hover(
    function() {
      // over
      $(this).addClass('half-opacity');
      $(this).removeClass('full-opacity');
    },
    function() {
      // out
      $(this).addClass('full-opacity');
      $(this).removeClass('half-opacity');
    },
  );

  // click navbar links and close menu
  $('#Navbar a').click(function(event) {
    // check window width
    let $window = $(window);
    let windowsize = $window.width();
    const id = event.target.getAttribute('href');
    // only do this on medium size screen
    if (windowsize < 767) {
      setTimeout(function() {
        $('.hamburger').click();
      }, 200);
    }

    // adjust scrolling behaviour
    if (windowsize < 500) {
      event.preventDefault();
      const yOffset = -50;
      const y =
        $(id)[0].getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    } else if (windowsize > 500 && id === '#press') {
      event.preventDefault();
      const yOffset = -100;
      const y =
        $(id)[0].getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    }
  });

  // ----------------------------------------
  // hamburger animation
  $('.hamburger').click(function(e) {
    // checking the scroll location
    e.preventDefault();
    let top = $(document).scrollTop();
    let target = 100;
    // toggle hamburger
    if (clicks % 2 == 0 && top > target) {
      $(this).addClass('is-active');
      $('#Navbar').addClass('black-background');
      $('#Navbar').removeClass('transparent');
    } else if (clicks % 2 == 0 && top <= target) {
      $(this).addClass('is-active');
      $('#Navbar').addClass('black-background');
      $('#Navbar').removeClass('transparent');
    } else if (clicks % 2 != 0 && top > target) {
      $(this).removeClass('is-active');
      $('#Navbar').addClass('black-background');
      $('#Navbar').removeClass('transparent');
    } else if (top <= target && clicks % 2 != 0) {
      $(this).removeClass('is-active');
      setTimeout(() => {
        $('#Navbar').addClass('transparent');
        $('#Navbar').removeClass('black-background');
      }, 400);
    }

    ++clicks;
  });
  // -------------------------------
  // toggle menu transparency
  $(window).scroll(function() {
    let top = $(window).scrollTop();
    let target = 100;
    // scroll past threshold
    if (clicks % 2 == 0 && top > target) {
      $('#Navbar').addClass('black-background');
      $('#Navbar').removeClass('transparent');
    } else if (clicks % 2 == 0 && top <= target) {
      $('#Navbar').addClass('transparent');
      $('#Navbar').removeClass('black-background');
    } else if (clicks % 2 != 0 && top > target) {
      $('#Navbar').addClass('black-background');
      $('#Navbar').removeClass('transparent');
    } else if (top <= target && clicks % 2 != 0) {
      $('#Navbar').addClass('black-background');
      $('#Navbar').removeClass('transparent');
    }
  });
  // ---------------------------------------
  // music player
  // play the music if they click listen
  $('.slideshow .slide').on('click', '.btn', function(e) {
    e.preventDefault();
    let music_button = $('.pp-btn');
    music_button.removeClass('play');
    music_button.addClass('pause');
    player.play();
  });

  // play/pause button
  $('#Navbar').on('click', '.pp-btn', function(e) {
    e.preventDefault();
    if ($(this).hasClass('pause')) {
      $(this).removeClass('pause');
      $(this).addClass('play');
      player.pause();
    } else {
      $(this).removeClass('play');
      $(this).addClass('pause');
      player.play();
    }
  });

  // ----------------------------------
  // set the year
  $(document).ready(function() {
    let year = new Date().getUTCFullYear();
    $('#copyright-year').text(String(year));
  });
});
