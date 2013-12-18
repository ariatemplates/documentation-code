Aria.tplScriptDefinition({
 	$classpath : 'samples.widgets.selectbox.bindoptions.BindOptionsScript',
 	$prototype : {
 		 deleteFirstElement : function () {
            var newOptionsList = this.data.bindableOptions.slice(1, this.data.bindableOptions.length);
            this.$json.setValue(this.data, "bindableOptions", newOptionsList);
        }
 	}
});
