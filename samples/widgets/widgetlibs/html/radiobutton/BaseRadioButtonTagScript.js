Aria.tplScriptDefinition({
    $classpath : "samples.widgets.widgetlibs.html.radiobutton.BaseRadioButtonTagScript",
    $prototype : {
        $dataReady : function () {
            this.data = {
                selectedValue : '',
                counter : 0
            };
        },
        reactOnSelect : function () {
            var counter = this.data.counter + 1;
            aria.utils.Json.setValue(this.data, "counter", counter);
        }
    }
});