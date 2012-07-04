Aria.tplScriptDefinition({
	$classpath : 'samples.templates.domInteractions.processingIndicator.SampleScript',
	$prototype : {

		/**
		 * Show/hide the processing indicator
		 * @param {aria.templates.DomEventWrapper} evt
		 * @param {Object} args
		 */
		setProcessing : function (evt, args) {
			if (args.id) {
				var myDomEl = this.$getElementById(args.id);
				myDomEl.setProcessingIndicator(args.value, args.label);
			}
		},

		/**
		 * Toggle the processing indicator on the section whose indicator is bound to the data model
		 */
		toggleProcessing : function () {
			this.$json.setValue(this.data, "loading", !this.data["loading"]);
		},

		/**
		 * Show a processing indicator on the whole page and removes it after 4 seconds
		 */
		wholePage : function () {
			aria.utils.DomOverlay.create(document.body, "Overlay on the whole page. It will disappear in a few seconds...");
			aria.core.Timer.addCallback({
				fn : function () {
					aria.utils.DomOverlay.detachFrom(document.body);
				},
				scope : this,
				delay : 4000
			});
		},

		/**
		 * Refresh the whole page
		 */
		refresh : function () {
			this.$refresh();
		}

	}
});