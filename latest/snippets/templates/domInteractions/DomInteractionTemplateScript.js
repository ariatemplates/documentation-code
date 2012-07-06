/**
 * @class snippets.templates.domInteractions.DomInteractionTemplateScript
 */
Aria.tplScriptDefinition({
	$classpath : 'snippets.templates.domInteractions.DomInteractionTemplateScript',
	$prototype : {

		myPublicFunction : function () {
			////#domInteractions
			var myDiv = this.$getElementById("myDivId");
			myDiv.setClassName("newClass");

			var mySection = this.$getElementById("mySectionDiv");
			mySection.insertAdjacentSection("beforeBegin", newSectionCfg);

			var myTextFieldDom = this.$getElementById("myTextField");
			myTextFieldDom.scrollIntoView(true);
			////#domInteractions
			////#focusExample
			this.$focus("tf");
			////#focusExample

		}

	}
});