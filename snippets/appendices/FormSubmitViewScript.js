Aria.tplScriptDefinition({
	$classpath: "snippets.appendices.FormSubmitViewScript",
	$prototype : {

        example : function() {
        ////#submitExample1
            aria.core.IO.asyncFormSubmit({
                formId : "simulateAsyncFormSubmit",
                callback : {
                    fn : this.onSuccess,
                    onerror : this.onError,
                    scope : this
                }
            });
        ////#submitExample1
        },

        ////#uploadExample1
        uploadFile1 : function () {
            // ...
            aria.utils.Dom.getElementById("simulateAsyncFileUpload").click();
        },
        ////#uploadExample1

        ////#uploadExample2
        uploadFile2 : function () {
            // ...
            // add a listener on the change event of the file input.
            aria.utils.Event.addListener("simulateAsyncFileUpload", "change", this.fileChosen, this);
        },
        ////#uploadExample2

        ////#submitExample2
        fileChosen : function () {
            // simulate async request to submit form
            aria.core.IO.asyncFormSubmit({
                formId : "simulateAsyncFormSubmit",
                callback : {
                    fn : this.onSuccess,
                    onerror : this.onError,
                    scope : this
                }
            });
        }
        ////#submitExample2
    }

});