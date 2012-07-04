{Template {
  $classpath : "samples.features.prefill.usecase.PrefillSample",
  $hasScript : true
}}

  {macro main ()}
  <table><tbody>
  <tr>
    <td>From</td><td>To</td><td>Date</td><td>Airlines</td>
  </tr>
  {foreach item inArray data.flights}
    <tr>
      <td>
      {@aria:AutoComplete {
        width:75,
        block:false,
        resourcesHandler: getCitiesHandler(3),
        preselect: "always",
        bind:{
            "value" : {
              inside : item.from,
              to : "value"
            },
            "prefill" : {
              inside : item.from,
              to : "prefill"
            }
        }
      }/}
      </td>
      <td>
      {@aria:AutoComplete {
        width:75,
        block:false,
        resourcesHandler: getCitiesHandler(3),
        preselect: "always",
        bind:{
            "value" : {
              inside : item.to,
              to : "value"
            },
            "prefill" : {
              inside : item.to,
              to : "prefill"
            }
        }
      }/}
      </td>
      <td>
      {@aria:DatePicker {
        bind : {
            "value" : {
              inside : item.date,
              to : "value"
            },
            "prefill" : {
              inside : item.date,
              to : "prefill"
            }
        }
      } /}
      </td>
      <td>
      {@aria:MultiSelect {
        activateSort: true,
        width:200,
        fieldDisplay: "code",
        fieldSeparator:',',
        valueOrderedByClick: true,
        maxOptions:7,
        numberOfRows:4,
        displayOptions : {
          flowOrientation:'horizontal',
          listDisplay: "both",
          displayFooter : true
        },
        items: this.data.items,
        bind:{
            "value" : {
              inside : item.airlines,
              to : "value"
            },
            "prefill" : {
              inside : item.airlines,
              to : "prefill"
            }
        }
      }/}
      </td>
      <td>
        {@aria:Button {
          label : "Remove",
          onclick : {fn : "removeSegment", scope : this, args : item.index}
        } /}
      </td>
    </tr>
  {/foreach}
  </tbody></table>

  <div>
  {@aria:Button {
    label : "Add segment",
    onclick : "addSegment"
  } /}
  </div>
  {/macro}

{/Template}