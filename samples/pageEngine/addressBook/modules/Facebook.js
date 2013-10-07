/**
 * Module controller for facebook information retrieval
 */
Aria.classDefinition({
	$classpath : 'samples.pageEngine.addressBook.modules.Facebook',
	$extends : 'aria.templates.ModuleCtrl',
	$implements : ['samples.pageEngine.addressBook.modules.IFacebook'],	
	$dependencies : ["aria.utils.ScriptLoader"],
	$constructor : function () {
		this.$ModuleCtrl.constructor.call(this);
		this._profileChangeListener = {
			fn : this._onProfileChange,
			scope : this
		};		
	},
	$destructor : function () {
		this.json.removeListener(this._data, "profile", this._profileChangeListener);
		this._profileChangeListener = null;
		this.$ModuleCtrl.$destructor.call(this);
	},	
	$prototype : {
		$publicInterfaceName : "samples.pageEngine.addressBook.modules.IFacebook",	
		
		init : function (args, cb) {
			this._data.profile = null;
			this.json.addListener(this._data, "profile", this._profileChangeListener);
			
			aria.utils.ScriptLoader.load(["//connect.facebook.net/en_US/all.js"], {
				fn : this._onFBReady,
				scope : this,
				args : cb,
				resIndex : -1
			});
		},
		
		_onFBReady : function (cb) {
			this.$callback(cb);
		},
		
		_onProfileChange : function (change) {
			this.json.setValue(this._data, "info", null);
			if (change.newValue) {
				this.json.setValue(this._data, "loading", true);
				this._fbRequest(this._buildRequest(change.newValue), {
					fn : this._onFBResponse,
					scope : this
				});
			}
		},
		
		
		_fbRequest : function (graphId, cb) {
			var that = this;
			FB.api(graphId, function (response) {
				that.$callback(cb, response);
			});
		},
		
		_onFBResponse : function (res) {
			this.json.setValue(this._data, "loading", false);
			this.json.setValue(this._data, "info", res);
		},

		_buildRequest : function (value) {
			return null;
		}
		
	}
});