Aria.tplScriptDefinition({
    $classpath: "samples.features.print.PrintTestPageScript",
    $prototype: {

        toggleDisplay : function (e,args) {
            this.display = (this.display != "visible") ? "visible" : "hidden";
            this.$refresh(args);
        }
    }
});
