Aria.tplScriptDefinition({
    $classpath : "ariadoc.guides.mall.MainScript",
    $prototype : {
        buildOptions : function () {
            var options = [{
                        value : "" + -1,
                        label : "Select"
                    }];

            for (var i = 0; i < 10; i += 1) {
                options.push({
                    value : "" + i,
                    label : "Slot " + i
                });
            }

            return options;
        },

        onModuleEvent : function (evt) {
            if (evt.name === "dataChange") {
                this.$refresh();
            }
        }
    }
})