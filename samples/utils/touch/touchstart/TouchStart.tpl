/**
 * Copyright Amadeus
 */
{Template {
  $classpath : "samples.utils.touch.touchstart.TouchStart",
  $css : ["samples.utils.touch.touchstart.TouchEventsCSS"],
  $hasScript: true
} }

  {macro main ( )}
    This sample uses the <strong>"touchstart"</strong> event to record a touch and return the touchstart coordinates.  <br/>
    Touch anywhere in the touch board below to see this working. <br/> <br/>
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
      <div id="touchtext">
        <span id="results"></span>
        <span id="touchMe">TOUCH ME</span></div>
      </div>
    </div>
  {/macro}

{/Template}