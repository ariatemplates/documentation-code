Aria.classDefinition({
	$classpath: 'snippets.core.helpers.JsonManipulation',
	$dependencies: [
		'aria.utils.Json',
		'aria.utils.Object'
	],
	$constructor: function() {
		////#serialization
		this.data = {
			employees: {
				'stinson' :		{ firstname: "Barney", lastname: "Stinson" },
				'mosby':		{ firstname: "Ted", lastname: "Mosby" },
				'scherbatsky':	{ firstname: "Robin", lastname: "Scherbatsky" },
				'eriksen':		{ firstname: "Marshal", lastname: "Eriksen" },
				'kumar':		{ firstname: "Ranjit", lastname: "Kumar" }
            },

			contractors: {
				'kumar': { company: 'TaxiDriver' }
			}
		}

		////#serialization

		////#listeners
		// Listeners initialisation inside the $contructor
		this.__addDefaultListeners();

		// ....

		////#listeners
	},
	$prototype: {

		////#serialization
		getEmployeesListAsString: function() {
			return this.__serialize(this.data.employees);
		},

		__serialize: function(myObject) {
			return aria.utils.Json.convertToJsonString(myObject);
		},
		////#serialization

		////#standard
		getEmployee: function(employeeId) {
			return aria.utils.Json.getValue(this.data.employees, employeeId);
		},

		updateEmployee: function(employeeId, firstname, lastname) {
			aria.utils.Json.setValue(this.data.employees, employeeId, {
				firstname: firstname,
				lastname: lastname
			});
		},

		injectExample: function() {
			this.createEmployee("Aldrin", "Lily");
		},

		createEmployee: function(lastname, firstname) {
			var employee_id = lastname.toLowerCase(),
				new_employee = {
					'lastname': lastname,
					'firstname': firstname
				},
				employees = {};
			employees[employee_id] = new_employee;

			aria.utils.Json.inject(employees, this.data.employees, true);
		},
		////#standard


		////#listeners
		// Then inside your $prototype

		__addDefaultListeners: function() {
			aria.utils.Json.addListener(this.data, 'employees', {
				fn: "__employeesListChanged",
				scope: this
			});
		},

		/* As soon as the createEmployee() method is called, __employeesListChanged will be
			automatically executed */

		__employeesListChanged: function(change_set) {
			this.$logInfo("The '%1' node has been updated. There are now %2 employees.",
				[ change_set.dataName, (aria.utils.Object.keys(change_set.newValue)).length]);
		}
		////#listeners

	}
});