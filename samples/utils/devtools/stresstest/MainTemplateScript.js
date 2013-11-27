Aria.tplScriptDefinition({
    $classpath : "samples.utils.devtools.stresstest.MainTemplateScript",
    $dependencies : ["aria.ext.StressCss"],
    $prototype : {
        startTest : function () {
            aria.ext.StressCss.stressTest(this.$json.removeMetadata(this.data));
        }
    }
});
