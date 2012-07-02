/**
 * Handles a group of animals and people
 * @class ariadoc.snippets.core.beans.GroupManager
 * @singleton
 */
Aria.classDefinition({
	$classpath : 'snippets.core.beans.GroupManager',
	$singleton : true,
	$dependencies : ["snippets.core.beans.ContactBeans"],
	$constructor : function () {

		/**
		 * Group managed by the class
		 * @type {ariadoc.snippets.core.beans.ContactBeans.Group}
		 * @private
		 */
		this.__group = {};
	},
	$destructor : function () {
		this.__group = null;
	},
	$statics : {

		/**
		 * Error raised when trying to add an invalid contact
		 * @type {String}
		 */
		INVALID_CONTACT : 'Contact with id %1 could not be added to the group'
	},
	$prototype : {

		/**
		 * Adds a person to the group
		 * @param {String} id unique identifier inside the group
		 * @param {ariadoc.snippets.core.beans.ContactBeans.Person} person
		 */
		addPersonToGroup : function (id, person) {
			try {
				aria.core.JsonValidator.normalize({
					json : person,
					beanName : "snippets.core.beans.ContactBeans.Person"
				}, true);
			} catch (ex) {
				// The person object does not match the bean
				this.$logError(this.INVALID_CONTACT, id);
				return null;
			}
			this.__group[id] = person;
		},

		/**
		 * Adds an animal to the group
		 * @param {String} id unique identifier inside the group
		 * @param {ariadoc.snippets.core.beans.ContactBeans.Animal} animal
		 */
		addAnimalToGroup : function (id, animal) {
			try {
				aria.core.JsonValidator.normalize({
					json : animal,
					beanName : "snippets.core.beans.ContactBeans.Animal"
				}, true);
			} catch (ex) {
				// The person object does not match the bean
				this.$logError(this.INVALID_CONTACT, id);
				return null;
			}
			this.__group[id] = animal;
		}
	}
});