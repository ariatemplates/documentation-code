{Template {
  $classpath : 'samples.widgets.touch.popup.PopupTpl',
  $wlibs : {
    'touch' : 'aria.touch.widgets.TouchWidgetLib'
  },
  $css: ["samples.widgets.touch.popup.PopupStyle"],
  $dependencies: ["aria.popups.Popup"]
}}
    {var data = {showPopup1 : false,
        showPopup2 : false,
        showPopup3 : false,
        showPopup4 : false} /}
    {macro main()}
        <h1>Popup Sample Page</h1>

        {call exampleReferenceTop()/}
        {call exampleReferenceBottom()/}
        {call exampleAbsolute()/}
        {call exampleMix()/}
    {/macro}

    {macro exampleReferenceTop()}
        <h3>A Popup in reference to a button</h3>
        <p>The referenceId allows to specify an element which is used to calculated the position of the popup. Using the <i>preferredPositions</i> it is possible to describe where the popup shut appear based on the referenced element</p>
        {@touch:Popup {
            referenceId : "button1",
            preferredPositions: [{reference:"top left", popup:"bottom left"}],
            contentMacro: 'getPopupContent',
            closeOnMouseClick : false,
            bind:{
                "visible": { inside: this.data, to: 'showPopup1' }
            }
        }/}

        {@touch:Button {
            id : "button1",
            attributes: {classList: ["opener"]},
            on: {
                click : {
                    fn : function() {
                        this.$json.setValue(this.data, "showPopup1", !this.data.showPopup1);
                    }
                }
            }}
        }
        Click me
        {/@touch:Button}
        <span style="font-size:small;">Popup will appear above the Button.</span>
    {/macro}

    {macro exampleReferenceBottom()}
        <h3>A Popup in reference to a button</h3>
        <p>The referenceId allows to specify an element which is used to calculated the position of the popup. Using the <i>preferredPositions</i> it is possible to describe where the popup shut appear based on the referenced element</p>
        {@touch:Popup {
            referenceId : "button2",
            preferredPositions: [{reference:"bottom left", popup:"top left"}],
            contentMacro: 'getPopupContent',
            closeOnMouseClick : false,
            bind:{
                "visible": { inside: this.data, to: 'showPopup2' }
            }
        }/}

        {@touch:Button {
            id : "button2",
            attributes: {classList: ["opener"]},
            on: {
                click : {
                    fn : function() {
                        this.$json.setValue(this.data, "showPopup2", !this.data.showPopup2);
                    }
                }
            }}
        }
        Click Me
        {/@touch:Button}
        <span style="font-size:small;">Popup will appear below the Button.</span>
    {/macro}

    {macro exampleAbsolute()}
        <h3>A Popup with absolute position</h3>
        <p>Using the <i>absolutePosition</i> allows to place the popup anywhere in the page.</p>
        {@touch:Popup {
            absolutePosition: {top : 0, left : 0},
            contentMacro: 'getPopupContent',
            closeOnMouseClick : false,
            bind:{
                "visible": { inside: this.data, to: 'showPopup3' }
            }
        }/}

        {@touch:Button {
            id : "button3",
            attributes: {classList: ["opener"]},
            on: {
                click : {
                    fn : function() {
                        this.$json.setValue(this.data, "showPopup3", !this.data.showPopup3);
                    }
                }
            }}
        }
        Click Me
        {/@touch:Button}
        <span style="font-size:small;">Popup will appear on the top left of the page.</span>
    {/macro}

    {macro exampleMix()}
        <h3>A Popup using the whole width</h3>
        <p>By specifying a referenceId (resp. domReference) and an absolutePosition, the popup position will first be calculated based on the given reference and then the given values in the absolutePosition overwrite the calculated ones.<br/>
         This allows for example to have a popup above an element and take the whole width.</p>
        {@touch:Popup {
            referenceId : "button4",
            preferredPositions: [{reference:"top left", popup:"bottom left"}],
            absolutePosition: {left : 0, right : 0},
            contentMacro: 'getPopupContent',
            closeOnMouseClick : false,
            bind:{
                "visible": { inside: this.data, to: 'showPopup4' }
            }
        }/}

        {@touch:Button {
            id : "button4",
            attributes: {classList: ["opener"]},
            on: {
                click : {
                    fn : function() {
                        this.$json.setValue(this.data, "showPopup4", !this.data.showPopup4);
                    }
                }
            }}
        }
        Click Me
        {/@touch:Button}
        <span style="font-size:small;">Popup will appear above.</span>
    {/macro}

    {macro getPopupContent()}
        <div class="dialog">
            <div style="padding: 10px;">
                Lorem ipsum dolor sit amet. <br />
                Lorem ipsum dolor sit amet.
            </div>
        </div>
    {/macro}

{/Template}
