/**
 * TODOC
 * @class samples.utils.scrollcontrol.ScrollControlTwoScript
 */
Aria.tplScriptDefinition({
	$classpath : 'samples.utils.scrollcontrol.ScrollControlTwoScript',
	$prototype : {
		initData : function () {
			this.data = {
				repeaterSampleData : {

					myArray : [{
						        city : "Paris"
					        }, {
						        city : "London"
					        }, {
						        city : "Tokyo"
					        }, {
						        city : "Rome"
					        }]
				}
			};
			this.myData = this.data.repeaterSampleData;
		},

		/**
		 * Run when this.data is ready.
		 */
		$dataReady : function () {
			if (!this.data || !this.data.repeaterSampleData) {
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
		 * Add a new element in the array right after the current item
		 * @param {Event} evt
		 * @param {Array} contains only the Item object passed by the child section macro
		 */
		addNext : function (evt, param) {
			var item = param[0];
			this.$json.add(this.myData.myArray, {
				city : "newCity"
			}, item.index + 1);
			var divToScroll = this.$getElementById("myTable");
			var scrollPositions = divToScroll.getScroll();
			scrollPositions.scrollTop = scrollPositions.scrollTop + 40;
			divToScroll.setScroll(scrollPositions);
		},

		/**
		 * Remove the current element from the array
		 * @param {Event} evt
		 * @param {Array} contains only the Item object passed by the child section macro
		 */
		removeThis : function (evt, param) {
			var item = param[0];
			this.$json.removeAt(this.myData.myArray, item.index);
		}
	}
});