(
    function (window, document)
    {

        function Drawer(container)
        {
            this.container = container;
            this.ctx = null;
            this.color = null;
        };
        Drawer.prototype.createCanv =
            function (width, height)
            {
                var canvas = document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;
                this.ctx = canvas.getContext('2d');
                if (this.color != null) {
                    canvas.style.backgroundColor = this.color;
                } else {
                    canvas.className += 'col-lg-10';
                };
                this.container.appendChild(canvas);
            };
        Drawer.prototype.clearCanvas =
            function ()
            {
                var dx = this.ctx.mozCurrentTransformInverse[4];
                var dy = this.ctx.mozCurrentTransformInverse[5];
                this.ctx.translate(dx, dy);
                var x = this.ctx.canvas.width;
                var y = this.ctx.canvas.height;
                this.ctx.clearRect(0, 0, x, y);
            };
        Drawer.prototype.translateSelf =
            function (dx, dy)
            {
                dx = dx || this.ctx.canvas.width / 2;
                dy = dy || this.ctx.canvas.height / 2;
                this.ctx.translate(dx, dy);
            };
        Drawer.prototype.drawCoordSys =
            function ( cx, cy)
            {
                var cx = cx || (this.ctx.canvas.width / 2);
                var cy = cy || (this.ctx.canvas.height / 2);
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
                this.drawArrow(x1, y1, x2, y2, 20, Math.PI * 20 / 180);
            };
        Drawer.prototype.drawVectorByStartEngle =
            function (x1, y1, len, angle)
            {
                var _x = len * Math.cos(angle) + x1;
                var _y = len * Math.sin(angle) + y1;
                this.drawVectorByCoord(x1, y1, _x, _y);
            };
        Drawer.prototype.toRadian =
            function (degree)
            {
                var res = degree * Math.PI / 180;
                return res;
            };
        window.Drawer = Drawer;
        
    }
)(window, document);