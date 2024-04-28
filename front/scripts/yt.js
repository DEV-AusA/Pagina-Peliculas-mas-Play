// cada video con su ID
function onYouTubeIframeAPIReady() {
    createPlayer('81UOofW82FY', 'banner-1');
    createPlayer('6tPKtP46YPw', 'banner-2');
    createPlayer('uwmDH12MAA4', 'banner-3');
};

// function que agrega videos al div con id anterior
function createPlayer(videoId, playerId) {
    var player = new YT.Player(playerId, {
        height: '475',
        width: '1268',
        videoId: videoId,
        playerVars: {
            'autoplay': 1,
            'mute': 1,
            'controls': 0,
            'showinfo': 0,
            'modestbranding': 1,
            'loop': 1,
            'playlist': videoId,
            'fs': 0,
            'iv_load_policy': 3,
            'title': 0,
            'disablekb': 1
        },
        events: {
            'onReady': function(event) {
                event.target.playVideo();
            }
        }
    });
}

module.exports = {
    onYouTubeIframeAPIReady
}