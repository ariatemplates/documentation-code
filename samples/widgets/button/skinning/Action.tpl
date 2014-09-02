{Template {
  $classpath: "samples.widgets.button.skinning.Action",
}}
  {macro main()}

    {@aria:Button {
      label : "My skinclass is std."
    }/}

    <br /><br />

    {@aria:Button {
      label : "My skinclass is important.",
      sclass : "important"
    }/}

  {/macro}

{/Template}