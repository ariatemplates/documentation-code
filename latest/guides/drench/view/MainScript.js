Aria.tplScriptDefinition({
    $classpath: "ariadoc.guides.drench.view.MainScript",

    $statics : {
        BOARDSIZE: 14,
        MAXMOVES: 30,
        COLORS: [
            "transparent",
            "#66CC00", //green
            "#9999FF", // blue
            "#743EF4", // purple
            "#CCFFCC", // cyan
            "#FF0000", // red
            "#FFCC00"  // yellow
        ]
    },

    $constructor : function() {
        this.TOTAL=this.BOARDSIZE*this.BOARDSIZE;
    },

    $prototype: {

        $dataReady : function() {
            this.data = {};
            this.initGameData(1, 0);
        },

        initGameData : function(lvl, time) {
            var b = this.data.board = [];
            for (var i=0; i<this.BOARDSIZE; i++) {
                b[i] = [];
                for (var j=0; j<this.BOARDSIZE; j++)
                    b[i][j]=parseInt(Math.random()*(this.COLORS.length-1))+1;
            }
            this.data.gameStarted = false;
            this.$json.setValue(this.data, "level", lvl);
            this.$json.setValue(this.data, "moves", this.MAXMOVES-lvl+1);
            if (time!=undefined) this.$json.setValue(this.data, "timer", time);
            this.interval = setInterval(function(t){t.$json.setValue(t.data,"timer",t.data.timer+1)}, 1000, this);
        },

        startGame : function(e) {
            if (this.data.gameStarted) return;
            if (e.target.getData("x") && e.target.getData("y")) {
                this.data.x = e.target.getData("x")*1;
                this.data.y = e.target.getData("y")*1;
                this.data.gameStarted = true;
                this.spread(this.data.x, this.data.y, this.data.board[this.data.y][this.data.x]);
            }
        },

        newGame : function(e, levelUp) {
            if (levelUp) this.initGameData(this.data.level+1);
            else this.initGameData(1, 0);
        },

        spread : function(x, y, c) {
            this.data.cleaned = 0;
            this.convert(0, -1, c);
            this.spread2(this.data.x, this.data.y, c);
            this.convert(-2, -1, c);
            this.$json.setValue(this.data, "moves", this.data.moves-1);
        },

        spread2 : function(x, y, c) {
            var b = this.data.board;
            if (b[y][x]==c)  { b[y][x]=-2; this.data.cleaned++; }
            else if (b[y][x]==-1) { b[y][x]=0;  this.data.cleaned++; }
            else return;
            //top
            if (y-1>=0) this.spread2(x, y-1, c);
            //right
            if (x+1<this.BOARDSIZE) this.spread2(x+1, y, c);
            //bottom
            if (y+1<this.BOARDSIZE) this.spread2(x, y+1, c);
            //left
            if (x-1>=0) this.spread2(x-1, y, c);
        },

        clean : function(e, c) {
            this.spread(this.data.x, this.data.y, c);
        },

        convert : function(from, to, c) {
            var b = this.data.board;
            for (var i=0; i<this.BOARDSIZE; i++)
                for (var j=0; j<this.BOARDSIZE; j++)
                    if (b[i][j]==from) b[i][j]=to;
        },

        fail : function() {
            clearInterval(this.interval);
            return "You failed miserably at level "+this.data.level+" after "+this.data.timer+"s of struggle.";
        },

        win : function() {
            clearInterval(this.interval);
            return "Wooohooo! You cleaned the board in "+(this.MAXMOVES-this.data.level+1-this.data.moves)+" moves! :)";
        }

    }
});
