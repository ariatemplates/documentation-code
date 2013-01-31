Aria.classDefinition({
	$classpath : "snippets.features.SomeClass",

	$prototype : {
		dummy : function () {

            ////#widgetsettings
            aria.core.AppEnvironment.setEnvironment({
                widgetSettings:{
                  autoselect: true
                }
            });
            ////#widgetsettings

            ////#json
            this.$json.setValue(this.data, "value2", this.data.value1);
            ////#json

        }
	}
});
