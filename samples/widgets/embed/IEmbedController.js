/**
 * Interface for the embed sample controller.
 * @class samples.widgets.embed.IEmbedController
 */
Aria.interfaceDefinition({
	$classpath : 'samples.widgets.embed.IEmbedController',
	$extends : 'aria.templates.IModuleCtrl',
	$interface : {
		embedController : {
			$type : "Object"
		},
		getEmbedController : {
			$type : "Function"
		}
	}
});
