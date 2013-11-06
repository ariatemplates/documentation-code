Aria.tplScriptDefinition({
	$classpath : "samples.utils.fileupload.FileUploadScript",
	$dependencies : ['aria.utils.String', 'aria.utils.Xml'],
	$prototype : {
		importAFileClick : function () {
			// Note that this method is not used in IE (the user directly clicks on a transparent file input)
			// because a "security check" (!!) prevents the upload of a form if the click method on the file input
			// has been called

			// Remove focus from the link so that a user pressing Enter on the system dialog will not trigger the Enter
			// key press on the link causing another dialog to open:
			this.$focus("catchFocus");

			// Trigger the button click of the file input to open the system dialog
			var fileInput = aria.utils.Dom.getElementById("simulateAsyncFileUpload");
			fileInput.click();
		},

		fileChosen : function () {
			// close any dialog that may have been previously opened
			this.closeDialog();
			var url = window.location.href.replace('samples', 'code') + "/uploadFile." + this.data.responseExtension;
			// simulate async request to submit form
			aria.core.IO.asyncFormSubmit({
				url : url,
				method : "POST",
				formId : "simulateAsyncFormSubmit",
				callback : {
					fn : this.onSuccess,
					onerror : this.onError,
					scope : this
				}
			});
		},

		onSuccess : function (response) {
			this.$refresh({
				outputSection : "form"
			});
			this.$json.setValue(this.data, "macro", "defaultContent");
			var responseToDisplay;
			var responseXML = response.responseXML;
			var docElement = responseXML.documentElement;
			if (docElement.nodeName == "response") {
				var jsonTranslation = aria.utils.Xml.convertXmlNodeToJson(docElement);
				var jsonText = this.$json.convertToJsonString(jsonTranslation, {
					indent : "  "
				});
				responseToDisplay = 'responseXML contains an XML document, which was translated to the following JSON object with aria.utils.Xml: <br/><br/><textarea rows="10" cols="50">'
						+ aria.utils.String.escapeHTML(jsonText) + '</textarea>';
			} else {
				responseToDisplay = 'responseText contains:<br/><br/><textarea rows="10" cols="50">'
						+ aria.utils.String.escapeHTML(response.responseText) + '</textarea>';
			}
			this.$json.setValue(this.data, "response", responseToDisplay);
			this.$json.setValue(this.data, "dialogOpen", true);
		},

		onError : function (error) {
			this.$refresh({
				outputSection : "form"
			});
			this.$json.setValue(this.data, "macro", "errorContent");
			this.$json.setValue(this.data, "dialogOpen", true);
		},

		closeDialog : function () {
			this.$json.setValue(this.data, "dialogOpen", false);
		}
	}
});
