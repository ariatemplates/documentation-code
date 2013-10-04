Aria.tplScriptDefinition({
    $classpath : "samples.pageEngine.addressBook.templates.SearchBoxScript",
    $constructor : function () {
        this.textValue = "";
    },
    $prototype : {

        navigateEnter : function () {
            if ((this.data.query !== undefined) && (this.data.query !== "")) { // ENTER
                var button = this.$getElementById("searchButton");
                var text = button.getChild(0);
                text.classList.setClassName("hide");
                button.classList.setClassName(button.classList.getClassName() + " loader");
                aria.core.Timer.addCallback({
                    fn : this._wait,
                    scope : this,
                    delay : 1500
                });
            } 
        },

        searchClicked : function () {
            if ((this.data.query !== undefined) && (this.data.query !== "")) { // CLICK
                var button = this.$getElementById("searchButton");
                var text = button.getChild(0);
                text.classList.setClassName("hide");
                button.classList.setClassName(button.classList.getClassName() + " loader");
                aria.core.Timer.addCallback({
                    fn : this._wait,
                    scope : this,
                    delay : 3500
                });
            }
        },

       textTyped : function (value) {
            if (value != this.textValue) {
                this.textValue = value;
                this.$json.setValue(this.data, "query", this.textValue);    
            }
        },

        _wait : function () {
            this.moduleCtrl.searchContact();
        },

        hasFocus : function (evt, arg) {
            var boxClassList = this.$getElementById("contentBox").classList;
            if (arg === true && !boxClassList.contains("opaque")) {
                boxClassList.add("opaque");
                return true;
            }
            if (arg === false && boxClassList.contains("opaque")) {
                boxClassList.remove("opaque");
                return true;
            }
        }
    }
});