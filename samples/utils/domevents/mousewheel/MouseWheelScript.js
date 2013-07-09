Aria.tplScriptDefinition({
    $classpath : "samples.utils.domevents.mousewheel.MouseWheelScript",
    $implements : ["aria.core.Browser", "aria.utils.Dom"],
    $prototype : {
        onMouseScroll : function (event) {
            var rolled = 0;
            if ('wheelDelta' in event && !aria.core.Browser.isFirefox) {
                rolled = event.wheelDelta;
            } else { // Firefox
                // The measurement units of the detail and wheelDelta properties are different.
                rolled = -40 * event.detail;
            }

            this.$json.setValue(this.data, "rolled", rolled);
        }
    }
});
