{Template {
	$classpath : 'samples.widgets.selectbox.invalidtext.SampleUsage'
}}
	{macro main()}

	  <h2>Selectbox with allowInvalidText = true</h2>
    <p>Type or paste whatever you want, the widget will let you do everything, if you insert a good option it will display the dropdown with the options:</p>
      {@aria:SelectBox {
        id : "selectbox1",
        label : "Choose one option: ",
        allowInvalidText : true,
        options : data.countries,
        bind : {
          options : {
            inside : data,
            to : "countries"
            }
        }
      }/}

      <h2>Selectbox with allowInvalidText = false (default case)</h2>
      <p>Type or paste whatever you want, the widget will block the actions if the text is not a valid option:</p>
      {@aria:SelectBox {
        id : "selectbox2",
        label : "Choose one option: ",
        allowInvalidText : false,
        options : data.countries,
        bind : {
          options : {
            inside : data,
            to : "countries"
            }
        }
      }/}


    <br/>

     {@aria:TextField {
      id : "attext",
      label : "Copy the invalid text from here: ",
      width: 400,
      height: 50,
      autoselect : true,
      bind : {
      	"value" : {
      		inside : data,
      		to : "value"
      	}
  	  }
    }/}


	{/macro}

{/Template}
