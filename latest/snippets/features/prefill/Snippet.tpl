{Template {
  $classpath: "ariadoc.snippets.features.prefill.Snippet",
  $hasScript : false
}}

  {macro main()}

    ////#textfield
    {@aria:TextField {
        bind : {
          value : {
            to : "value2",
            inside : data
          },
          prefill : {
            to : "value1",
            inside : data
          }
        }
     } /}
    ////#textfield

    ////#numberfield
    {@aria:NumberField {
        id : "widgetA",
        bind : {
          value : {
            to : "value2",
            inside : data
          },
          prefill : {
            to : "value1",
            inside : data
          }
        }
    } /}

    {@aria:NumberField {
        id : "widgetB"
        bind : {
          value : {
            to : "value1",
            inside : data
          }
        }
    } /}
    ////#numberfield

    ////#json
    ...
    this.$json.setValue(this.data, "value2", this.data.value1);
    ...
    ////#json

    ////#skinningproperties
    aria.templates.TextInput.std.states.prefill.color=gray
    aria.templates.SelectBox.std.states.prefill.color=gray
    aria.templates.DatePicker.std.states.prefill.color=gray
    aria.templates.MultiSelect.std.states.prefill.color=gray
    aria.templates.AutoComplete.std.states.prefill.color=gray
    ////#skinningproperties

  {/macro}

{/Template}