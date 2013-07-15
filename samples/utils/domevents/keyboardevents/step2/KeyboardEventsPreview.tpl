{Template {
    $classpath:'samples.utils.domevents.keyboardevents.step2.KeyboardEventsPreview',
    $hasScript:false
}}
    {macro main()}
    	<b>Checkbox selections are now preserved after a refresh.</b><br>
    	In addition to the previous <b>\{on keydown\}</b> handler, the checkboxes now also have an <b>\{on change\}</b> handler.<br>
    	This <b>\{on change\}</b> handler is used to store the state of checkboxes in the datamodel.
    {/macro}
{/Template}