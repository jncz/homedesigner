define([],function(){
  var a = {
      boot:function(){
        var canvas = document.getElementById("my-canvas");
        var gl = canvas.getContext("webgl");
        gl.clearColor(0.2,0.0,0.0,1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        }
    };
  
  return a;
});
