Aria.tplScriptDefinition({
	$classpath:  'samples.templates.tplinheritance.step2.ParentTemplateScript',
	$prototype:{
		scriptParentMethod: function () {
			return "This is scriptParentMethod.";
		},

		scriptOverriddenMethod: function () {
			return "This is parent scriptOverriddenMethod.";
		}

	}
});