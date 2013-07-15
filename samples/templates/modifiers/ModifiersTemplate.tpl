// TODOC
{Template {
	$classpath:'samples.templates.modifiers.ModifiersTemplate',
	$hasScript:false,
	$wlibs:{}
}}

	{macro main()}

		{set testDefaultValue="a default Value"/}
		{set testEmptyVariable=" "/}
		{set testDate=new Date()/}
		{set testTime=new Date()/}

		<h5>capitalize</h5>
		<p>Amadeus changes to ${"Amadeus"|capitalize}</p>

		<h5>Empty</h5>
		<p>Use a ${testEmptyVariable|empty:testDefaultValue} if the string is empty</p>

		<h5>Date format</h5>
		<p>Simple date modifier ${testDate|dateformat:"dd MMMM yyyy"}</p>
		<h5>Time format</h5>
		<p>Simple time modifier ${testTime|timeFormat:"hh:mm:ss"}</p>

	{/macro}

{/Template}