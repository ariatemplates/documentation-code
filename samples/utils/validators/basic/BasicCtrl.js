Aria.classDefinition({
	$classpath : 'samples.utils.validators.basic.BasicCtrl',
	$extends : 'aria.templates.ModuleCtrl',
	$implements : ['samples.utils.validators.basic.IBasicCtrl'],
	$dependencies : [
		'aria.utils.validators.Email',
		'aria.utils.validators.Phone',
		'aria.utils.validators.Alpha',
		'aria.utils.validators.AlphaInternational',
		'aria.utils.validators.AlphaNum',
		'aria.utils.Data',
		'aria.utils.validators.MultipleValidator',
		'aria.utils.validators.Mandatory'
	],
	$events : {},
	$constructor : function () {
		this.$ModuleCtrl.constructor.call(this);
		this._data = {
			firstName : "",
			lastName : "",
			phoneNumber : "",
			email : "",
			errorMessages : []
		};
		this.myDataUtil = aria.utils.Data;
	},
	$prototype : {
		$publicInterfaceName : "samples.utils.validators.basic.IBasicCtrl",
		init : function (arg, cb) {
			var validatorPkg = aria.utils.validators;

			var firstNameValidator = new validatorPkg.Mandatory("The first name is a required field using a mandatory validator.");
			var lastNameValidator = new validatorPkg.Mandatory("The last name is a required field using a mandatory validator.");
			var emailValidator = new validatorPkg.Mandatory("The email is a required field using a mandatory validator.");
			var phoneNumberValidator = new validatorPkg.Mandatory("The phone number is a required field using a mandatory validator.");

			// add single validator to data model
			this.myDataUtil.setValidator(this._data, "firstName", firstNameValidator);
			this.myDataUtil.setValidator(this._data, "lastName", lastNameValidator);
			this.myDataUtil.setValidator(this._data, "email", emailValidator);
			this.myDataUtil.setValidator(this._data, "phoneNumber", phoneNumberValidator);
			this.$callback(cb);
		},
		submit : function () {
			var messages = {};
			this.myDataUtil.validateModel(this._data, messages);
			this.json.setValue(this._data, "errorMessages", messages.listOfMessages);
		}
	}
});