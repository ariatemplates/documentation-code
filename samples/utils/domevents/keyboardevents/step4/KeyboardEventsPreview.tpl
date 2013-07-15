{Template {
    $classpath:'samples.utils.domevents.keyboardevents.step4.KeyboardEventsPreview',
    $hasScript:false
}}
    {macro main()}
		<b>Step 4 is an optimized version of step 3, using event delegation.</b><br>
		With event delegation to bring the total number of events to 3 instead 3*9 = 27.<br>
		The on statements have been extracted from the for loop, and are now on the <b>form</b> containing the checkboxes.<br>
		Then we use <b>expandos</b> to check the event occured on a checkbox, and to retrieve its index.<br>
		<i>NB : On IE, only 2 of the 3 events are delegated. The change event is not accepted on non-input elements in IE.</i>
	{/macro}
{/Template}