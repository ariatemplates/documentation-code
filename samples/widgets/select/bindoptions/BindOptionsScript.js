Aria.tplScriptDefinition({
 	$classpath : 'samples.widgets.select.bindoptions.BindOptionsScript',
 	$prototype : {
 		 deleteFirstElement : function () {
            var newOptionsList = this.data.OptionsBindingValues.slice(1, this.data.OptionsBindingValues.length);
            this.$json.setValue(this.data, "OptionsBindingValues", newOptionsList);
        }
 	}
});
