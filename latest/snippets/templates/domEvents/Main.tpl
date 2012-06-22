{Template {
    $classpath: "ariadoc.snippets.templates.domEvents.Main",
    $hasScript: true
}}

	{macro main ()}
		////#basic
		<div {on click {fn:this._onClick, scope: this, args: {}}/}>Click here !</div>
        ////#basic
		////#short
		<div {on click "myTplScriptMethod"/}>Lorem ipsum</div>
		<div {on click myTplScriptMethod/}>dolor sit amet</div>
		<div {on click this.myTplScriptMethod/}>consectetur adipisicing elit</div>
		////#short
		////#complete
		<div {on click {
			fn : this.myTplScriptMethod,
			scope : this,
			args : "a string"
		}/}>Lorem ipsum<div>
        ////#complete
        ////#multiple
		<div
			{on click "onClickCallback"/}
			{on mouseleave "onMouseleaveCallback"/}
		>Lorem ipsum</div>
        ////#multiple

	{/macro}

{/Template}