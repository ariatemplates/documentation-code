{Template {
  $classpath : 'samples.utils.validators.basic.Basic'
}}

{var titleMessage = null /}

  {macro main()}
      <h2>Error Management</h2>
      - A Mandatory validator is used for all fields, and can be triggered onsubmit:
      <br/><br/>
      {@aria:ErrorList {
        defaultTemplate: "samples.utils.validators.basic.CustomizedErrorList",
        margins: "10 1 10 1",
        title: "Success",
        filterTypes: ['O'],
        bind: {
          messages: {
            to: "errorMessages",
            inside: data
          }
        }
      }/}
      {@aria:ErrorList {
        defaultTemplate: "samples.utils.validators.basic.CustomizedErrorList",
        margins: "10 1 10 1",
        title: "Information",
        filterTypes: ['I'],
        bind: {
          messages: {
            to: "errorMessages",
            inside: data
          }
        }
      }/}
      {@aria:ErrorList {
        defaultTemplate: "samples.utils.validators.basic.CustomizedErrorList",
        margins: "10 1 10 1",
        title: "Errors",
        filterTypes: ['E'],
        bind: {
          messages: {
            to: "errorMessages",
            inside: data
          }
        }
      }/}
      {@aria:TextField {
        label: "First Name:",
        labelWidth: 100,
        bind: {
          value: {
            to: "firstName",
            inside: data
          }
        }
      }/}
      <br/>
      {@aria:TextField {
        label: "Last Name:",
        labelWidth: 100,
        bind: {
          value: {
            to: "lastName",
            inside: data
          }
        }
      }/}
      <br/>
      {@aria:TextField {
        label: "Phone Number:",
        labelWidth: 100,
        bind: {
          value: {
            to: "phoneNumber",
            inside: data
          }
        }
      }/}
      <br/>
      {@aria:TextField {
        label: "Email Address:",
        labelWidth: 100,
        bind: {
          value: {
            to: "email",
            inside: data
          }
        }
      }/}
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





