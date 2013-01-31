{Template {
	$classpath : "snippets.utils.dragdrop.Drag",
	$hasScript: true
}}

	{macro main()}

        ////#drag1html
        <div id="dragElement">
            <h1 id="dragHeading">This element is draggable</h1>
            <p>and can be moved anywhere in the page<p>
        </div>
        ////#drag1html

        ////#drag2html
        <div id="dialog-container">
            <div id="dialog-title">
                <span id="dialog-message">My Dialog</span> <a href="#" role="button"> <span>X</span></a>
            </div>
            <div id="dialog-message">
                <p>This is the Aria-Templates Draggable Dialog.</p>
            </div>
            <div id="dialog-button">
                <div>
                    <button type="button" role="button">
                        <span><b>Ok</b></span>
                    </button>
                </div>
            </div>
        </div>
        ////#drag2html

	{/macro}

{/Template}
