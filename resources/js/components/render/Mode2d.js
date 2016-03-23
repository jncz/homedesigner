define(["js/2d/LineRender","js/animation/AnimationEngine"],function(LineRender,AnimationEngine){
  var f = function(context /**2d ctx*/){
      var ctx = context;
      var engine = new AnimationEngine();
      this.boot = function(){
        console.log("2d work");
        var lr = new LineRender(ctx);
        lr.render();
        };
      this.handleEvent = function(){
          clickHandler();
          mousemoveHandler();
        };
        
      var srcX,srcY,targetX,targetY;
      
      var clickHandler = function(){
          var c = ctx.canvas;
          c.addEventListener("mousedown",function(e){
              srcX = e.offsetX;
              srcY = e.offsetY;
              engine.start();
            });
          c.addEventListener("mouseup",function(e){
              console.log(srcX);
              engine.stop();
            });
        };
      var mousemoveHandler = function(){
          var c = ctx.canvas;
          c.addEventListener("mousemove",function(e){
              targetX = e.offsetX;
              targetY = e.offsetY;
              engine.setData();
            });
        };
    };
  
  return f;
  });
