Aria.tplScriptDefinition({
	$classpath : "samples.utils.domevents.mouseeventsimple.DomEventsTemplateScript",
	$prototype : {
		$dataReady : function () {
			this.data.events = [];
		},

		simpleClick : function () {
			alert("You clicked on the simple example.");
		},
		onDivClickBubbling : function (evt) {
			var info = evt.target.getData("info", true);
			if (info) {
				alert("You clicked on " + info);
			}
		},
		classNameChangeOnMouseOver : function (evt) {
			evt.target.classList.setClassName("domEventsSampleSelected");
		},

		classNameChangeOnMouseOut : function (evt) {
			evt.target.classList.setClassName("");
		},

		logEvent : function (evt) {
			var type = evt.type, target = evt.target.getData("name");

			this.data.events.push(type + " on " + target);

			this.$refresh({outputSection : "log"});
		}

	}
});