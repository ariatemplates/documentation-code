/**
 * Copyright Amadeus
 */
{Template {
  $classpath : "samples.widgets.map.MapSample",
  $hasScript : false,
  $css : ["MapSampleCSS"],
  $wlibs: {
          "embed": "aria.embed.EmbedLib"
  }
}}

  {macro main()}

    {@embed:Map {
      id : "mySimpleMap",
      provider : "microsoft7",
      loadingIndicator : true,
      type : "DIV",
      attributes : {
        classList : ["mapContainer"]
      }
    }/}

  {/macro}

{/Template}