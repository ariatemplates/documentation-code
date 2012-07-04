Aria.tplScriptDefinition({
	$classpath : 'samples.utils.validators.basic.CustomizedErrorListScript',
	$dependencies : ['aria.utils.Data'],
	$statics : {
		/**
		 * Links each type of message with an icon. The order in the array is important as the first entry for which
		 * messages of that type exist in the messages list is used.
		 */
		ICONS : [{
					type : aria.utils.Data.TYPE_ERROR,
					icon : "std:error"
				}, {
					type : aria.utils.Data.TYPE_WARNING,
					icon : "std:warning"
				}, {
					type : aria.utils.Data.TYPE_INFO,
					icon : "std:info"
				}, {
					type : aria.utils.Data.TYPE_FATAL,
					icon : "std:error"
				}, {
					type : aria.utils.Data.TYPE_NOTYPE,
					icon : "std:info"
				}, {
					type : aria.utils.Data.TYPE_CRITICAL_WARNING,
					icon : "std:warning"
				}, {
					type : aria.utils.Data.TYPE_CONFIRMATION,
					icon : "std:confirm"
				}],

		/**
		 * Icon used if there is no matching icon in ICONS.
		 * @type String
		 */
		DEFAULT_ICON : "std:missing"
	},
	$prototype : {

		onModuleEvent : function (evt) {
			if (evt.name == "messagesChanged") {
				this.$refresh();
			}
		},

		getIcon : function () {
			var messageTypes = this.data.messageTypes;
			var res = this.DEFAULT_ICON;
			var icons = this.ICONS;
			for (var i = 0, l = icons.length; i < l; i++) {
				var curIcon = icons[i];
				if (messageTypes[curIcon.type] > 0) {
					res = curIcon.icon;
					break;
				}
			}
			return res;
		}
	}
});