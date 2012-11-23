Aria.classDefinition({
    $classpath : "ariadoc.guides.mall.Data",
    $singleton : true,
    $dependencies : ["ariadoc.guides.mall.Beans", "aria.core.JsonValidator", "ariadoc.guides.mall.Random"],
    $events : {
        "dataChange" : "Raised when the data model is updated"
    },
    $constructor : function () {
        var court = {};

        aria.core.JsonValidator.normalize({
            json : court,
            beanName : "ariadoc.guides.mall.Beans.Court"
        });

        court.counters = ariadoc.guides.mall.Random.generateCounters(10);
        court.slots = ariadoc.guides.mall.Random.generateSlots(10);

        this.internalData = court;
    },
    $prototype : {
        getViewData : function () {
            var data = this.internalData;

            // Recursive listener on the datamodel
            aria.utils.Json.addListener(data, null, {
                fn : this.stateChange,
                scope : this
            }, false, true);

            return data;
        },

        stateChange : function (change) {
            var counter = change.dataHolder;

            this.$raiseEvent("dataChange");
        }
    }
});