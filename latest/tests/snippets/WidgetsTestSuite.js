Aria.classDefinition({
    $classpath: "tests.snippets.WidgetsTestSuite",
    $extends: "aria.jsunit.TestSuite",

    $constructor: function () {
    	this.$TestSuite.constructor.call(this);

        this.addTests(
            "tests.snippets.widgets.Autocomplete",
            "tests.snippets.widgets.Button",
            "tests.snippets.widgets.Calendar",
            "tests.snippets.widgets.Checkbox",
            "tests.snippets.widgets.Datefield",
            "tests.snippets.widgets.Datepicker",
            "tests.snippets.widgets.Dialog",
            "tests.snippets.widgets.Div",
            "tests.snippets.widgets.Errorlist",
            "tests.snippets.widgets.Fieldset",
            "tests.snippets.widgets.Gauge",
            "tests.snippets.widgets.Icon",
            "tests.snippets.widgets.Iconbutton",
            "tests.snippets.widgets.Link",
            "tests.snippets.widgets.List",
            "tests.snippets.widgets.Multiselect",
            "tests.snippets.widgets.Numberfield",
            "tests.snippets.widgets.Passwordfield",
            "tests.snippets.widgets.Radiobutton",
            "tests.snippets.widgets.Select",
            "tests.snippets.widgets.Selectbox",
            "tests.snippets.widgets.Sortindicator",
            "tests.snippets.widgets.Tab",
            "tests.snippets.widgets.Tabpanel",
            "tests.snippets.widgets.Template",
            "tests.snippets.widgets.Text",
            "tests.snippets.widgets.Textfield",
            "tests.snippets.widgets.Timefield",
            "tests.snippets.widgets.Tooltip"
        );
    }
})
