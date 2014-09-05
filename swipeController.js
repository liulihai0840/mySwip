 var SwipeController = function(param) {
    this.node = param.node;
    this.node.style.left = param.x;
    this.node.style.top = param.y;
    this.node.style.width = param.width;
    this.node.style.height = param.height;
    this.click = param.click;
    this.enableDrag = false;
    this.dragStartX = 0;
    this.delta=0;
  // = param.x;
  //this.position.y = param.y;
};

SwipeController.prototype = {
    //dragStartX: 0,
        addEventListeners: function(params){
              if(isIOS()){

                   /* function getWrapper(params){
                        return function(){
                            this.endSwipe(params);
                        }
                    }*/
                    this.node.addEventListener('touchstart',this.startSwipe,false);
                    this.node.addEventListener('touchmove',this.doSwipe,false);
                    this.node.addEventListener('touchend',this.endSwipe(params),false);

                }else{
                    this.node.addEventListener('mousedown',this.startSwipe,false);
                    this.node.addEventListener('mousemove',this.doSwipe,false);
                    this.node.addEventListener('mouseup',this.endSwipe(params),false);
                }
        },

       startSwipe: function(event){
            //event.preventDefault();
            this.enableDrag = true;
            console.log(this.node);
            this.dragStartX = event.clientX;
           // this.dragStartX = this.getEventPos(event);
        },
        doSwipe:function(event){
            if(this.enableDrag){
                var currentX= event.clientX;
                this.delta=currentX-this.dragStartX;
            }
        },
 
       endSwipe: function(param){
            //  e.stopPropagation();
            if (this.enableDrag) {
                this.enableDrag = false;
                if(this.delta<0){
                    list[param].next();
                    if(click === false){
                        this.updateDetails(param,false);
                    }
                }
                else if(this.delta>0){
                    list[param].previous();
                    if(click === false){
                        this.updateDetails(param,false);
                    }
                }
                else{
                    console.log("endswipe");
                    if(click === true){
                        this.updateDetails(param,false);
                    }
                }
                this.removeSwipe(this);
                delta=0;
            }
        },


       getEventPos: function(event){
            if(isIOS()){
                return event.changedTouches[0].clientX;//event.originalEvent.changedTouches[0].pageX
            }else{
                return event.clientX;
            }
        },

        removeSwipe: function (obj){
            if(isIOS()){
                obj.removeEventListener("touchmove",function (){ console.log("remove event");},false);  //safari, chrome, firefox，func
            }else{
                if (window.addEventListener) {
                    obj.removeEventListener("mousemove",function(){ console.log("remove event");},false);  //safari, chrome, firefox，func
                }
            }

        },

        getDelta: function(){
            return this.delta;
        },
        updateDetails: function(param,flag){
        

        }
};

       
      
