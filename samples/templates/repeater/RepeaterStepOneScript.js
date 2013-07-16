/**
 * TODOC
 * @class tutorials.repeater.step1.RepeaterStepOneScript
 */
Aria.tplScriptDefinition({
	$classpath : 'samples.templates.repeater.RepeaterStepOneScript',
	$prototype : {
		/**
		 * Initialize data associated to this sample.
		 */
		initData : function () {
			this.data.repeaterSampleData = {
				myArray : [{
							city : "Paris"
						}, {
							city : "London"
						}, {
							city : "Tokyo"
						}]
			}
			this.myData = this.data.repeaterSampleData;
		},

		/**
		 * Run when this.data is ready.
		 */
		$dataReady : function () {
			if (!this.data.repeaterSampleData) {
				this.initData();
			} else {
				this.myData = this.data.repeaterSampleData;
			}
		},

		/**
		 * Called when clicking on the "Reset sample" button.
		 */
		resetSample : function () {
			this.initData();
			this.$refresh();
		},

		/**
		 * Assigns the even/oddRow class to even/odd rows
		 * @param {Object} item
		 * @return {String} class name
		 */
		myCSSFunction : function (item) {
			return (item.ct % 2 == 0) ? "evenRow" : "oddRow";
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
		 * @param {Array} contains only the Item object passed by the child section macro
		 */
		addNext : function (evt, param) {
			var item = param[0];
			this.$json.add(this.myData.myArray, {
				city : "newCity"
			}, item.index + 1);
		},

		/**
		 * Remove the current element from the array
		 * @param {Event} evt
		 * @param {Array} contains only the Item object passed by the child section macro
		 */
		removeThis : function (evt, param) {
			var item = param[0];
			this.$json.removeAt(this.myData.myArray, item.index);
		},

		/**
		 * Refresh the current section
		 * @param {Event} evt
		 * @param {Array} contains only the Item object passed by the child section macro
		 */
		refreshThis : function (evt, param) {
			var item = param[0];
			this.$refresh({
				outputSection : item.sectionId
			});
		}
	}
});