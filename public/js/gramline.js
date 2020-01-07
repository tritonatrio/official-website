$(document).ready(function() {
  let userFeed = new Instafeed({
    get: 'user',
    userId: '23211116930',
    limit: 10,
    resolution: 'standard_resolution',
    accessToken: '23211116930.1677ed0.44e1039a4c6f475aafb4192898a813ac',
    sortBy: 'most-recent',
    filter: function(image) {
      return image.type === 'image';
    },
    template: `<div class="col-4 gallery instaimg">
            <a href="{{link}}" title="{{caption}}" target="{{_blank}}">
                <img src="{{image}}" alt="{{caption}}" class="img-fluid"/>
            </a>
         </div>`,
  });
  userFeed.run();
});
