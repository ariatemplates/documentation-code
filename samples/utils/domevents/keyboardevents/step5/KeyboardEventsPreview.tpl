{Template {
    $classpath:'samples.utils.domevents.keyboardevents.step5.KeyboardEventsPreview',
    $hasScript:false
}}
    {macro main()}
		<b>Step 5 is an optimized version of Step 4, using DomElementWrapper to avoid useless refresh.</b><br>
		An <b>\{id\}</b> has been added on the containers in order to retrieve them from the template script.<br>
		We use the <b>DomElementWrapper</b> API to directly change the classnames of the boxes. The template is never entirely refreshed.<br>
		The "Selected index" info below the num pad has been migrated to a <b>section</b> with a binding on the selected index.<br>
	{/macro}
{/Template}