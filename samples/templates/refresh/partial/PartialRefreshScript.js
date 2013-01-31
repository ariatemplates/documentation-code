Aria.tplScriptDefinition({
	$classpath : 'samples.templates.refresh.partial.PartialRefreshScript',
	$prototype : {

		/**
		 * Increase the score of a team
		 * @param {aria.templates.DomEventWrapper} evt event that triggered the call of this function
		 * @param {Object} team contains the team name and score
		 */
		increaseCount : function (evt, team) {
			team.score++;
		},

		/**
		 * Refresh only a section
		 * @param {aria.templates.DomEventWrapper} evt event that triggered the call of this function
		 * @param {Object} contains the sectionNumber
		 */
		partialTemplateRefresh : function (evt, args) {
			var sectionId = this.mySectionPrefix + args.sectionNumber;
			this.$refresh({
				outputSection : sectionId
			});
		}

	}
});