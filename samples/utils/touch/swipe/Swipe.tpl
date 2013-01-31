/**
 * Copyright Amadeus
 */
{Template {
  $classpath : "samples.utils.touch.swipe.Swipe",
  $css : ["samples.utils.touch.swipe.TouchEventsCSS"],
  $hasScript: true
} }

  {macro main ( )}
    This sample uses the swipe event to display the:
    <div id="results">
       <ul>
         <li><strong>swipe direction:</strong> <span id="swipeDirection">up, down, left, right</span></li>
         <li><strong>swipe distance:</strong> <span id="swipeDistance">in pixels</span></li>
         <li><strong>swipe length:</strong> <span id="swipeLength">in ms</span></li>
         <li><strong>swipe startX:</strong> <span id="swipeStartX">start coordinates of the swipe (e.page/clientX)</span></li>
         <li><strong>swipe startY:</strong> <span id="swipeStartY">start coordinates of the swipe (e.page/clientY)</span></li>
         <li><strong>swipe endX:</strong> <span id="swipeEndX">end coordinates of the swipe (e.page/clientX)</span></li>
         <li><strong>swipe endY:</strong> <span id="swipeEndY">end coordinates of the swipe (e.page/clientY)</span></li>
       </ul>
     </div>
    For a swipe to be valid it must be in a horizontal or vertical straight line (not a diagonal line)<br/>
    To try it swipe anywhere in the touch board below: <br/> <br/>
    <div id="touchboard"
      {on swipe {
        fn : this.swipeHandler,
        scope : this
      }/}
    >
      <div id="touchtext">
        <span id="touchMe">SWIPE ME</span></div>
      </div>
    </div>
  {/macro}

{/Template}
