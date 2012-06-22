Aria.tplScriptDefinition({
    $classpath : "ariadoc.snippets.templates.cssTemplates.AnotherCSSTemplateScript",
    $prototype : {

		randomColor : function () {
            var randomColor = Math.floor(Math.random() * 16777216);
            return "color: #"+randomColor.toString(16)+";";
		}

	}
});