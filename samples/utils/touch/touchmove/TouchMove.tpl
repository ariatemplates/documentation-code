/**
 * Copyright Amadeus
 */
{Template {
  $classpath : "samples.utils.touch.touchmove.TouchMove",
  $css : ["samples.utils.touch.touchmove.TouchEventsCSS"],
  $hasScript: true
} }

  {macro main ( )}
    This sample uses the <strong>"touchmove"</strong> event to record a touch and return the touchmove coordinates.  <br/>
    Touch and move anywhere in the touch board below to see the coordinates you are moving to change. <br/> <br/>
    <div id="touchboard"
       {on touchmove {
        fn : this.touchHandler,
        scope : this
      }/}
      {on mousemove {
        fn : this.touchHandler,
        scope : this
      }/}
    >
      <div id="touchtext">
        <span id="results"></span>
        <span id="touchMe">TOUCH ME</span></div>
      </div>
    </div>
  {/macro}

{/Template}