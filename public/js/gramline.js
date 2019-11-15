$(document).ready(function () {
    let userFeed = new Instafeed({
        get: 'user',
        userId: '23211116930',
        limit: 7,
        resolution: 'standard_resolution',
        accessToken: '23211116930.1677ed0.b3e7638450e94c408a043a10d0e5bb5e',
        sortBy: 'most-recent',
        filter: function (image) {
            return image.type === 'image';
        },
        template: 
        `<div class="col-4 gallery instaimg">
            <a href="{{link}}" title="{{caption}}" target="{{_blank}}">
                <img src="{{image}}" alt="{{caption}}" class="img-fluid"/>
            </a>
         </div>`,
    });
    userFeed.run();
})