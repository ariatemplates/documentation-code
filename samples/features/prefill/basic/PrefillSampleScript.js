Aria.tplScriptDefinition({
	$classpath : 'samples.features.prefill.basic.PrefillSampleScript',
	$dependencies : ["samples.common.autocomplete.AutoCompleteResourceHandler"],
	$constructor : function () {
		this._validator = new aria.utils.validators.AlphaInternational();
	},
	$destructor : function () {
		this._validator.$dispose();
	},
	$prototype : {

		$dataReady : function () {

			this.data.value1 = "";
			this.data.value19 = null;
			this.data.value20 = null;
			this.data.value21 = null;
			var Data = aria.utils.Data;
			Data.setValidatorProperties(this._validator, null, "onblur");
			Data.setValidator(this.data, "value1", this._validator);
			this.$json.addListener(this.data, "value19", {
						fn : this.setValue20,
						scope : this,
						args : {
							changed : "value19"
						}
					}, false, false);
			this.$json.addListener(this.data, "value21", {
						fn : this.setValue20,
						scope : this,
						args : {
							changed : "value21"
						}
					}, false, false);

			this.data.value3 = new Date();
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
			this.data.items1 = [{
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
						value : 'QF',
						label : 'Quantas',
						disabled : false
					}];

		},

		leavePrefillState : function () {
			if (!this.data.value2) {
				this.$json.setValue(this.data, "value2", this.data.value1);
			}
			if (!this.data.value4) {
				this.$json.setValue(this.data, "value4", this.data.value3);
			}
			if (this.data.value6.length == 0) {
				this.$json.setValue(this.data, "value6", this.data.value5);
			}
			if (!this.data.value8) {
				this.$json.setValue(this.data, "value8", this.data.value7);
			}
			if (!this.data.value10) {
				this.$json.setValue(this.data, "value10", this.data.value9);
			}
			if (!this.data.value12) {
				this.$json.setValue(this.data, "value12", this.data.value11);
			}
			if (!this.data.value14) {
				this.$json.setValue(this.data, "value14", this.data.value13);
			}
			if (!this.data.value16) {
				this.$json.setValue(this.data, "value16", this.data.value15);
			}
			if (!this.data.value18) {
				this.$json.setValue(this.data, "value18", this.data.value17);
			}
			if (!this.data.value21) {
				this.$json.setValue(this.data, "value21", this.data.value20);
			}
		},

		setValue20 : function (changes, args) {
			var changed = args.changed;
			if (changed == "value21") {
				this.$json.setValue(this.data, "value20", null);
			} else {
				this.$json.setValue(this.data, "value20", this.data.value19);
			}

		},

		/**
		 * Returns the resources using a common handler for all samples containing an AutoComplete.
		 * @param threshold Number Number of characters to be inputed before suggestions are retrieved.
		 * @returns
		 */
		getNationsHandler : function (threshold) {
			var autoCompleteResourceHandler = samples.common.autocomplete.AutoCompleteResourceHandler;
			return autoCompleteResourceHandler.getNationsHandler(threshold);
		}

	}
});
