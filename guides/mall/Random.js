Aria.classDefinition({
    $classpath : "ariadoc.guides.mall.Random",
    $singleton : true,
    $dependencies : ["ariadoc.guides.mall.Beans"],
    $prototype : {
        types : ["thai", "french", "italian", "pizza", "fast food", "chinese", "japanese"],

        bool : function () {
            return Math.random() > 0.5;
        },

        integer : function () {
            return Math.floor(Math.random() * 10) + 1;
        },

        type : function () {
            return this.types[Math.floor(Math.random() * this.types.length) % this.types.length];
        },

        generateCounters : function (size) {
            var counters = [];

            for (var i = 0; i < size; i += 1) {
                var counter = {};
                aria.core.JsonValidator.normalize({
                    json : counter,
                    beanName : "ariadoc.guides.mall.Beans.Counter"
                });

                counter.open = this.bool();
                counter.type = this.type();
                counter.owners = this.integer();
                counter.employees = this.integer();

                counter.people = counter.owners + counter.employees;

                counters.push(counter);
            }

            return counters;
        },

        generateSlots : function (count) {
            var slots = [];

            for (var i = 0; i < count; i += 1) {
                var slot = {};
                aria.core.JsonValidator.normalize({
                    json : slot,
                    beanName : "ariadoc.guides.mall.Beans.Slot"
                });
                slot.position = i;

                slots.push(slot);
            }

            for (var i = 0; i < count; i += 1) {
                var next = i + 1;
                if (next % (count / 2) !== 0) {
                    // next one on new line
                    slots[i].neighbours.push(slots[next]);
                }

                var prev = i - 1;
                if (i % (count / 2) !== 0) {
                    // this is on new line
                    slots[i].neighbours.push(slots[prev]);
                }

                var topBottom = (i + (count / 2)) % count;
                // just because it's on two lines
                slots[i].neighbours.push(slots[topBottom]);
            }

            return slots;
        }
    }
})