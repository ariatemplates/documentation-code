Aria.classDefinition({
    $classpath: "ariadoc.snippets.core.classes.Vehicle",

    $statics: {
        DEFAULT_COLOR: "black"
    },

    $constructor: function (color) {
    	this.__color = color || this.DEFAULT_COLOR;
    },

    $destructor: function() {
        // in case we need to dispose of something
    },

    $prototype: {
        getColor: function() {
            return this.__color;
        },

        setColor: function(c) {
            this.__color = c;
        }
    }
});
