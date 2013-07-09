{Template {
  $classpath : "samples.utils.domevents.mousewheel.MouseWheel",
  $hasScript: true
} }

  {macro main ( )}
    <h3>This sample demonstrates the usage of onwheel</h3>

	  Use the mouse wheel on the field below.
      <div style="width:200px; height:200px; overflow:auto;" {on mousewheel {
        fn : this.onMouseScroll,
        scope : this
      }/}>
        <div style="height:2000px; background-color:#a08080;"></div>
      </div>
      <br />

      The last roll amount:
      <span style="background-color:#e0e0d0;">
        {@aria:NumberField {bind:{value:{to:"rolled",inside:data}}}/}
      </span>

  {/macro}

{/Template}
