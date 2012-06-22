/**
 * @class ariadoc.snippets.templates.refresh.RefreshScript
 */
Aria.tplScriptDefinition({
	$classpath : 'ariadoc.snippets.templates.refresh.RefreshScript',
	$prototype : {

        $dataReady : function() {
            this.data = {};
//            this.data = {
//                myFirstValue : "",
//                mySecondValue : ""
//            };
        },

		snippetFunction : function () {
			////#refreshOne
			this.$refresh({
				outputSection : "mySectionId"
			});
			////#refreshOne
			////#refreshTwo
			this.$refresh({
				outputSection : "mySectionId",
				macro : {
					name : "mySectionMacro",
					args : [4]
				}
			});
			////#refreshTwo
      ////#refreshThree
      this.$json.setValue(this.data.myContainer["myFirstValue"], "myKey", "newValue");
      ////#refreshThree
      ////#refreshFour
      this.$json.setValue(this.data.myContainer["mySecondValue"], "myKey", "newValue");
      ////#refreshFour
      ////#refreshFive
      this.$json.setValue(this.data.myContainer, "mySecondValue", {"myKey" : "newValue"});
      ////#refreshFive
			////#stopResumeOne
      aria.templates.RefreshManager.stop();
      aria.templates.RefreshManager.resume();
      ////#stopResumeOne
      ////#stopResumeTwo
      aria.templates.RefreshManager.stop();
      this.$json.setValue(this.data.myContainer, "keyOne", "newValueOne");
      this.$json.setValue(this.data.myContainer, "keyTwo", "newValueTwo");
      this.$json.setValue(this.data.myContainer, "keyThree", "newValueThree");
      aria.templates.RefreshManager.resume();
      ////#stopResumeTwo

		}

	}
});