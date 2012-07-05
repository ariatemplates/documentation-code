{Template {
  $classpath : 'samples.utils.validators.group.Groups'
}}

{var titleMessage = null /}

  {macro main()}
      <h2>Validator Groups</h2>
      The first name and last name fields validators are a member of group 1, and the phone number and email address fields validators are a member of group 2.
      <br>By clicking on one of the buttons below the associated group will be validated.
      {@aria:ErrorList {
        width: 650,
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
        width: 650,
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
        <br/>
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
          label: "Validate Group1",
          onclick: {
            fn : "submit",
            scope : moduleCtrl,
            args : ["group1"]
          }
        }/}
        {@aria:Button {
          label: "Validate Group2",
          onclick: {
            fn : "submit",
            scope : moduleCtrl,
            args : ["group2"]
          }
        }/}
        {@aria:Button {
          label: "Validate All",
          onclick: {
            fn : "submit",
            scope : moduleCtrl
          }
        }/}
  {/macro}
{/Template}





