{Template {
    $classpath:'ariadoc.guides.airportmap.view.Main',
    $hasScript: true,
    $css: ['ariadoc.guides.airportmap.view.MainStyle']
}}

  {macro main()}
    <div class="toplinks">
	    <a {on click {fn:"showMap"}/}>Show Map</a>&nbsp;|&nbsp;
	    <a {on click {fn:"zoom",args:0.5}/}>Zoom+</a>&nbsp;|&nbsp;
	    <a {on click {fn:"zoom",args:-0.5}/}>Zoom-</a>&nbsp;|&nbsp;
	    <a {on click {fn:"zoom",args:0}/}>Zoom 1</a>
    </div>

    <div style="position:relative">
    <div id="mapcanvas" style="position:absolute;top:0px;left:0px">

    </div>
    <div id="hourcanvas"  style="position:absolute;top:5px;left:995px">

    </div>

    </div>

  {/macro}

{/Template}

