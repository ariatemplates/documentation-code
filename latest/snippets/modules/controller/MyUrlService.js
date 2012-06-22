Aria.classDefinition({
	$classpath : "ariadoc.snippets.modules.controller.MyUrlService",
	$implements : ["aria.modules.urlService.IUrlService"],
	$prototype : {
		////#actionUrl
		/**
		 * Generate an action URL.
		 * @param {moduleName} Name of the module that is making the request
		 * @param {actionName} Action to be called on the server
		 * @param {sessionId} Value of the session id
		 * @return String Full URL
		 */
		createActionUrl : function (moduleName, actionName, sessionId) {
			return "/myServer/?do=" + encodeURIComponent(actionName) + "&session=" + sessionId;
		}
		////#actionUrl
		,

		/**
		 * Generate an i18n URL.
		 * @param {moduleName} Name of the module that is making the request
		 * @param {sessionId} Value of the session id
		 * @param {locale} Locale for i18n, if not present defaults to currentLocale
		 * @return String Full URL
		 */
		createI18nUrl : function (moduleName, sessionId, locale) {
			// Build the localization URL
		}
	}
});