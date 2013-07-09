/**
 * Script associated to keyboard navigation
 * @class samples.utils.keynav.KeyboardNavigationScript
 */
Aria.tplScriptDefinition({
	$classpath : 'samples.utils.keynav.KeyboardNavigationScript',
	$prototype : {

		/**
		 * Push focused line into datamodel
		 * @param {aria.DomEvent} evt
		 */
		select : function (evt, args) {
			aria.utils.Json.setValue(this.data, "selected", args);
		},

		$dataReady : function () {
			this.data.tableSamples = [{
						choose : false,
						options : [false, false, false],
						comments : ["I can add a comment here", "and also here"],
						price : "122.35"
					}, {
						choose : false,
						options : [false, true, false],
						comments : ["I can add a comment here", "and also here"],
						price : "127.35"
					}, {
						choose : false,
						options : [false, false, false],
						comments : ["I can add a comment here", "and also here"],
						price : "122.85"
					}, {
						choose : false,
						options : [false, false, false],
						comments : ["I can add a comment here", "and also here"],
						price : "172.35"
					}, {
						choose : false,
						options : [true, false, false],
						comments : ["I can add a comment here", "and also here"],
						price : "125.35"
					}, {
						choose : false,
						options : [false, false, false],
						comments : ["I can add a comment here", "and also here"],
						price : "121.00"
					}, {
						choose : false,
						options : [false, false, true],
						comments : ["I can add a comment here", "and also here"],
						price : "123.56"
					}, {
						choose : false,
						options : [false, true, false],
						comments : ["I can add a comment here", "and also here", "or even here"],
						price : "127.85"
					}, {
						choose : false,
						options : [false, false, false],
						comments : ["I can add a comment here", "and also here"],
						price : "135.45"
					}];
		}
	}
});