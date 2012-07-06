////#first
// Template A script
Aria.tplScriptDefinition({
    $classpath : "snippets.templates.domInteractions.TemplateAScript",
    $prototype : {
        $displayReady : function () {
            this.$focus("thisIsTemplateC");
        },
        ////#first
        ////#afterRefresh
        $afterRefresh : function () {
            this.$focus("thisIsTemplateC");
        }
        ////#afterRefresh
        ////#first
    }
});
////#first
