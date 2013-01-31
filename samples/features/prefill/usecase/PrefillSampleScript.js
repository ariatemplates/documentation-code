Aria.tplScriptDefinition({
	$classpath : 'samples.features.prefill.usecase.PrefillSampleScript',
	$dependencies : ["samples.common.autocomplete.AutoCompleteResourceHandler"],
	$prototype : {

		$dataReady : function () {
			this.data.count = 3;
			this.data.flights = []
			for (var i = 0; i < this.data.count; i++) {
				this.addSegment();
			}

			this.data.items = [{
						value : 'AF',
						label : 'Air France',
						disabled : false
					}, {
						value : 'AC',
						label : 'Air Canada',
						disabled : false
					}, {
						value : 'NZ',
						label : 'Air New Zealand',
						disabled : false
					}, {
						value : 'DL',
						label : 'Delta Airlines',
						disabled : false
					}, {
						value : 'AY',
						label : 'Finnair',
						disabled : false
					}, {
						value : 'IB',
						label : 'Iberia',
						disabled : true
					}, {
						value : 'LH',
						label : 'Lufthansa',
						disabled : false
					}, {
						value : 'MX',
						label : 'Mexicana',
						disabled : false
					}, {
						value : 'QF',
						label : 'Quantas',
						disabled : false
					}];

		},

		addSegment : function (evt) {
			var flights = this.data.flights;
			var index = this.data.flights.length;
			flights[index] = {
				from : {
					value : null,
					prefill : null
				},
				to : {
					value : null,
					prefill : null
				},
				date : {
					value : null,
					prefill : null
				},
				airlines : {
					value : [],
					prefill : []
				},
				index : index
			}
			var current = flights[index];
			if (index > 0) {
				var previous = flights[index - 1];
				current.from.prefill = previous.to.value || previous.to.prefill;
				current.date.prefill = previous.date.value || previous.date.prefill;
				current.airlines.prefill = (previous.airlines.value.length)
						? previous.airlines.value
						: previous.airlines.prefill;
			}
			this.$json.addListener(current, "to", {
				fn : this.updateNext,
				scope : this,
				args : {
					item : current,
					property : "to"
				}
			}, false, true);
			this.$json.addListener(current, "date", {
				fn : this.updateNext,
				scope : this,
				args : {
					item : current,
					property : "date"
				}
			}, false, true);
			this.$json.addListener(current, "airlines", {
				fn : this.updateNext,
				scope : this,
				args : {
					item : current,
					property : "airlines"
				}
			}, false, true);
			if (evt) {
				this.$refresh();
			}
		},

		updateNext : function (changes, args) {
			var size = this.data.flights.length, newValue;
			var current = args.item, property = args.property;
			var next = (current.index < size - 1) ? this.data.flights[current.index + 1] : null;
			if (next) {
				if (property == "to") {
					newValue = current.to.value || current.to.prefill;
					this.$json.setValue(next.from, "prefill", newValue);
				} else if (property == "date") {
					newValue = current.date.value || current.date.prefill;
					this.$json.setValue(next.date, "prefill", newValue);
				} else {
					newValue = (current.airlines.value.length) ? current.airlines.value : current.airlines.prefill;
					this.$json.setValue(next.airlines, "prefill", newValue);
				}
			}
		},

		removeSegment : function (evt, index) {
			var flights = this.data.flights;
			var current = flights[index];
			this.$json.removeListener(current, "to", {
				fn : this.updateNext,
				scope : this,
				args : {
					item : current,
					property : "to"
				}
			}, true);
			this.$json.removeListener(current, "date", {
				fn : this.updateNext,
				scope : this,
				args : {
					item : current,
					property : "date"
				}
			}, true);
			this.$json.removeListener(current, "airlines", {
				fn : this.updateNext,
				scope : this,
				args : {
					item : current,
					property : "airlines"
				}
			}, true);
			flights.splice(index,1);
			for (var i = index, size = flights.length; size > i; i++) {
				flights[i].index --;
			}

			if (index > 0 && index < flights.length) {
				var previous = flights[index - 1];
				this.updateNext(null, {
					item : previous,
					property : "to"
				});
				this.updateNext(null, {
					item : previous,
					property : "date"
				});
				this.updateNext(null, {
					item : previous,
					property : "airlines"
				});
			}
			this.$refresh();

		},

		/**
		 * Returns the resources using a common handler for all samples containing an AutoComplete.
		 * @param threshold Number Number of characters to be inputed before suggestions are retrieved.
		 * @returns
		 */
		getCitiesHandler : function (threshold) {
			var autoCompleteResourceHandler = samples.common.autocomplete.AutoCompleteResourceHandler;
			return autoCompleteResourceHandler.getCitiesHandler(threshold);
		}
	}
});
