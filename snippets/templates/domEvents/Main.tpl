{Template {
    $classpath: "snippets.templates.domEvents.Main",
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

    {for var i=1 ; i < 10 ; i++}
    ////#simpleHtmlWithData
      <input type="checkbox" data-index="${i}" value="${i}" />
    ////#simpleHtmlWithData
    {/for}
	{/macro}

{/Template}