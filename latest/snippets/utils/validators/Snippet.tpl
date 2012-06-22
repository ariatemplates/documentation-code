{Template {
  $classpath: "ariadoc.snippets.utils.validators.Snippet",
  $hasScript : false
}}

  {macro main()}

    ////#dependencies
      $dependencies : ['aria.utils.validators.Email', 'aria.utils.validators.Phone', 'aria.utils.validators.Alpha',
     'aria.utils.validators.AlphaInternational', 'aria.utils.validators.AlphaNum', 'aria.utils.validators.MultipleValidator', ...]
    ////#dependencies

    ////#getvalidator
      '''aria.utils.Data.getValidator(dataHolder,dataName)'''
      gets a validator from the data model
    ////#getvalidator

    ////#setvalidator
      '''aria.utils.Data.setValidator(dataHolder,dataName,validator)'''
      sets a validator into the data model
    ////#setvalidator

    ////#validatevalue
      '''aria.utils.Data.validateValue(dataHolder,dataName,messages)'''
      will validate a value in the data model against the validators associated to this value
    ////#validatevalue

    ////#validatemodel
      '''aria.utils.Data.validateModel(dataHolder,messages)'''
      will validate an object within the data model, including all fields values and validators associated to them
    ////#validatemodel

    ////#processmessages
      '''aria.utils.Data.processMessages(newMessages,rootData,messages,addToListOfMessages)'''
      processes an array of messages from the server and do the appropriate changes to that structure and to the data model
    ////#processmessages

    ////#createmessage
      '''aria.utils.Data.createMessage(errorMessage, localizedMessage, type, code, subMessages)'''
      creates a used by a validator or injected directly in a list of message
    ////#createmessage

    ////#addmessage
      '''aria.utils.Data.addMessage(message, messagesList, inside, to)'''
       add a message in a message list. Inside and to allows to inject this message in the datamodel as well.
    ////#addmessage

    ////#getframeworkmessage
      '''aria.utils.Data.getFrameworkMessage(dataHolder, dataName)'''
      get framework errors from the data model for a value object.
    ////#getframeworkmessage

    ////#unsetvalidator
      '''aria.utils.Data.unsetValidator(dataHolder, dataName)'''
      unset a validator in the data model.
    ////#unsetvalidator

    ////#checkgroup
      '''aria.utils.Data.checkGroup(validatorGroup, groups)'''
      checks a validation group to see if a validator is a member.
    ////#checkgroup

    ////#constructor
       ...
       $constructor : function () {
           this.$ModuleCtrl.constructor.call(this);
           this._data = {
               sampleType : "ard",
               firstName : "",
               lastName : "",
               phoneNumber : "",
               email : "",
               errorMessages : []
           };
       },
       ...
    ////#constructor

    ////#init
       ...
       init : function (arg, cb) {
           // add single validator to data model
           aria.utils.Data.setValidator(this._data, "firstName", new aria.utils.validators.AlphaInternational());
           aria.utils.Data.setValidator(this._data, "lastName", new aria.utils.validators.AlphaInternational());
           aria.utils.Data.setValidator(this._data, "email", new aria.utils.validators.Email());
           aria.utils.Data.setValidator(this._data, "phoneNumber", new aria.utils.validators.Phone());
           this.$callback(cb);
       },
       ...
    ////#init

    ////#submit
       ...
       submit : function () {
           // Prepare a message holder for the list messages that might be returned when validating the model
           var messages = {};

           // Validate the whole model here, passing the message holder
           aria.utils.Data.validateModel(this._data, messages);

           // Inject the list of messages that were returned from the validateModel method call in the data model
           // (to show errors in screen)
           this.json.setValue(this._data, "errorMessages", messages.listOfMessages);

           // Check the nbrOfE field on the message holder to see if validation succeeded or not
           if (!(messages.nbrOfE > 0)) {
               // If it did, proceed with the request to the server
               this.submitJsonRequest("submit", this.json.copy(this._data), "_onServerResponse");
           }
       },
       ...
    ////#submit

    ////#eventsSingle
      var groups;
      var validatorPkg = aria.utils.validators;
      aria.utils.Data.setValidator(this._data, "firstName", new validatorPkg.Mandatory(), groups, "onblur");
    ////#eventsSingle

    ////#eventsMultiple1
      var myMultipleValidator = new aria.utils.validators.MultipleValidator();
      myMultipleValidator.add(new validatorPkg.AlphaInternational())
    ////#eventsMultiple1

    ////#eventsMultiple2
      myMultipleValidator.add({
        validator : new validatorPkg.Mandatory("The first name is a required field using a mandatory validator."),
        event : "onblur"
    });
    ////#eventsMultiple2

    ////#eventsMultiple3
    myMultipleValidator.add({
        validator : new validatorPkg.Mandatory("The first name is a required field using a mandatory validator."),
        event : "onblur"
        },
        new validatorPkg.AlphaInternational()
    );
    ////#eventsMultiple3

    ////#groupsSingle1
      init : function (arg, cb) {
      var validatorPkg = aria.utils.validators;
      aria.utils.Data.setValidator(this._data, "firstName", new validatorPkg.Mandatory("Mandatory field."),["mandatory"]);
    ////#groupsSingle1

    ////#groupsSingle2
      submit : function () {
      var messages = {};
      aria.utils.Data.validateValue(this._data,"firstName",messages, ["mandatory"]);
    ////#groupsSingle2

    ////#groupsMultiple1
      var myMultipleValidator = new aria.utils.validators.MultipleValidator();
      aria.utils.Data.setValidator(this._data, "firstName", myMultipleValidator, ["group1"]);
    ////#groupsMultiple1

    ////#groupsMultiple2
      var myMultipleValidator = new aria.utils.validators.MultipleValidator(message, ["group1"]);
    ////#groupsMultiple2

    ////#groupsMultiple3
      myMultipleValidator.add(new validatorPkg.AlphaInternational());
    ////#groupsMultiple3

    ////#groupsMultiple4
      myMultipleValidator.add({
          validator : new validatorPkg.Mandatory("The first name is a required field using a mandatory validator."),
          groups : ["group1"]
      });
    ////#groupsMultiple4

    ////#groupsMultiple5
      var myMultipleValidator = new aria.utils.validators.MultipleValidator();
      myMultipleValidator.add({
          validator : new validatorPkg.Mandatory("The first name is a required field using a mandatory validator."),
          groups : ["group1"]
          },
          new validatorPkg.AlphaInternational()
      );
    ////#groupsMultiple5
  {/macro}

{/Template}