Aria.tplScriptDefinition({
    $classpath : "snippets.templates.domInteractions.ProcIndTemplateScript",
    $prototype : {

        mySnippetFunction : function () {
            ////#procIndOne
            // Show a loading indicator
            var mySpan = this.$getElementById("mySpan");
            mySpan.setProcessingIndicator(true, "Loading, please wait ...");

            // Hide it
            mySpan.setProcessingIndicator(false);
            ////#procIndOne
            ////#procIndTwo
            // Show a loading indicator
            var mySection = this.$getElementById("mySection");
            mySection.setProcessingIndicator(true, "Loading, please wait ...");

            // Hide it
            mySection.setProcessingIndicator(false);
            ////#procIndTwo
            ////#procIndThree
            // Show a loading indicator
            this.$json.setValue(this.data, "loading", true);

            // Hide it
            this.$json.setValue(this.data, "loading", false);
            ////#procIndThree
            ////#procIndFour
            // Show a loading indicator outside of Aria Template
            aria.utils.DomOverlay.create(legacyApp, "Loading, please wait ...");
            // or around the whole page
            aria.utils.DomOverlay.create(document.body, "Loading, please wait ...");

            // Hide it
            aria.utils.DomOverlay.detachFrom(legacyApp);
            aria.utils.DomOverlay.detachFrom(document.body);
            ////#procIndFour

        }

    }
});