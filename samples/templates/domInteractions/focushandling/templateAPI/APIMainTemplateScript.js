/**
 * TODOC
 * @class samples.templates.focushandling.refocus.APIMainTemplateScript
 */
Aria.tplScriptDefinition({
    $classpath : 'samples.templates.domInteractions.focushandling.templateAPI.APIMainTemplateScript',
    $prototype : {
        /**
         * Refreshes all templates and widgets.
         */
        refresh : function () {
            aria.core.Timer.addCallback({
                fn : this.$refresh,
                scope : this,
                delay : 2000
            });
        },
        /**
         * Gets the element that is currently in focus and retrieves the widget and template ID for the element.
         */
        $beforeRefresh : function () {
            this.$setFocusedWidget();
        },
        /**
         * Sets the focus to the template containing the widget that needs focus.
         */
        $afterRefresh : function () {
            this.$focus(this.$getFocusedWidget());
        }
    }
});
