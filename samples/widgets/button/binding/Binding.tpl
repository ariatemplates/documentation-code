{Template {
  $classpath: "samples.widgets.button.binding.Binding"
}}

  {macro main()}

    {@aria:Button {
      label : "This button has bindings",
      bind : {
        disabled : {
          to : "disabled",
          inside : data
        },
        selected : {
          to : "selected",
          inside : data
        },
        tooltip : {
          to : "tooltip",
          inside : data
        }
      }
    }/}

    <br /><br />

    // Control fields
    {@aria:CheckBox {
      label : "Toggle disabled on button",
      bind : {
        value : {
          to : "disabled",
          inside : data
        }
      }
    }/}
    <br />
    {@aria:CheckBox {
      label : "Toggle selected on button",
      bind : {
        value : {
          to : "selected",
          inside : data
        }
      }
    }/}
    <br /><br />
    {@aria:TextField {
      label : "Tooltip content",
      labelPos : "top",
      bind : {
        value : {
          to : "tooltip",
          inside : data
        }
      }
    }/}
  {/macro}

{/Template}