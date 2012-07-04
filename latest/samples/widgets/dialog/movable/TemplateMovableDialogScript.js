Aria.tplScriptDefinition({
	$classpath : 'samples.widgets.dialog.movable.TemplateMovableDialogScript',
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
				proxyOptions : [{
							value : "0",
							label : "null"
						}, {
							value : "1",
							label : "Overlay"
						}, {
							value : "2",
							label : "CloneOverlay"
						}],
				selectedProxy : "0",
				draggingText : "",
				outputCfg : "",
				opacity : 0.5,
				processing : true
			};

			this._updateOutputCfg();
			this._changeHandler = {
				fn : this._reactToChange,
				scope : this
			};

			this.$json.addListener(this.data, "view:Dialog", this._changeHandler, false, true);

		},

		onDragStart : function () {
			this.$json.setValue(this.data["view:Dialog"], "draggingText", "You are dragging me");
		},

		onDragEnd : function () {
			this.$json.setValue(this.data["view:Dialog"], "draggingText", "");
		},

		toggleDisplay : function () {
			this.$json.setValue(this.data["view:Dialog"], "visible", !this.data["view:Dialog"]["visible"]);
		},

		_reactToChange : function (change) {
			var dataName = change.dataName;
			if (dataName == "selectedProxy" || dataName == "opacity") {
				this._updateMovableProxy();
				this._updateOutputCfg();
			}
		},

		_updateMovableProxy : function () {
			var dataModel = this.data["view:Dialog"];
			var selected = dataModel.selectedProxy;
			if (selected == "0") {
				this.$json.setValue(dataModel, "movableProxy", null);
				return;
			}
			if (selected == "1") {
				this.$json.setValue(dataModel, "movableProxy", {
					type : "Overlay"
				});
				return;
			}
			if (selected == "2") {
				this.$json.setValue(dataModel, "movableProxy", {
					type : "CloneOverlay",
					cfg : {
						opacity : dataModel.opacity
					}
				});
				return;
			}

		},

		_updateOutputCfg : function () {
			var movableProxy = this.data["view:Dialog"].movableProxy;

			var output = ["{@aria:Dialog {\n\t...\n\tmovable : true"];
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
