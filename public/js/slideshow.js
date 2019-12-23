// script for running slideshow

let slideshowDuration = 4000;
let slideshow = $('.slideshow');

function slideshowSwitch(slideshow, index, auto) {
  if (slideshow.data('wait')) return;

  let slides = slideshow.find('.slide');
  let pages = slideshow.find('.pagination');
  let activeSlide = slides.filter('.is-active');
  let activeSlideImage = activeSlide.find('.image-container');
  let newSlide = slides.eq(index);
  let newSlideImage = newSlide.find('.image-container');
  let newSlideContent = newSlide.find('.slide-content');
  let newSlideElements = newSlide.find('.caption > *');
  if (newSlide.is(activeSlide)) return;

  newSlide.addClass('is-new');
  let timeout = slideshow.data('timeout');
  clearTimeout(timeout);
  slideshow.data('wait', true);
  let transition = slideshow.attr('data-transition');
  if (transition == 'fade') {
    newSlide.css({
      display: 'block',
      zIndex: 2,
    });
    newSlideImage.css({
      opacity: 0,
    });

    TweenMax.to(newSlideImage, 1, {
      alpha: 1,
      onComplete: function() {
        newSlide.addClass('is-active').removeClass('is-new');
        activeSlide.removeClass('is-active');
        newSlide.css({
          display: '',
          zIndex: '',
        });
        newSlideImage.css({
          opacity: '',
        });
        slideshow.find('.pagination').trigger('check');
        slideshow.data('wait', false);
        if (auto) {
          timeout = setTimeout(function() {
            slideshowNext(slideshow, false, true);
          }, slideshowDuration);
          slideshow.data('timeout', timeout);
        }
      },
    });
  } else {
    if (newSlide.index() > activeSlide.index()) {
      var newSlideRight = 0;
      var newSlideLeft = 'auto';
      var newSlideImageRight = -slideshow.width() / 8;
      var newSlideImageLeft = 'auto';
      var newSlideImageToRight = 0;
      var newSlideImageToLeft = 'auto';
      var newSlideContentLeft = 'auto';
      var newSlideContentRight = 0;
      var activeSlideImageLeft = -slideshow.width() / 4;
    } else {
      var newSlideRight = '';
      var newSlideLeft = 0;
      var newSlideImageRight = 'auto';
      var newSlideImageLeft = -slideshow.width() / 8;
      var newSlideImageToRight = '';
      var newSlideImageToLeft = 0;
      var newSlideContentLeft = 0;
      var newSlideContentRight = 'auto';
      var activeSlideImageLeft = slideshow.width() / 4;
    }

    newSlide.css({
      display: 'block',
      width: 0,
      right: newSlideRight,
      left: newSlideLeft,
      zIndex: 2,
    });

    newSlideImage.css({
      width: slideshow.width(),
      right: newSlideImageRight,
      left: newSlideImageLeft,
    });

    newSlideContent.css({
      width: slideshow.width(),
      left: newSlideContentLeft,
      right: newSlideContentRight,
    });

    activeSlideImage.css({
      left: 0,
    });

    TweenMax.set(newSlideElements, {
      y: 20,
      force3D: true,
    });
    TweenMax.to(activeSlideImage, 1, {
      left: activeSlideImageLeft,
      ease: Power3.easeInOut,
    });

    TweenMax.to(newSlide, 1, {
      width: slideshow.width(),
      ease: Power3.easeInOut,
    });

    TweenMax.to(newSlideImage, 1, {
      right: newSlideImageToRight,
      left: newSlideImageToLeft,
      ease: Power3.easeInOut,
    });

    TweenMax.staggerFromTo(
      newSlideElements,
      0.8,
      {
        alpha: 0,
        y: 60,
      },
      {
        alpha: 1,
        y: 0,
        ease: Power3.easeOut,
        force3D: true,
        delay: 0.6,
      },
      0.1,
      function() {
        newSlide.addClass('is-active').removeClass('is-new');
        activeSlide.removeClass('is-active');
        newSlide.css({
          display: '',
          width: '',
          left: '',
          zIndex: '',
        });

        newSlideImage.css({
          width: '',
          right: '',
          left: '',
        });

        newSlideContent.css({
          width: '',
          left: '',
        });

        newSlideElements.css({
          opacity: '',
          transform: '',
        });

        activeSlideImage.css({
          left: '',
        });

        slideshow.find('.pagination').trigger('check');
        slideshow.data('wait', false);
        if (auto) {
          timeout = setTimeout(function() {
            slideshowNext(slideshow, false, true);
          }, slideshowDuration);
          slideshow.data('timeout', timeout);
        }
      },
    );
  }
}

function slideshowNext(slideshow, previous, auto) {
  let slides = slideshow.find('.slide');
  let activeSlide = slides.filter('.is-active');
  let newSlide = null;
  if (previous) {
    newSlide = activeSlide.prev('.slide');
    if (newSlide.length === 0) {
      newSlide = slides.last();
    }
  } else {
    newSlide = activeSlide.next('.slide');
    if (newSlide.length == 0) newSlide = slides.filter('.slide').first();
  }

  slideshowSwitch(slideshow, newSlide.index(), auto);
}

function homeSlideshowParallax() {
  let scrollTop = $(window).scrollTop();
  if (scrollTop > windowHeight) return;
  let inner = slideshow.find('.slideshow-inner');
  let newHeight = windowHeight - scrollTop / 2;
  let newTop = scrollTop * 0.8;

  inner.css({
    transform: 'translateY(' + newTop + 'px)',
    height: newHeight,
  });
}

$(document).ready(function() {
  // ----------------------------------
  // slideshow callbacks
  $('.slide').addClass('is-loaded');

  $('.slideshow .arrows .arrow').on('click', function() {
    slideshowNext($(this).closest('.slideshow'), $(this).hasClass('prev'));
  });

  $('.slideshow .pagination .item').on('click', function() {
    slideshowSwitch($(this).closest('.slideshow'), $(this).index());
  });

  $('.slideshow .pagination').on('check', function() {
    let slideshow = $(this).closest('.slideshow');
    let pages = $(this).find('.item');
    let index = slideshow.find('.slides .is-active').index();
    pages.removeClass('is-active');
    pages.eq(index).addClass('is-active');
  });

  let timeout = setTimeout(function() {
    slideshowNext(slideshow, false, true);
  }, slideshowDuration);

  slideshow.data('timeout', timeout);

  if ($('.main-content .slideshow').length > 1) {
    $(window).on('scroll', homeSlideshowParallax);
  }
});
