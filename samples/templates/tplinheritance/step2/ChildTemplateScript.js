Aria.tplScriptDefinition({
	$classpath : 'samples.templates.tplinheritance.step2.ChildTemplateScript',
	$prototype : {
		scriptChildMethod : function () {
			return "This is scriptChildMethod, which calls scriptParentMethod: " + this.scriptParentMethod();
		},

		scriptOverriddenMethod : function () {
			return ("This is child scriptOverriddenMethod, which calls parent scriptOverridenMethod: " + this.$ParentTemplateScript.scriptOverriddenMethod.call(this));
		}

	}
});