/**
 * Copyright Amadeus
 */
{Template {
  $classpath : "samples.utils.touch.tap.Tap",
  $css : ["samples.utils.touch.tap.TouchEventsCSS"],
  $hasScript: true
} }

  {macro main ( )}
    This sample uses the "tap" gesture event to record a finger tap.  <br/>
    For each tap recorded the score gets incremented by 1.  <br/>
    See how many taps you can score before your time runs out, good luck! <br/><br/>
    Rules:
    <ul>
      <li>- The game starts on the first tap</li>
      <li>- You have 15 seconds to tap as many times as you can on the tap board</li>
    </ul>
    <div id="scoreTime" class="largeText">
        Taps: <span id="score">0</span><br/>
        <span id="time">Time: <span id="seconds">15</span>:<span id="centiseconds">00</span></span>
    </div>
    <div id="touchboard"
      {on tap {
        fn : this.tapHandler,
        scope : this
      }/}
    >
      <div id="touchtext"><span id="tapMe">TAP ME</span></div>
    </div>
  {/macro}

{/Template}

