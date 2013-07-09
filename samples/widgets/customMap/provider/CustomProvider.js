/**
 * Load the custom map provider
 */
Aria.classDefinition({
	$classpath : "samples.widgets.customMap.provider.CustomProvider",
	$singleton : true,
	$dependencies : ["aria.map.providers.Microsoft7MapProvider", "samples.widgets.customMap.provider.Map"],
	$constructor : function () {

		this._microsoft7Provider = aria.map.providers.Microsoft7MapProvider;

	},
	$destructor : function () {},
	$prototype : {

		/**
		 * @param {aria.core.CgfBeans.Callback} cb
		 */
		load : function (cb) {
			this._microsoft7Provider.load(cb);
		},

		/**
		 * @return {Boolean}
		 */
		isLoaded : function () {
			this._microsoft7Provider.isLoaded();
		},

		/**
		 * @param {aria.map.CfgBeans.MapCfg} cfg
		 * @return {samples.widgetLibs.embed.customMap.provider.Map} Map instance. null if the dependencies are not
		 * loaded
		 */
		getMap : function (cfg) {
			return new samples.widgets.customMap.provider.Map(cfg.domElement, cfg.initArgs);
		},

		/**
		 * @param {Object} map
		 */
		disposeMap : function (map) {
			map.$dispose();
		}
	}
});