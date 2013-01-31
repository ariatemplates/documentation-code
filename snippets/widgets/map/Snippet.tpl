/**
 * Copyright Amadeus
 */
{Template {
  $classpath : "snippets.widgets.map.Snippet",
  $hasScript : false,
  $css : ["MapSampleCSS"],
  $wlibs: {
          "embed": "aria.embed.EmbedLib"
  }
}}

  {macro main()}
	////#wgtMap
    {@embed:Map {
      id : "mySimpleMap",
      provider : "microsoft7",
      loadingIndicator : true,
      type : "DIV",
      attributes : {
        classList : ["mapContainer"]
      }
    }/}
	////#wgtMap

  {/macro}

{/Template}