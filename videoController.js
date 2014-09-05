var VideoController = function (a, b) {
    this.video = a;
    this.isMock = b;
   
};
VideoController.prototype = {
    playingFromScene : true,
    setVideo: function (a) {
        this.video = a;
    },
    getVideo: function () {
        return this.video;
    },
    getPlayingFromScene: function(){
        if(this.playingFroamScene){
        }
        return this.playingFromScene;
    }
};

window.onload = function(){

};
var videoObj = new VideoController(1, 2);
videoObj.isMock = 3;
videoObj.setVideo(2);

alert("isMock:" + videoObj.isMock);
alert("video:" + videoObj.getVideo());
alert("getPlayingFromScene: "+ videoObj.getPlayingFromScene());
videoObj.playingFromScene = false;
alert("playingfromscene: "+videoObj.playingFromScene);
