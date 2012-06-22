Aria.tplScriptDefinition({
	$classpath : "ariadoc.snippets.templates.domEvents.MainScript",
	$prototype : {

        _onClick : function () {
            alert("_onClick");
        },


        myTplScriptMethod : function () {
            alert("myTplScriptMethod ");
        },

        ////#domelem
        onClickCallback : function (evt) {
            // prevent navigation coming from click events on link elements
            if (evt.target.tagName == "A") {
                evt.preventDefault();
            }
        }
        ////#domelem

	}

});