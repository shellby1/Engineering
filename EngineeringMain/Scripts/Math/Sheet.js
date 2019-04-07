(
    function (window, document) {
        function Sheet(container, w, h)
        {
            Drawer.call(this, container);
            
            this.createCanv(w, h);
            this.navigation = null;
            this.vectors = new Array();
            this.createNavigation();
        };
        Sheet.prototype = Object.create(Drawer.prototype);
        Sheet.prototype.createNavigation =
            function ()
            {
                this.navigation = this.container.appendChild(document.createElement('div'));
                this.navigation.setAttribute('class', 'Navigation col-lg-2');
                this.addNewVector(0, 0, 200, 60, 'vector_1');
                this.addNewVector(this.vectors[0]._x2, this.vectors[0]._y2, 300, 120, 'vector_2');
                this.addNewVectorByCoord(0, 0, this.vectors[1]._x2, this.vectors[1]._y2, 'vector_3');
            };
        Sheet.prototype.addNewVector =
            function (X1, Y1, Length, Angle, Name)
            {
                var vector = Vector.VectorByStartAngle(X1, Y1, Length, Angle, Name);
                this.addInput(Name, vector._angleDegree, vector._length);
                this.vectors.push(vector);
            };
        Sheet.prototype.addNewVectorByCoord =
            function (X1, Y1, X2, Y2, Name)
            {
                var vector = Vector.VectorByStartEnd(X1, Y1, X2, Y2, Name);
                this.addInput(Name, vector._angleDegree, vector._length);
                this.vectors.push(vector);
            };
        Sheet.prototype.drawVectors =
            function ()
            {
                this.vectors.forEach(
                    function (item, index) {
                        this.drawVectorByCoord(item._x1, item._y1, item._x2, item._y2);
                    },
                    this
                );
            };
        Sheet.prototype.addInput =
            function (id, angle, length)
            {
                this.navigation.appendChild(this._createinput(id, "angl", angle));
                this.navigation.appendChild(this._createinput(id, "leng", length));
            }
        
        Sheet.prototype._createinput =
            function (id, name, value)
            {
                var options;
                var input = document.createElement("input");
                input.onchange = this.onChange.bind(this);
                input.onchange = this.onChange.bind(this);
                if (name == "leng")
                {
                    options = { "id": id, "type": "number", "name": name, "min": "0", "step": "any", "value": value };
                }
                else
                {
                    options = { "id": id, "type": "number", "name": name, "step": "any", "value": value };
                }
                for (var p in options)
                {
                    input.setAttribute(p, options[p]);
                }
                return input;
            }

        Sheet.prototype.onChange =
            function (event)
            {
                var name = event.target.name;
                console.log("magic!", event.target);
                var id = event.target.id.split("_")[1] - 1;
                console.log('vector id: ' + id);
                var vector = this.vectors[id];
                debugger;
                switch (name)
                {
                    case "angl":
                        vector.changeAngle(event.target.value);
                        break;
                    case "leng":
                        vector.cangeLength(event.target.value);
                        break;
                    default:
                        console.log('value ' + name + ' out of range!')
                }
                this.clearCanvas();
                this.drawCoord();
                this.drawVectors();
            }
        window.Sheet = Sheet;
        function Vector(Name) {
            this._name = Name;
            this._x1 = null;
            this._y1 = null;
            this._x2 = null;
            this._y2 = null;
            this._length = null;
            this._angleDegree = null;
            this._angle = null;
            this._mathTransform = false;
            this._vectors = null;
            this._operation = null;
        };
        Vector.VectorByStartAngle =
            function (X1, Y1, Length, Angle, Name)
            {
                var res = new Vector(Name);
                res._x1 = X1;
                res._y1 = Y1;
                res._length = Length;
                res._angleDegree = Angle;
                res._angle = Angle * Math.PI / 180;
                res._x2 = res._length * Math.cos(res._angle);
                res._y2 = res._length * Math.sin(res._angle);
                return res;
            };
        Vector.VectorByStartEnd =
            function (X1, Y1, X2, Y2, Name)
            {
                var res = new Vector(Name);
                res._x1 = X1;
                res._y1 = Y1;
                res._x2 = X2;
                res._y2 = Y2;
                res._length = Math.sqrt(Math.pow(res._x2 - res._x1, 2) + Math.pow(res._y2 - res._y1, 2));
                res._angle = Math.atan((res._y2 - res._y1) / (res._x2 - res._x1));
                res.convAngle();
                return res;
            };
        Vector.prototype.VectorByVectorsSUmm =
            function (firstVector, secondVector)
            {
                this._vectors = new Array();
                this._vectors.push(firstVector);
                this._vectors.push(secondVector);
                this._operation = "sum";
                this._x1 = firstVector._x1;
                this._y1 = firstVector._y1;
                this._angle = (firstVector._angle - secondVector._angle) / 2;
                debugger;
                var angleF = Math.abs(firstVector._angle - this._angle);
                var angleS = Math.abs(secondVector._angle - this._angle);
                this._length = firstVector._length * Math.cos(Math.abs(firstVector._angle - this._angle))
                    + secondVector._length * Math.cos(Math.abs(secondVector._angle - this._angle));
                this.convAngle();
                
            }
        Vector.prototype.convAngleDegree =
            function ()
            {
                this._angle = this._angleDegree * Math.PI / 180;
            }
        Vector.prototype.convAngle =
            function ()
            {
                this._angleDegree = this._angle * 180 / Math.PI;
            }
        Vector.prototype.changeAngle =
            function (angle)
            {
                this._angleDegree = angle;
                this.convAngleDegree();
                this._x2 = this._x1 + this._length * Math.cos(this._angle);
                this._y2 = this._y1 + this._length * Math.sin(this._angle);
            };
        Vector.prototype.cangeLength =
            function (length)
            {
                this._length = length;
                this._x2 = this._x1 + this._length * Math.cos(this._angle);
                this._y2 = this._y1 + this._length * Math.sin(this._angle);
            }
        window.Vector = Vector;
    }
)(window, document);