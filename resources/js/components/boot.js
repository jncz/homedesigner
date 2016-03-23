define(["js/render/Mode2d"],function(Mode2d){
  var a = {
      boot:function(){
        var canvas = document.getElementById("my-canvas");
        //var gl = canvas.getContext("webgl");
        //gl.clearColor(0.2,0.0,0.0,1.0);
        //gl.clear(gl.COLOR_BUFFER_BIT);
        var c = canvas.getContext("2d");
        //console.log(c);
        var d2 = new Mode2d(c);
        d2.boot();
        d2.handleEvent();
        }
    };
  
  return a;
});
