Aria.tplScriptDefinition({
	$classpath : "snippets.templates.domEvents.MainScript",
	$prototype : {
        /*
        ////#callbackSignature
        onEventCallback : function ([evt, [args]])
        ////#callbackSignature
        */

        $viewReady: function() {
            ////#ariaUtilsEvent
            aria.utils.Event.addListener(document, "keydown", {
                fn: this.__onBodyKeydown,
                scope: this
            }, true);
            ////#ariaUtilsEvent
        },

        __onBodyKeydown: function() {
            /* this snippet is awful ! really ... */
        },

        _onClick : function () {
            alert("_onClick");
        },


        myTplScriptMethod : function () {
            alert("myTplScriptMethod");
        },

        ////#domelem
        onClickCallback : function (evt) {
            // prevent navigation coming from click events on link elements
            if (evt.target.tagName == "A") {
                evt.preventDefault();
            }
        }
        ////#domelem
        ,
        ////#checkboxKeyDown
        onCheckboxKeydown : function (evt, args) {
            /* ... */
            if (evt.keyCode == evt.KC_ARROW_DOWN) {
                // event triggered by arrow down, move selection down
            } else if (evt.keyCode == evt.KC_ARROW_UP) {
                // event triggered by arrow up, move selection up
            }
            /* ... */
        }
        ////#checkboxKeyDown
        ,
        ////#getTargetIndex
        getTargetIndex: function(domElt) {
            ////#eventDelegation
            var domEl = evt.target; // this is a DomElementWrapper
            if (domEl.tagName.toLowerCase() != "input") {
                return;
            }
            ////#eventDelegation
            ////#getDataIndex
            var index = parseInt(domEl.getData("index"), 10);
            ////#getDataIndex
        }
        ////#getTargetIndex

	}

});