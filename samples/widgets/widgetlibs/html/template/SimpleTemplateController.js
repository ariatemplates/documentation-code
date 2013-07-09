/*
 * Copyright Amadeus
 */
/**
 * A module controller to manage simple html template include widget
 * @class samples.widgets.widgetlibs.html.template.SimpleTemplateController
 */
Aria.classDefinition({
	$classpath : 'samples.widgets.widgetlibs.html.template.SimpleTemplateController',
	$extends : 'aria.templates.ModuleCtrl',
	$implements : ['samples.widgets.widgetlibs.html.template.ISimpleTemplateController'],
	$constructor : function () {
		this.$ModuleCtrl.constructor.call(this);
		this._data["inheritedData"] = "Data loaded from module controller successfully!!!";
		this._data['childTemplateData'] = {
			specificData:"Data specific to child template"
		}
	},

	$destructor : function () {
		this.$ModuleCtrl.$destructor.call(this);
	},

	$prototype : {
		$hasFlowCtrl : false,
		$publicInterfaceName : "samples.widgets.widgetlibs.html.template.ISimpleTemplateController"
	}
});
