Aria.tplScriptDefinition({
    $classpath : "samples.widgets.widgetlibs.html.select.BaseSelectTagScript",
    $prototype : {
        $dataReady : function () {
            this.data = {
                selectedCurrency : 'EURO',
                selectedIndex:0
            };
        }
    }
});