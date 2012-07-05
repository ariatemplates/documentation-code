{Template {
  $classpath : "samples.features.autoselect.AutoSelect",
  $hasScript : true,
  $css : ["samples.features.autoselect.AutoSelectCSS"]
}}

  {macro main ()}
    <div><b>Widgets on the left have AutoSelect switched on, widgets on the right have AutoSelect switched off.</b></div>

    <div class="sampleDiv" >
      <div class="title">
        Example of a TextField with AutoSelect, click in the field on the left then the field on the right.
      </div>
      <table><tbody>
      <tr>
        <td>
        {@aria:TextField {
          id : "txtf0",
          label : "TextField ",
          labelWidth:75,
          width:200,
          value: "Selected?",
          autoselect: true
        } /}
        </td>
        <td>
        {@aria:TextField {
          id : "txtf1",
          helptext : "Hi",
          width:200,
          value: "Selected?",
          autoselect: false
        } /}
        </td>
      </tr>
    </tbody></table>
    </div>
    <div class="sampleDiv" >
        <div class="title">Example of a NumberField with AutoSelect, click in the field on the left then the field on the right.</div>
      <table><tbody>  <tr>
        <td>
        {@aria:NumberField {
          id: "nf0",
          label: "NumberField",
          labelWidth:75,
          width:200,
          value: 55378008,
          autoselect: true
        }/}
        </td>
        <td>
        {@aria:NumberField {
          id: "nf1",
          width:200,
          value: 55378008,
          autoselect: false
        }/}
        </td>
      </tr>
    </tbody></table>
    </div>
    <div class="sampleDiv" >
        <div class="title">Example of a TimeField with AutoSelect, click in the field on the left then the field on the right.</div>
      <table><tbody>  <tr>
        <td>
        {@aria:TimeField {
          id: "tf0",
          label: "TimeField",
          labelWidth:75,
          width:200,
          pattern:aria.core.AppEnvironment.getTimeFormats().shortFormat,
          value: new Date(),
          autoselect: true
        }/}
        </td>
        <td>
        {@aria:TimeField {
          id: "tf1",
          width:200,
          pattern:aria.core.AppEnvironment.getTimeFormats().shortFormat,
          value: new Date(),
          autoselect: false
        }/}
        </td>
      </tr>
    </tbody></table>
    </div>
    <div class="sampleDiv" >
        <div class="title">Example of a DateField with AutoSelect, click in the field on the left then the field on the right.</div>
      <table><tbody>  <tr>
        <td>
        {@aria:DateField {
          id: "df0",
          label: "DateField",
          labelWidth:75,
          width:200,
          value: new Date (),
          autoselect: true
        }/}
        </td>
        <td>
        {@aria:DateField {
          id: "df1",
          width:200,
          value: new Date (),
          autoselect: false
        }/}
        </td>
      </tr>
    </tbody></table>
    </div>
    <div class="sampleDiv" >
        <div class="title">Example of a DatePicker with AutoSelect, click in the field on the left then the field on the right.</div>
      <table><tbody>  <tr>
        <td>
        {@aria:DatePicker {
          id: "dp0",
          label: "DatePicker",
          labelWidth:75,
          width:200,
          value: new Date(),
          autoselect: true
        }/}
        </td>
        <td>
        {@aria:DatePicker {
          id: "dp1",
          width:200,
          value: new Date(),
          autoselect: false
        }/}
        </td>
      </tr>
    </tbody></table>
    </div>
    <div class="sampleDiv" >
        <div class="title">Example of a MultiSelect with AutoSelect, click in the field on the left then the field on the right.</div>
      <table><tbody>  <tr>
        <td>
        {@aria:MultiSelect {
          id: "ms0",
          label: "MultiSelect",
          labelWidth:75,
          width:200,
          items:[{value:'Selected?'}],
          value: ['Selected?'],
          autoselect: true
        }/}
        </td>
        <td>
        {@aria:MultiSelect {
          id: "ms1",
          width:200,
          items:[{value:'Selected?'}],
          value: ['Selected?'],
          autoselect: false
        }/}
        </td>
      </tr>
    </tbody></table>
    </div>
    <div class="sampleDiv" >
        <div class="title">Example of a AutoComplete with AutoSelect, click in the field on the left then the field on the right.</div>
      <table><tbody>  <tr>
        <td>
        {@aria:AutoComplete {
          id: "ac0",
          label: "AutoComplete",
          labelWidth:75,
          width:200,
          resourcesHandler : getNationsHandler(3),
          value: "Selected?",
          autoselect: true
        }/}
        </td>
        <td>
        {@aria:AutoComplete {
          id: "ac1",
          width:200,
          resourcesHandler : getNationsHandler(3),
          value: "Selected?",
          autoselect: false
        }/}
        </td>
      </tr>
    </tbody></table>
    </div>
  {/macro}

{/Template}