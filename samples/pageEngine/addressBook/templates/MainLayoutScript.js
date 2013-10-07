Aria.tplScriptDefinition({
    $classpath : "samples.pageEngine.addressBook.templates.MainLayoutScript",
    $prototype : {

        $dataReady : function () {
            if (!this.data["view:data"]) {
                this.data["view:data"] = {
                    menuOpen : false
                };
            }
        },

        $displayReady : function () {
            var splashScreenDiv = aria.utils.Dom.getElementById("splashScreenContainer");
            if (splashScreenDiv) {
                window.setTimeout(function () {
                    splashScreenDiv.style.opacity = 0;
                }, 0);
                if (window.console) {}
                window.setTimeout(function () {

                    document.body.style.overflow = "visible";
                    if (splashScreenDiv.parentNode) {
                        document.body.removeChild(splashScreenDiv);
                    }
                    splashScreenDiv = null;
                }, 400);
            }

        },

        toggleMenu : function () {
            this.$json.setValue(this.data["view:data"], "menuOpen", !this.data["view:data"].menuOpen);
        }

    }
});