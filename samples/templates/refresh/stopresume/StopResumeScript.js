Aria.tplScriptDefinition({
	$classpath : 'samples.templates.refresh.stopresume.StopResumeScript',
	$prototype : {

		/**
		 * Increase the score of a team
		 * @param {aria.templates.DomEventWrapper} evt event that triggered the call of this function
		 * @param {Object} team contains the team name and score
		 */
		increaseCount : function (evt, team) {
			this.$json.setValue(team, "score", team.score + 1);
		},

		/**
		 * returns the right bindings
		 * @param {Object} item
		 * @return {aria.templates.CfgBeans.SectionCfg.$properties.bindRefreshTo} bindings
		 */
		getSectionBindings : function (item) {
			return [{
				        to : "score",
				        inside : item.item
			        }];
		},

		/**
		 * Assigns the even/oddRow class to even/odd rows
		 * @param {Object} item
		 * @return {aria.templates.CfgBeans.SectionCfg.$properties.attributes} object containing the classList
		 */
		myChildSectionAttributes : function (item) {
			return {
				classList : [(item.ct % 2 == 0) ? "evenRow" : "oddRow"]
			};
		},

		/**
		 * Updates the number of times the section has been refreshed
		 * @param {Object} item
		 * @return {Number} refresh count
		 */
		updateRefreshCountOf : function (item) {
			if (!item.item.refCount) {
				item.item.refCount = 1;
			} else {
				item.item.refCount++;
			}
			return item.item.refCount;
		},

		/**
		 * Add a new element in the array right after the current item
		 * @param {Event} evt
		 * @param {Object}item passed by the child section macro
		 */
		addNext : function (evt, item) {
			this.$json.add(this.data.teams, {
				name : "New team",
				score : 0
			}, item.index + 1);
		},

		/**
		 * Remove the current element from the array
		 * @param {Event} evt
		 * @param {Object}item passed by the child section macro
		 */
		removeThis : function (evt, item) {
			this.$json.removeAt(this.data.teams, item.index);
		},

		/**
		 * Stop refreshes
		 */
		stopRefreshes : function () {
			aria.templates.RefreshManager.stop()
		},

		/**
		 * Resume refreshes
		 */
		resumeRefreshes : function () {
			aria.templates.RefreshManager.resume()
		}

	}
});