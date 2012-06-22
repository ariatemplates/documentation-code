Aria.tplScriptDefinition({
	$classpath : 'ariadoc.samples.templates.refresh.full.FullRefreshScript',
	$prototype : {

		/**
		 * Increase the score
		 */
		increaseCount : function () {
			this.data.team.score++;
		},

		/**
		 * Refresh the whole template
		 */
		fullTemplateRefresh : function () {
			this.$refresh();
		}
	}
});