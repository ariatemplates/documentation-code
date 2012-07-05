{Template {
  $classpath : "samples.features.prefill.basic.PrefillSample",
  $hasScript : true,
  $css : ["samples.features.prefill.basic.PrefillSampleCSS"],
  $dependencies : ['aria.utils.validators.AlphaInternational']
}}

  {macro main ()}
    <div><b>Unless otherwise specified, widgets on the right have a prefill bound to the same portion of the data model to which the value of the widget on the left is bound</b></div>

    <div class="sampleDiv" >
      <div class="title">
        Example of a TextField with an AlphaInternational validator: type "%^&" on the left
      </div>
      <table><tbody>
      <tr>
        <td>
        {@aria:TextField {
          id : "textf1",
          label : "TextField ",
          labelWidth:75,
          width:200,
          bind : {
            value : {
              to : "value1",
              inside : data
            }
          }
        } /}
        </td>
        <td>
        {@aria:TextField {
          id : "textf2",
          helptext : "Hi",
          width:200,
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
        </td>
      </tr>
    </tbody></table>
    </div>
    <div class="sampleDiv" >
        <div class="title">Example of a NumberField with native widget validation: type "aaa" on the left</div>
      <table><tbody>  <tr>
        <td>
        {@aria:NumberField {
          id : "nf1",
          label : "NumberField ",
          labelWidth:75,
          width:200,
          bind : {
            value : {
              to : "value9",
              inside : data
            }
          }
        } /}
        </td>
        <td>
        {@aria:NumberField {
          id : "nf2",
          width:200,
          bind : {
            value : {
              to : "value10",
              inside : data
            },
            prefill : {
              to : "value9",
              inside : data
            }
          }
        } /}
        </td>
      </tr>
    </tbody></table>
    </div>
    <div class="sampleDiv">
      <div class="title">
        The prefill is not validated: type "aaa" on the left, the widget on the right is prefilled. Then focus on the widget on the right
      </div>
    <table><tbody>
      <tr>
        <td>
        {@aria:TextField {
          id : "textf3",
          label : "TextField ",
          labelWidth:75,
          width:200,
          bind : {
            value : {
              to : "value17",
              inside : data
            }
          }
        } /}
        </td>
        <td>
        {@aria:NumberField {
          id : "nf3",
          label : "NumberField ",
          labelWidth :75,
          width:200,
          bind : {
            value : {
              to : "value18",
              inside : data
            },
            prefill : {
              to : "value17",
              inside : data
            }
          }
        } /}
        </td>
      </tr>
    </tbody></table>
    </div>
    <div class="sampleDiv">
    <div class="title">type 9.51pm on the left. Click on the right, then delete the field on the right: the prefill value is restored.</div>
    <table><tbody>
      <tr>
        <td>
        {@aria:TimeField {
          id : "timef1",
          label : "TimeField ",
          pattern : "HH:mm",
          labelWidth:75,
          width:200,
          bind : {
            value : {
              to : "value13",
              inside : data
            }
          }
        } /}
        </td>
        <td>
        {@aria:TimeField {
          id : "timef2",
          width:200,
          pattern : "HH:mm:ss",
          bind : {
            value : {
              to : "value14",
              inside : data
            },
            prefill : {
              to : "value13",
              inside : data
            }
          }
        } /}
        </td>
      </tr>
    </tbody></table>
    </div>
    <div class="sampleDiv">
    <div class="title">type 9.51pm on the left. Click on the right, then delete the field on the right: the prefill value is <b>NOT</b> restored. The prefill of the TimeField on the right is not directly bound to the value of the first one. Look at the script in order to see the logic that implements the binding.</div>
    <table><tbody>
      <tr>
        <td>
        {@aria:TimeField {
          id : "timef3",
          label : "TimeField ",
          pattern : "HH:mm",
          labelWidth:75,
          width:200,
          bind : {
            value : {
              to : "value19",
              inside : data
            }
          }
        } /}
        </td>
        <td>
        {@aria:TimeField {
          id : "timef4",
          width:200,
          pattern : "HH:mm:ss",
          bind : {
            value : {
              to : "value21",
              inside : data
            },
            prefill : {
              to : "value20",
              inside : data
            }
          }
        } /}
        </td>
      </tr>
    </tbody></table>
    </div>
    <div class="sampleDiv">
    <div class="title">Example of prefill value already set in the data model when the template is displayed. Also, an alternative to the Text widget is implemented as in the use case</div>
    <table><tbody>

      <tr>
        <td>
        {@aria:DatePicker {
          id : "dp1",
          label : "DatePicker ",
          labelWidth:75,
          width:200,
          bind : {
            value : {
              to : "value3",
              inside : data
            }
          }
        } /}
        </td>
        <td>
        {@aria:DatePicker {
          id : "dp2",
          pattern : "EEEE d MMMM yyyy",
          width:200,
          bind : {
            value : {
              to : "value4",
              inside : data
            },
            prefill : {
              to : "value3",
              inside : data
            }
          }
        } /}
        </td>
        <td>
        {section {
          id : "weekDayText",
          bindRefreshTo : [{
            to : "value4",
            inside : data
          },{
            to : "value3",
            inside : data
          }],
          macro : "textMacro"
        } /}
        </td>
      </tr>
    </tbody></table>
    </div>
    <div class="sampleDiv">
    <table><tbody>
      <tr>
        <td>
        {@aria:DateField {
          id : "df1",
          label : "DateField ",
          labelWidth:75,
          width:200,
          bind : {
            value : {
              to : "value7",
              inside : data
            }
          }
        } /}
        </td>
        <td>
        {@aria:DateField {
          id : "df2",
          pattern : "EEEE d MMMM yyyy",
          width:200,
          bind : {
            value : {
              to : "value8",
              inside : data
            },
            prefill : {
              to : "value7",
              inside : data
            }
          }
        } /}
        </td>
      </tr>
    </tbody></table>
    </div>
    <div class="sampleDiv">
    <table><tbody>
      <tr>
        <td>
        {@aria:MultiSelect {
          id : "ms1",
          helptext : "Multiselect",
          activateSort: true,
          label: "MultiSelect ",
          labelWidth:75,
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
            value : {
              to : 'value5',
              inside : data
            }
          }
        }/}
        </td>
        <td>
        {@aria:MultiSelect {
          id : "ms2",
          helptext : "Multiselect",
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
          items: this.data.items1,
          bind:{
            value : {
              to : 'value6',
              inside : data
            },
            prefill : {
              to : "value5",
              inside : data
            }
          }
        }/}
        </td>
      </tr>
    </tbody></table>
    </div>
    <div class="sampleDiv">
    <div class="title">Example with helptext: select an option on the left, then delete the text inside the left widget: the helptext is restored in both fields</div>
    <table><tbody>
      <tr>
        <td>
        {@aria:SelectBox {
          id : "sb1",
          label : "SelectBox ",
          labelWidth:75,
          width:200,
          helptext:"Type text or select",
          options: data.items,
          bind : {
            value : {
              to : "value11",
              inside : data
            }
          }
        } /}
        </td>
        <td>
        {@aria:SelectBox {
          id : "sb2",
          width:200,
          helptext:"Type text or select",
          options: data.items1,
          bind : {
            value : {
              to : "value12",
              inside : data
            },
            prefill : {
              to : "value11",
              inside : data
            }
          }
        } /}
        </td>
      </tr>
    </tbody></table>
    </div>
    <div class="sampleDiv">
    <table><tbody>
      <tr>
        <td>
        {@aria:AutoComplete {
          id : "ac1",
          label:"AutoComplete ",
          helptext:"country",
          labelWidth:75,
          width:200,
          block:false,
          resourcesHandler: getNationsHandler(3),
          preselect: "always",
          bind:{
              "value" : {
                inside : data,
                to : "value15"
              }
          }
        }/}
        </td>
        <td>
        {@aria:AutoComplete {
          id : "ac2",
          helptext:"country",
          labelWidth:75,
          width:200,
          block:false,
          resourcesHandler: getNationsHandler(3),
          preselect: "always",
          bind:{
              "prefill" : {
                inside : data,
                to : "value15"
              },
              "value" : {
                inside : data,
                to : "value16"
              }
          }
        }/}
        </td>
      </tr>
    </tbody></table>
    </div>
    <div class="sampleDiv">
    <table><tbody>

      <tr>
        <td>
        {@aria:Button {
          label : "Confirm all",
          onclick : "leavePrefillState"
        } /}
        </td>
      </tr>
    </tbody></table>
  {/macro}


  {macro textMacro ()}
    {var weekday=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"] /}
    {var color = "black" /}
    {var value = data.value4 /}
    {var output = "" /}
    {if !value}
      {set color = "#DDDDDD" /}
      {set value = data.value3 /}
    {/if}
    {if value}
      {set output = weekday[value.getDay()] /}
    {/if}

    <div style="color:${color};">${output}</div>
  {/macro}

{/Template}