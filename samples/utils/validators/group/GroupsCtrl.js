Aria.classDefinition({
	$classpath : 'samples.utils.validators.group.GroupsCtrl',
	$extends : 'aria.templates.ModuleCtrl',
	$implements : ['samples.utils.validators.group.IGroupsCtrl'],
	$dependencies : ['aria.utils.validators.Mandatory', 'aria.utils.Data'],
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
		$publicInterfaceName : "samples.utils.validators.group.IGroupsCtrl",
		init : function (arg, cb) {
			var validatorPkg = aria.utils.validators;
			// add single validator to data model
			this.myDataUtil.setValidator(this._data, "firstName", new validatorPkg.Mandatory("The first name is mandatory."), ["group1"]);
			this.myDataUtil.setValidator(this._data, "lastName", new validatorPkg.Mandatory("The last name is mandatory."), ["group1"]);
			this.myDataUtil.setValidator(this._data, "phoneNumber", new validatorPkg.Mandatory("The phone number is mandatory."), ["group2"]);
			this.myDataUtil.setValidator(this._data, "email", new validatorPkg.Mandatory("The email address is mandatory."), ["group2"]);
			this.$callback(cb);
		},
		submit : function () {
			var groups = arguments[1];
			var messages = {};
			this.myDataUtil.validateModel(this._data, messages, groups);
			this.json.setValue(this._data, "errorMessages", messages.listOfMessages);
			if (!(messages.nbrOfE > 0)) {
				this.submitJsonRequest("submit", this.json.copy(this._data), "_onServerResponse");
			}
		},
		_onServerResponse : function (res, cb) {
			var data = res.response;
			var messages = this.myDataUtil.processMessages(data.errors, this._data);
			if (!(messages.nbrOfE > 0)) {
				this.myDataUtil.processMessages([{
							type : "O",
							localizedMessage : "Your details have been successfully submitted to the server."
						}], this._data, messages);
			}
			this.json.setValue(this._data, "errorMessages", messages.listOfMessages);
		},

		submitJsonRequest : function (action, data, cb) {
			// Fake submitJsonRequest replacing the normal one to do something which simulates the server.
			// In this example, we suppose the server checks that the e-mail address does not end with
			// "@badaddress.com" and the phone number does not contain "badphone":
			var responseData = {
				errors : []
			};
			// Do further validation on the server:
			if (/@badaddress.com$/.test(data.email)) {
				responseData.errors.push({
					type : "E",
					localizedMessage : "Invalid domain in the e-mail address (server validation)",
					fieldRef : "email"
				});
			}
			if (/badphone/.test(data.phoneNumber)) {
				responseData.errors.push({
					type : "E",
					localizedMessage : "Invalid phone number (server validation)",
					fieldRef : "phoneNumber"
				});
			}
			// Send the answer from the server:
			this.$callback(cb, {
				response : responseData,
				// data : this.json.convertToJsonString(responseData),
				error : null
			});
		}
	}
});