/**
 * Copyright Amadeus
 */
{Template {
	$classpath : 'samples.widgets.link.LinkWgtSample',
	$hasScript : true } }
	{macro main ( )}
	   <p>Click on the link will invoke userdefined callback function</p>
		{@aria:Link {
			id:"myLink",
			label : "link Label",
			margins : "60 x x 60",
			onclick : linkClicked
		}/}
	{/macro}
{/Template}
