{Template {
    $classpath : 'samples.widgets.datepicker.validation.TemplateDatePickerValidation',
    $hasScript : true,
    $css:['samples.widgets.datepicker.validation.TemplateDatePickerValidationCSS']
}}
    {macro main()}
    <p>This sample contains two Date Pickers the first has validation switched off by setting directOnBlurValidation : false and the second, for comparison, has validation switched on.</p>
    <br><br>
    <b>Scenarios:</b>
    <br>
    <div class="templateContainer">
        <ul>
            <li>- Type "123" in DatePicker 1 and click on DatePicker 2: no validation should occur.</li>
            <li>- Type "aaa" in DatePicker 1 and click the "Clear" button: the value should be reset.</li>
            <li>- Type "bbb" in DatePicker 1 and click on the "Refresh" button: "bbb" should still be displayed.</li>
            <li>
                <br>
                <strong>Without Validation:</strong>
                <br><br>
                {section 'datepickers'}
                    {@aria:DatePicker {
                        id : "Date1",
                        label : "DatePicker 1",
                    bind : {
                        value : {
                            inside : data,
                            to : "value1"
                        },
                        invalidText : {
                            inside : data,
                            to : "invalidDate1"
                        }
                    },
                    directOnBlurValidation : false
                    }/}
                    <br><br>
                    <strong>With Validation:</strong>
                    <br><br>
                    {@aria:DatePicker {
                        id : "Date2",
                        label : "DatePicker 2",
                    bind : {
                        value : {
                            inside : data,
                            to : "value2"
                        },
                        invalidText : {
                            inside : data,
                            to : "invalidDate2"
                        }
                    }
                    }/}
                    <br><br>
                    {@aria:Button {
                            id : "Button1",
                        label : "Clear",
                        onclick : "clear"
                    }/}
                    {@aria:Button {
                            id : "Button2",
                        label : "Refresh",
                        onclick : "refresh"
                    }/}
                {/section}
            </li>
        </div>
    {/macro}

{/Template}
