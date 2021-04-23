(function($){
  $(window).on('load', function(){
    $.instagramFeed({
      'tag': 'tritonatrio',
      'container': document.getElementById('instafeed'),
      'display_profile': false,
      'display_biography': false,
      'display_gallery': true,
      'callback': null,
      'styling': true,
      'items': 9,
      'items_per_row': 3,
      'margin': 1,
      'on_error' : console.error
    });
  });
})(jQuery);
