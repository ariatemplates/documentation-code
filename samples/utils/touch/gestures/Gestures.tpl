{Template {
  $classpath:'samples.utils.touch.gestures.Gestures',
  $hasScript: true,
  $css: ["samples.utils.touch.gestures.GesturesStyle"]
}}

  {macro main()}
    <div class="touchtext">
      <span class="touchMe">TOUCH ME</span>
    </div>

    <div class="touchboard"
      {on tap {fn : this.touchHandler, scope : this}/}
      {on tapstart {fn : this.touchHandler, scope : this}/}
      {on tapcancel {fn : this.touchHandler, scope : this}/}
      {on singletap {fn : this.touchHandler, scope : this}/}
      {on singletapstart {fn : this.touchHandler, scope : this}/}
      {on singletapcancel {fn : this.touchHandler, scope : this}/}
      {on doubletap {fn : this.touchHandler, scope : this}/}
      {on doubletapstart {fn : this.touchHandler, scope : this}/}
      {on doubletapcancel {fn : this.touchHandler, scope : this}/}
      {on doubletap {fn : this.touchHandler, scope : this}/}
      {on longpress {fn : this.touchHandler, scope : this}/}
      {on longpressstart {fn : this.touchHandler, scope : this}/}
      {on longpresscancel {fn : this.touchHandler, scope : this}/}
      {on dragstart {fn : this.touchHandler, scope : this}/}
      {on drag {fn : this.touchHandler, scope : this}/}
      {on dragmove {fn : this.touchHandler, scope : this}/}
      {on dragcancel {fn : this.touchHandler, scope : this}/}
      {on swipe {fn : this.touchHandler, scope : this}/}
      {on swipestart {fn : this.touchHandler, scope : this}/}
      {on swipemove {fn : this.touchHandler, scope : this}/}
      {on swipecancel {fn : this.touchHandler, scope : this}/}
      {on pinch {fn : this.touchHandler, scope : this}/}
      {on pinchstart {fn : this.touchHandler, scope : this}/}
      {on pinchmove {fn : this.touchHandler, scope : this}/}
      {on pinchcancel {fn : this.touchHandler, scope : this}/}
    >

    </div>

    {section {
      id: "console",
      type: "div",
      attributes : {classList : ["console"]},
      bindRefreshTo: [{to:"messagesCount", inside:this.inData}]
    }}
      <button class="clear" {on tap {fn : this.clearConsole, scope : this}/}>Clear</button>
      <h2>Event log</h2>
      <b>event.duration - event.type</b>
      {foreach msg in this.inData.messages}
        <span class="consoleline">${msg}</span>
      {/foreach}
    {/section}

  {/macro}
{/Template}