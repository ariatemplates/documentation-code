
Aria.tplScriptDefinition({
	$classpath : 'samples.templates.keyboardnavigation.applicationLevelKeyMap.KeyMapScript',
	$prototype : {
		$dataReady : function () {

			this.data = {
				visible : false,
				key : ""
			};
			aria.templates.NavigationManager.removeGlobalKeyMap({
				key : "F4"
			});

			aria.templates.NavigationManager.addGlobalKeyMap({
				key : "F4",
				callback : {
					fn : function () {
						this.data.key = "F4";
						aria.utils.Json.setValue(this.data, "dialogVisible", true);
					},
					scope : this
				}
			});


		}
	}
});