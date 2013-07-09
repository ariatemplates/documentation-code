{Template {
    $classpath:'samples.utils.domevents.keyboardevents.step1.KeyboardEventsPreview',
    $hasScript:false
}}
    {macro main()}
            <b>Use the arrows to navigate between boxes.</b><br>
            The boxes contain inputs to handle keyboard and form events.<br>
            Each checkbox has one event handler attached to it : <b>\{on keydown\}</b>.<br>
            The on keydown is used to move the selection to another box, and trigger a refresh.
    {/macro}
{/Template}