/**
 * TODOC
 * @class samples.features.refresh.TemplateRefreshScript
 */
Aria.tplScriptDefinition({
    $classpath : 'samples.features.refresh.TemplateRefreshScript',
    $prototype : {

        $dataReady : function () {
            this.data = {
                counter1 : 2,
                counter2 : 5,
                counter3 : 9
            };

        },

        manualRefresh : function () {
            this.data.counter1++;
            this.$refresh({
                section : "manualRefresh"
            });
        },

        widgetRefresh : function () {
            aria.utils.Json.setValue(this.data, "counter2", parseInt(this.data.counter2, 10) + 1);
        },

        automaticRefresh : function () {
            this.$json.setValue(this.data, "counter3", this.data.counter3 + 1);
        }

    }
});