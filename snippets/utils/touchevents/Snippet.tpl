/**
 * Copyright Amadeus
 */
{Template {
  $classpath : "snippets.utils.touchevents.TouchStart",
  $css : ["snippets.utils.touchevents.TouchEventsCSS"],
  $hasScript: true
} }

  {macro main ( )}
    This sample uses the <strong>"touchstart"</strong> event to record a touch and return the touchstart coordinates.  <br/>
    Touch anywhere in the touch board below to see this working. <br/> <br/>
	////#touchEvent
    <div id="touchboard"
       {on touchstart {
        fn : this.touchHandler,
        scope : this
      }/}
      {on mousedown {
        fn : this.touchHandler,
        scope : this
      }/}
    >
	////#touchEvent
      <div id="touchtext">
        <span id="results"></span>
        <span id="touchMe">TOUCH ME</span></div>
      </div>
    </div>
  {/macro}

{/Template}