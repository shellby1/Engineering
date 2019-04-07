(
    function (window, document)
    {
        function Drawer(container)
        {
            this.container = container;
            this.ctx = null;
            this.wdth = 1280;
            this.hght = 640;
            this.color = '#afafaf';
            this.createCanv();
        };

        Drawer.prototype.createCanv =
            function ()
            {
                var canvas = document.createElement("canvas");
                this.ctx = canvas.getContext("2d");
                canvas.width = this.wdth;
                canvas.height = this.hght;
                canvas.style.backgroundColor = this.color;
                this.container.appendChild(canvas);
            };
        Drawer.prototype.translateSelf =
            function (dx, dy)
            {
                dx = dx || this.wdth / 2;
                dy = dy || this.hght / 2;
                this.ctx.translate(dx, dy);
            };
        Drawer.prototype.drawCoord =
            function ( cx, cy)
            {
                var cx = cx || (this.wdth / 2);
                var cy = cy || (this.hght / 2);
                this.translateSelf(cx, cy);
                this.drawVectorByCoord(-cx + 10, 0, cx - 10, 0);
                this.drawVectorByCoord(0, -cy + 10, 0, cy - 10);
            };
        Drawer.prototype.drawLineByStartAngle =
            function (x1, y1, len, angle)
            {
                var _x = len * Math.cos(angle) + x1;
                var _y = len * Math.sin(angle) + y1;
                this.drawLineByCoord(x1, y1, _x, _y);
            };
        Drawer.prototype.drawLineByCoord =
            function (x1, y1, x2, y2, color)
            {
                this.ctx.strokeStyle = color || '#000000';
                this.ctx.beginPath();
                this.ctx.moveTo(x1, -y1);
                this.ctx.lineTo(x2, -y2);
                this.ctx.stroke();
                this.ctx.closePath();
            };
        Drawer.prototype.drawArrow =
            function (x1, y1, x2, y2, len, angle)
            {
                var angl = Math.atan2(y2 - y1, x2 - x1);
                this.drawLineByStartAngle(x2, y2, len, angl + Math.PI + angle);
                this.drawLineByStartAngle(x2, y2, len, angl + Math.PI - angle);
            }
        Drawer.prototype.drawVectorByCoord =
            function (x1, y1, x2, y2, color)
            {
                this.drawLineByCoord(x1, y1, x2, y2, color);
                this.drawArrow(x1, y1, x2, y2, 20, Math.PI * 30 / 180);
            };
        window.Drawer = Drawer;
    }
)(window, document);
/*var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth - 20;
canvas.height = window.innerHeight -100;
ctx.translate(canvas.width / 2, canvas.height / 2);
drawCoord();

drawEllipse();
drawVectorByCoord(0, 0, 100, 200);
drawVectorByCoord(100, 200, -100, 50);
drawVectorByCoord(0, 0,-100, 50);
function drawEllipse(){
	ctx.beginPath();
	ctx.ellipse(100,100,60,100,0,0,Math.PI);
    ctx.fillStyle = 'red';
    ctx.fill();
}
function drawCoord()
{
  drawVectorByCoord(-(canvas.width / 2 - 10), 0,
                    canvas.width / 2 - 10, 0);
  //
  drawVectorByCoord(0, -(canvas.height / 2 - 10),
                    0, canvas.height / 2 - 10);
}
function vectorChange(event){
  var angle = parseInt(event.target.value);
  console.log(angle);
}
function drawLineByCoord(x1, y1, x2, y2)
{
  ctx.strokeStyle = '#000000';
  ctx.beginPath();
  ctx.moveTo(x1, -y1);
  ctx.lineTo(x2, -y2);
  ctx.stroke();
  ctx.closePath();
}
function drawLineByStartAngle(x1, y1, len, angle)
{
  var _x = len * Math.cos(angle) + x1;
  var _y = len * Math.sin(angle) + y1;
  drawLineByCoord(x1, y1, _x, _y);
}
function drawVectorByCoord(x1, y1, x2, y2){
  drawLineByCoord(x1, y1, x2, y2);
  drawArrow(x2 - x1, y2 - y1, 20, Math.PI * 30 / 180);
  function drawArrow(dx, dy, len, angle)
  {
    var angl = Math.atan2(dy, dx);
    drawLineByStartAngle(x2, y2, len, angl + Math.PI + angle);
    drawLineByStartAngle(x2, y2, len, angl + Math.PI - angle);
  }
  
  //alert(angle + ", " + _x2 + ", " + _y2);
  //drawLineByCoord(x1, y1, x2, y1);
  //drawLineByCoord(x1, y1, x1, y2);
}
function drawVectorByAngle(x1, y1, len, angle)
{
  var _x = len * Math.cos(angle) + x1;
  var _y = len * Math.sin(angle) + y1;
  drawVectorByCoord(x1, y1, _x, _y);
}
*/