Aria.tplScriptDefinition({
    $classpath : "samples.utils.domevents.mousewheel.MouseWheelScript",
    $implements : ["aria.core.Browser", "aria.utils.Dom"],
    $prototype : {
        sumRolledVal : 0,
        onMouseScroll : function (evt) {
            this.sumRolledVal += (evt.detail) ? evt.detail * (-40) : evt.wheelDelta;
            this.sumRolledVal = this.sumRolledVal > 0 ? 0 : this.sumRolledVal;
            this.$json.setValue(this.data, "rolled", this.sumRolledVal);
        }
    }
});
