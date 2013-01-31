/*
 * Copyright Amadeus
 */
/**
 * This is the module controller for the placeholder sample.
 */
Aria.classDefinition({
	$classpath : 'samples.widgets.placeholder.PlaceholderSampleController',
	$extends : 'aria.templates.ModuleCtrl',
	$dependencies : ['samples.widgets.placeholder.ContentProvider', 'aria.embed.PlaceholderManager'],
	$constructor : function () {
		this.$ModuleCtrl.constructor.call(this);
		this._data = {};
	},

	$destructor : function () {
		this.provider.$dispose();
		this.$ModuleCtrl.$destructor.apply(this, arguments);
	},

	$prototype : {

		/**
		 * Initilaize the placeholder controller
		 */
		init : function (initArgs, callback) {

			this.provider = new ContentProvider();
			aria.embed.PlaceholderManager.register(this.provider);

			this.$callback(callback);
		}
	}
});