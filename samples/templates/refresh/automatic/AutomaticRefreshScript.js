Aria.tplScriptDefinition({
	$classpath : 'samples.templates.refresh.automatic.AutomaticRefreshScript',
	$prototype : {

		/**
		 * Increase the score of a team
		 * @param {aria.templates.DomEventWrapper} evt event that triggered the call of this function
		 * @param {Object} team contains the team name and score
		 */
		increaseCount : function (evt, team) {
			this.$json.setValue(team, "score", team.score + 1);
		}
	}
});