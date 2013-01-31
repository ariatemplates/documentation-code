Aria.tplScriptDefinition({
    $classpath : "samples.utils.loadingoverlay.LoadingOverlayTemplateScript",
	$dependencies : ['aria.utils.DomOverlay'],
    $prototype : {
		////#utlOverlayScript
		clickMe : function (arg) {
			var thisDiv = this.$getElementById("overlay1");

			thisDiv.setProcessingIndicator(true);
			setTimeout(function () {
				thisDiv.setProcessingIndicator(false);
			}, 2000);
		},
		clickMe1 : function (arg) {
			var thisDiv = this.$getElementById("section1");

			thisDiv.setProcessingIndicator(true, "Text on overlay");
			setTimeout(function () {
				thisDiv.setProcessingIndicator(false);
			}, 2000);
		},
		clickMe2 : function (arg) {
			aria.utils.DomOverlay.create(Aria.$window.document.body, "Text on the overlay")
			setTimeout(function () {
				aria.utils.DomOverlay.detachFrom(Aria.$window.document.body);
			}, 2000);
		}
		////#utlOverlayScript
    }
});