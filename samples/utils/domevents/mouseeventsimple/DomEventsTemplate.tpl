{Template {
	$classpath: "samples.utils.domevents.mouseeventsimple.DomEventsTemplate",
	$css : ["samples.utils.domevents.mouseeventsimple.DomEventsCSS"],
	$hasScript: true
}}
	{macro main()}
		<h2>Simple event listener</h2>
		The text below has a click listener. Clicking on it opens an alert window.<br /><br />
		<span {on click "simpleClick"/}>Click here</span>

		<h2>Example with bubbling</h2>
		The links below are inside a div with a click listener.<br /><br />
		<div {on click "onDivClickBubbling"/}>
			<a data-info="A">Click here (A)</a><br /><br />
			<a>Here nothing happens</a><br /><br />
			<a data-info="B">Click here (B) <b>or even in this child element</b></a>
		</div>


		<h2>Changing the class name</h2>
		The text below has mousover and mouseout listeners that change the class name.<br /><br />
		<span {on mouseover "classNameChangeOnMouseOver"/} {on mouseout "classNameChangeOnMouseOut"/}>Move the mouse over here</span>

		<h2>Mouse Enter/Leave</h2>
		The two blue boxes below have a complex structure with child elements. The box on the left listens to mouseover/out while the box on the right does that on mouseenter/leave.

		<div data-name="left container" class="container blue" {on mouseover "logEvent"/} {on mouseout "logEvent"/}>
			Move the mouse over here.
			<br /><br />
			<div data-name="left child" class="child">
				and over here.
			</div>
		</div>

		<div data-name="right container" class="container blue"  {on mouseenter "logEvent"/} {on mouseleave "logEvent"/}>
			Move the mouse over here.
			<br /><br />
			<div data-name="right child" class="child" id="internalChild">
				and over here.
			</div>
		</div>

		<div style="clear:both">

		{section {
			id : "log",
			macro : "logEvents"
		}/}
	{/macro}

	{macro logEvents()}
	Last 5 events fired<br/>
	{for var i=len=this.data.events.length; i >= len - 5; i -= 1}
		${this.data.events[i]}<br />
	{/for}
	{/macro}
{/Template}