Aria.classDefinition({
	$classpath : 'samples.utils.validators.event.EventsCtrl',
	$extends : 'aria.templates.ModuleCtrl',
	$implements : ['samples.utils.validators.event.IEventsCtrl'],
	$dependencies : ['aria.utils.validators.Mandatory','aria.utils.validators.AlphaInternational','aria.utils.validators.MultipleValidator','aria.utils.Data'],
	$events : {},
	$constructor : function () {
		this.$ModuleCtrl.constructor.call(this);
		this._data = {
			singleValidatorOnBlur1 : "",
			singleValidatorOnBlur2 : "",
			singleValidatorOnSubmit : "",
			multipleValidatorOnBlurChildValidatorOnBlur : "",
			multipleValidatorOnSubmitChildValidatorOnBlur : "",
			multipleValidatorOnBlurChildValidatorOnSubmit : "",
			errorMessages : []
		};
		this.myDataUtil = aria.utils.Data;
	},
	$prototype : {
		$publicInterfaceName : "samples.utils.validators.event.IEventsCtrl",
		init : function (arg, cb) {
			var validatorPkg = aria.utils.validators;

			var myMultipleValidatorOnBlurChildValidatorOnBlur = new aria.utils.validators.MultipleValidator(null, null, "onblur");
			myMultipleValidatorOnBlurChildValidatorOnBlur.add({
					validator : new validatorPkg.Mandatory("This field is a required field using a mandatory validator."),
					event : "onblur"
				});

			var myMultipleValidatorOnSubmitChildValidatorOnBlur = new aria.utils.validators.MultipleValidator();
			myMultipleValidatorOnSubmitChildValidatorOnBlur.add({
					validator : new validatorPkg.Mandatory("This field is a required field using a mandatory validator."),
					event : "onblur"
				});

			var myMultipleValidatorOnBlurChildValidatorOnSubmit = new aria.utils.validators.MultipleValidator(null, null, "onblur");
			myMultipleValidatorOnBlurChildValidatorOnSubmit.add({
					validator : new validatorPkg.Mandatory("This field is a required field using a mandatory validator."),
					event : "onsubmit"
				});

			var validatorOnBlur1 = new validatorPkg.Mandatory("This field is a required field using a mandatory validator.");
			this.myDataUtil.setValidatorProperties(validatorOnBlur1, null, "onblur");

			var validatorOnBlur2 = new validatorPkg.Mandatory("This field is a required field using a mandatory validator.");
			this.myDataUtil.setValidatorProperties(validatorOnBlur2, null, "onblur");

			var validatorOnSubmit = new validatorPkg.Mandatory("This field is a required field using a mandatory validator.");

			//set the first scenario, both fields will validate onblur and onsubmit
			this.myDataUtil.setValidator(this._data, "singleValidatorOnBlur1", validatorOnBlur1);
			this.myDataUtil.setValidator(this._data, "multipleValidatorOnBlurChildValidatorOnBlur", myMultipleValidatorOnBlurChildValidatorOnBlur);

			//set the next scenario, the single validator field will validate onblur and onsubmit, the multiple validator field will validate onsubmit.
			this.myDataUtil.setValidator(this._data, "singleValidatorOnBlur2", validatorOnBlur2);
			this.myDataUtil.setValidator(this._data, "multipleValidatorOnSubmitChildValidatorOnBlur", myMultipleValidatorOnSubmitChildValidatorOnBlur);

			//set the last scenario, both fields will validate onsubmit.
			this.myDataUtil.setValidator(this._data, "singleValidatorOnSubmit", validatorOnSubmit);
			this.myDataUtil.setValidator(this._data, "multipleValidatorOnBlurChildValidatorOnSubmit", myMultipleValidatorOnBlurChildValidatorOnSubmit);

			this.$callback(cb);
		},
		submit : function () {
			var messages = {};
			this.myDataUtil.validateModel(this._data, messages);
			this.json.setValue(this._data, "errorMessages", messages.listOfMessages);
		}
	}
});