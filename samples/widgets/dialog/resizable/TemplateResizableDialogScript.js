Aria.tplScriptDefinition({
	$classpath : 'samples.widgets.dialog.resizable.TemplateResizableDialogScript',
	$destructor : function () {
		this.$json.removeListener(this.data, "view:Dialog", this._changeHandler);
		this._changeHandler = null;
	},
	$prototype : {

		$dataReady : function () {

			this.data["view:Dialog"] = {
				visible : false,
				xpos : 0,
				ypos : 0,
				center : true,
				movableProxy : null,
				selectedProxy : "0",
				resizetext : "",
				outputCfg : "",
				opacity : 0.5,
				processing : true
			};

			this._updateOutputCfg();
			
		},

		onResizeStart : function () {
			this.$json.setValue(this.data["view:Dialog"], "resizetext", "resize started");
		},

		onResizeEnd : function () {
			this.$json.setValue(this.data["view:Dialog"], "resizetext", "resize ended");
		},

		toggleDisplay : function () {
			this.$json.setValue(this.data["view:Dialog"], "visible", !this.data["view:Dialog"]["visible"]);
		},

		_updateOutputCfg : function () {
			var movableProxy = this.data["view:Dialog"].movableProxy;

			var output = ["{@aria:Dialog {\n\t...\n\tresizable : true"];
			if (movableProxy) {
				output.push(",\n\tmovableProxy : ");
				output.push(this.$json.convertToJsonString(this.$json.copy(movableProxy), {
					escapeKeyNames : false,
					indent : "\t"
				}).replace(/:/g, " : ").split("\n").join("\n\t"));
			}
			output.push("\n\t...\n} /}");
			this.$json.setValue(this.data["view:Dialog"], "outputCfg", output.join(""));
		}

	}
});
