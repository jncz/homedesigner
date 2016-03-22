define(["js/screenDim"],function(screenDim){
  var f = function(context /**2d ctx*/){
      var ctx = context;
      var lineGap = 20;//px
      this.render = function(){
        var dim = screenDim.dim(ctx);
        this.renderByX(dim);
        this.renderByY(dim);
        };
        
        this.renderByX = function(dim){
          ctx.lineWidth = 0.1;
          var lines = [];
          for(var i=1;i<dim[1]/lineGap;i++){
            lines.push([{x:0,y:i*lineGap},{x:dim[0],y:i*lineGap}]);
            }
          
          renderLines(lines);
          };
        this.renderByY = function(dim){
          ctx.lineWidth = 0.1;
          var lines = [];
          for(var i=1;i<dim[0]/lineGap;i++){
            lines.push([{x:i*lineGap,y:0},{x:i*lineGap,y:dim[0]}]);
            }
          
          renderLines(lines);
          };
          
        var renderLines = function(lines){
          for(var i=0;i<lines.length;i++){
            renderLine(lines[i]);
            }
          };
        var renderLine = function(line){
          var startPoint = line[0];
          var endPoint = line[1];
          ctx.beginPath();
          ctx.lineTo(startPoint.x, startPoint.y);
          ctx.lineTo(endPoint.x,endPoint.y);
          ctx.stroke();
          ctx.closePath();
          };
    };
  
  return f;
  });
