define(["js/2d/LineRender"],function(LineRender){
  var f = function(){
      this.boot = function(ctx /**2d ctx*/){
        console.log("2d work");
        var lr = new LineRender(ctx);
        lr.render();
        };
        
    };
  
  return f;
  });
