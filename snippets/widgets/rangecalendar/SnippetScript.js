Aria.tplScriptDefinition({
    $classpath : "snippets.widgets.rangecalendar.SnippetScript",
    $prototype : {
        ////#onDateSelect
        onDateSelectHandler : function (event) {
            // This function is called each time the user selects a date
            // (either by mouse or keyboard)
            var jsDate = event.date;

            // Do something with the date
            // ...

            // Prevents the default behavior (which is to
            // assign alternatively fromDate and toDate):
            event.cancelDefault = true;
        }
        ////#onDateSelect
    }
});