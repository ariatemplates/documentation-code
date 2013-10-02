Aria.tplScriptDefinition({
	$classpath:  'samples.utils.css.animations.callbacks.AnimationsScript',
	$prototype:{
		onClick: function() {
			aria.utils.css.Effects.animate("exampleDiv", {
                width : "100",
                left : "90"
            }, {
                queue : true,
                onStartAnimation : {
                    fn: function () {
                        this.$json.setValue(this.data.cb, "startAnim1", "start 1st animation");
                    },
                    scope: this
                },
                onEndAnimation : {
                    fn: function () {
                        this.$json.setValue(this.data.cb, "endAnim1", "end 1st animation");
                    },
                    scope: this
                },
                onStartQueue : {
                    fn: function () {
                        this.$json.setValue(this.data.cb, "startQueue", "start queue");
                    },
                    scope: this
                },
                onEndQueue : {
                    fn: function () {
                        this.$json.setValue(this.data.cb, "endQueue", "end queue");
                    },
                    scope: this
                }
            });

            aria.utils.css.Effects.animate("exampleDiv", {
                height : "0",
                opacity : "0.6"
            }, {
                queue : true,
                onStartAnimation : {
                    fn: function () {
                        this.$json.setValue(this.data.cb, "startAnim2", "start 2st animation");
                    },
                    scope: this
                }
            });
		}			
	}
});