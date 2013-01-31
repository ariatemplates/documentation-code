{Template {
  $classpath : 'samples.utils.validators.event.Events',
  $css : ["samples.utils.validators.event.CSS"]
}}

{var titleMessage = null /}

  {macro main()}
      <h2>Validator Events</h2>
        - The text field on the left is bound to a single, mandatory validator.  The text field on the right is bound to a multiple validator, containing a mandatory validator.<br/>
        - To trigger an error no value is required, simply trigger the blur on the field (depending on the scenario) or press the submit button.
        <br/><br/>
        <div class="title">
          In this scenario both fields will validate onblur and also onsubmit.
        </div>
        <table>
          <tbody>
            <tr>
              <td>
                {@aria:TextField {
                  label : "Single Validator: onblur",
                  labelWidth : 150,
                  bind: {
                    value: {
                      to: "singleValidatorOnBlur1",
                      inside: data
                    }
                  }
                }/}
                </td><td>
                {@aria:TextField {
                  label : "Multiple Validator: onblur (child validator: onblur)",
                  labelWidth : 310,
                  bind: {
                    value: {
                      to: "multipleValidatorOnBlurChildValidatorOnBlur",
                      inside: data
                    }
                  }
                }/}
              </td>
            </tr>
          </tbody>
        </table>
        <br/><br/>
        <div class="title">
          In this scenario the single validator field will validate onblur and onsubmit, the multiple validator field will validate onsubmit.
        </div>
        <table>
          <tbody>
            <tr>
              <td>
                {@aria:TextField {
                  label : "Single Validator: onblur",
                  labelWidth : 150,
                  bind: {
                    value: {
                      to: "singleValidatorOnBlur2",
                      inside: data
                    }
                  }
                }/}
                </td><td>
                {@aria:TextField {
                  label : "Multiple Validator: onsubmit (child validator: onblur)",
                  labelWidth : 310,
                  bind: {
                    value: {
                      to: "multipleValidatorOnSubmitChildValidatorOnBlur",
                      inside: data
                    }
                  }
                }/}
              </td>
            </tr>
          </tbody>
        </table>
        <br/><br/>
        <div class="title">
          In this scenario both fields will validate onsubmit.
        </div>
        <table>
          <tbody>
            <tr>
              <td>
                {@aria:TextField {
                  label : "Single Validator: onsubmit",
                  labelWidth : 150,
                  bind: {
                    value: {
                      to: "singleValidatorOnSubmit",
                      inside: data
                    }
                  }
                }/}
                </td><td>
                {@aria:TextField {
                  label : "Multiple Validator: onblur (child validator: onsubmit)",
                  labelWidth : 310,
                  bind: {
                    value: {
                      to: "multipleValidatorOnBlurChildValidatorOnSubmit",
                      inside: data
                    }
                  }
                }/}
              </td>
            </tr>
          </tbody>
        </table>
        <br/><br/>
        {@aria:Button {
          label: "Submit",
          onclick: {
            fn : "submit",
            scope : moduleCtrl
          }
        }/}
  {/macro}
{/Template}





