{Template {
    $classpath : 'samples.widgets.datepicker.reference.ReferenceDatePicker',
    $hasScript : false
}}
    {macro main()}

    <p>Enter date in the first date picker and the successive datepickers takes the previously entered date as the reference date when the user input is +/-N</p>
    </hr>
    {@aria:DatePicker {
      label: "Date Picker 1",
      block: true,
      bind : {
        value : {
          to : "view:calVal1",
          inside : data
        },
        referenceDate : {
          to : "view:calVal1",
          inside : data
        }
      }
    }/}

    {@aria:DatePicker {
      label: "Date Picker 2",
      block: true,
      bind : {
        value : {
          to : "view:calVal2",
          inside : data
        },
        referenceDate : {
          to : "view:calVal1",
          inside : data
        }
      }
    }/}
    {@aria:DatePicker {
      label: "Date Picker 3",
      block: true,
      bind : {
        value : {
          to : "view:calVal3",
          inside : data
        },
        referenceDate : {
          to : "view:calVal2",
          inside : data
        }
      }
    }/}
    {@aria:DatePicker {
      label: "Date Picker 4",
      block: true,
      bind : {
        value : {
          to : "view:calVal4",
          inside : data
        },
        referenceDate : {
          to : "view:calVal3",
          inside : data
        }
      }
    }/}{/macro}

{/Template}
