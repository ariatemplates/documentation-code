Aria.tplScriptDefinition({
    $classpath : 'samples.templates.refresh.animate.AnimatedRefreshScript',
    $prototype : {
        $dataReady : function () {

            this.data = {
                test : 0,
                test2 : 0,
                animation : {
                    animateOut : "slide left",
                    animateIn : "slide left"
                }
            };

        },

        $afterRefresh : function () {
            var log = Aria.$window.document.getElementById("log");
            log.innerHTML += "<p>" + "$afterRefresh" + "</p>";
        },

        $onRefreshAnimationEnd : function () {
            var log = Aria.$window.document.getElementById("log");
            log.innerHTML += "<p>" + "$onRefreshAnimationEnd" + "</p>";
        },

        changeAnimating : function (evt) {
            aria.utils.Json.setValue(this.data, "test", this.data.test + 1);
        },

        changeNotAnimating : function (evt) {
            aria.utils.Json.setValue(this.data, "test2", this.data.test2 + 1);
        },

        manualRefresh : function (evt) {
            this.data.test = -1;
            this.$refresh({
                section : "autoSection2",
                animate : false
            });
        },

        changeAnimation : function (evt) {
            var newAnim = (this.data.animation.animateIn == "slide left") ? "fade" : "slide left";
            aria.utils.Json.setValue(this.data.animation, "animateIn", newAnim);
        }
    }
});
