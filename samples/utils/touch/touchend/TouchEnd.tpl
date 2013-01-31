/**
 * Copyright Amadeus
 */
{Template {
  $classpath : "samples.utils.touch.touchend.TouchEnd",
  $css : ["samples.utils.touch.touchend.TouchEventsCSS"],
  $hasScript: true
} }

  {macro main ( )}
    This sample uses both the <strong>"touchstart"</strong> and <strong>"touchend"</strong> events to display a message informing you when you have started to touch the screen and when you have finished touching the screen.  <br/>
    <br>
    Touch anywhere in the touch board below to see this working, multiple touches are currently not supported. <br/> <br/>
    <div id="touchboard"
       {on touchstart {
          fn : this.touchHandler,
          scope : this
        }/}
        {on mousedown {
          fn : this.touchHandler,
          scope : this
        }/}
       {on touchend {
        fn : this.touchHandler,
        scope : this
      }/}
      {on mouseup {
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

