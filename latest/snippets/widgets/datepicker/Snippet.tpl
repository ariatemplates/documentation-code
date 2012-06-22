{Template {
  $classpath : "ariadoc.snippets.widgets.datepicker.Snippet"} }

  {macro main ( )}

    ////#wgtDatePickerSimple
		{@aria:DatePicker {
		    label: "From date:",
		    labelWidth:150,
		    width:300,
		    bind:{
		     "value":{to:'view:calvalue',inside:data}
		    }
		}/}
    ////#wgtDatePickerSimple


    ////#wgtDatePickerCustom
	    {@aria:DatePicker {
	        label: "From date:",
	        calendarTemplate: "samples.widgets.form.templates.CustomizedCalendar"
	    }/}
    ////#wgtDatePickerCustom

    {/macro}

{/Template}