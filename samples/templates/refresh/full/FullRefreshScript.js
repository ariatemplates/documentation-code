Aria.tplScriptDefinition({
	$classpath : 'samples.templates.refresh.full.FullRefreshScript',
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