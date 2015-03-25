Aria.classDefinition({
    $classpath: "snippets.utils.validators.Validators",

    ////#dependencies
    $dependencies: [
        'aria.utils.validators.Email',
        'aria.utils.validators.Phone',
        'aria.utils.validators.Alpha',
        'aria.utils.validators.AlphaInternational',
        'aria.utils.validators.AlphaNum',
        'aria.utils.validators.MultipleValidator'
    ]
    ////#dependencies
    ,

    $prototype: {

        dummy : function() {


            ////#instantiate
            var myMandatoryValidator = new aria.utils.validators.Mandatory("The first name is a required field using a mandatory validator.");
            ////#instantiate

            ////#setEnvironment
            aria.core.AppEnvironment.setEnvironment({
                validatorMessages : {
                    AlphaNum : "The string inserted has to be alphanumeric.",
                    Mandatory : "The first name is a required field using a mandatory validator.",
                    Email : "The text you typed does not correspond to an email address."
                }
            });
            ////#setEnvironment

            ////#datamodel
            this._data = {
                sampleType : "ard",
                firstName : "",
                lastName : "",
                phoneNumber : "",
                email : "",
                errorMessages : []
            };
            ////#datamodel

            ////#setvalidators
            // add single validator to data model
            aria.utils.Data.setValidator(this._data, "firstName", new aria.utils.validators.AlphaInternational());
            aria.utils.Data.setValidator(this._data, "lastName", new aria.utils.validators.AlphaInternational());
            aria.utils.Data.setValidator(this._data, "email", new aria.utils.validators.Email());
            aria.utils.Data.setValidator(this._data, "phoneNumber", new aria.utils.validators.Phone());
            ////#setvalidators

            ////#eventsSingle
            aria.utils.Data.setValidator(this._data, "firstName", new aria.utils.validators.Mandatory(), null, "onblur");
            ////#eventsSingle

            ////#eventsMultiple1
            var myMultipleValidator = new aria.utils.validators.MultipleValidator();
            myMultipleValidator.add(new aria.utils.validators.AlphaInternational())
            ////#eventsMultiple1

            ////#eventsMultiple2
            myMultipleValidator.add({
                validator : new aria.utils.validators.Mandatory("The first name is a required field using a mandatory validator."),
                event : "onblur"
            });
            ////#eventsMultiple2

            ////#eventsMultiple3
            myMultipleValidator.add(
                {
                    validator : new aria.utils.validators.Mandatory("The first name is a required field using a mandatory validator."),
                    event : "onblur"
                },
                new aria.utils.validators.AlphaInternational()
            );
            ////#eventsMultiple3

            ////#groupsSingle1
            aria.utils.Data.setValidator(this._data, "firstName", new aria.utils.validators.Mandatory("Mandatory field."),["mandatory"]);
            ////#groupsSingle1

            ////#groupsSingle2
            aria.utils.Data.validateValue(this._data,"firstName", messages, ["mandatory"]);
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
                validator : new aria.utils.validators.Mandatory("The first name is a required field using a mandatory validator."),
                groups : ["group1"]
            });
            ////#groupsMultiple4

            ////#groupsMultiple5
            var myMultipleValidator = new aria.utils.validators.MultipleValidator();
            myMultipleValidator.add(
                {
                    validator : new aria.utils.validators.Mandatory("The first name is a required field using a mandatory validator."),
                    groups : ["group1"]
                },
                new aria.utils.validators.AlphaInternational()
            );
            ////#groupsMultiple5

        },

        ////#submit
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
        }
        ////#submit


    }
});
