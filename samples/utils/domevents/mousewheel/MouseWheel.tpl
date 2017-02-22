{Template {
  $classpath : "samples.utils.domevents.mousewheel.MouseWheel",
  $hasScript: true
} }

  {macro main ( )}
    <h3>This sample demonstrates the usage of mosuewheel event callback</h3>

	  Use the mouse scroll on the div below. One mouse scroll down is -120 and one mouse scroll up is +120.
      <div style="width:200px; height:200px; overflow:auto;" {on mousewheel {
        fn : this.onMouseScroll,
        scope : this
      }/}>
        <div style="height:2000px; background-color:#a08080;"></div>
      </div>
      <br />

      Below field shows the sum of scrolled value
      <br/>
      <span style="background-color:#e0e0d0;">
        {@aria:NumberField {bind:{value:{to:"rolled",inside:data}}}/}
      </span>

  {/macro}

{/Template}
