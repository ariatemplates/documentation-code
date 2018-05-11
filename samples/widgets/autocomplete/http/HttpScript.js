Aria.tplScriptDefinition({
    $classpath: "samples.widgets.autocomplete.http.HttpScript",
    $dependencies: ["samples.widgets.autocomplete.http.WikipediaResourceHandler"],
    $constructor: function () {
        this.resHandler = new samples.widgets.autocomplete.http.WikipediaResourceHandler();
    },
    $destructor: function () {
        this.resHandler.$dispose();
        this.resHandler = null;
    }
});
