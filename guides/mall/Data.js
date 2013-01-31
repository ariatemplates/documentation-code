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

            if (change.dataName === "assignedTo") {
                if (counter.slot) {
                    this.moveCounter(counter, change.oldValue, change.newValue);
                } else {
                    this.assignCounter(counter, change.newValue);
                }
            } else if ("owners.employees.people".indexOf(change.dataName) !== -1) {
                counter.people = counter.owners + counter.employees;

                if (counter.slot) {
                    // because contraints might have changed
                    this.updateSlot(counter.slot);
                }
            } else {
                if (counter.slot) {
                    this.updateSlot(counter.slot);
                }
            }

            this.$raiseEvent("dataChange");
        },

        assignCounter : function (counter, to) {
            this.freeSlot(to);

            counter.assignedTo = to;
            counter.slot = this.internalData.slots[to];
            counter.slot.counter = counter;

            // Notify neighbours
            this.updateSlot(counter.slot);
        },

        freeSlot : function (position) {
            var slot = this.internalData.slots[position];
            slot.usable = true;

            var oldCounter = slot.counter;

            if (oldCounter) {
                oldCounter.assignedTo = -1;
                oldCounter.slot = null;
            }

            this.internalData.slots[position].counter = null;
        },

        updateSlot : function (slot) {
            for (var i = 0; i < slot.neighbours.length; i += 1) {
                var near = slot.neighbours[i];

                if (near.counter) {
                    if (this.hasCostraints(slot.counter, near.counter)) {
                        // Remove it
                        this.freeSlot(near.position);
                        slot.usable = false;
                    }
                }
            }
        },

        hasCostraints : function (newCounter, counter) {
            // Closed counters cannot have neighbours
            if (!counter.open) {
                for (var i = 0; i < counter.slot.neighbours.length; i += 1) {
                    var near = counter.slot.neighbours[i];

                    if (near.counter) {
                        return true;
                    }
                }
            } else if (newCounter && !newCounter.open) {
                var newHasneighbours = false;
                for (var i = 0; i < newCounter.slot.neighbours.length; i += 1) {
                    var near = newCounter.slot.neighbours[i];

                    if (near.counter) {
                        newHasneighbours = true;
                    }
                    this.freeSlot(i);
                }
                return newHasneighbours;
            }
            // No pizza shop near counters with >10 people
            if (counter.type === "pizza") {
                for (var i = 0; i < counter.slot.neighbours.length; i += 1) {
                    var near = counter.slot.neighbours[i];

                    if (near.counter && near.counter.people > 10) {
                        return true;
                    }
                }
            }

            return false;
        },

        moveCounter : function (counter, from, to) {
            this.freeSlot(from);
            if (to !== -1) {
                this.assignCounter(counter, to);
            }
        }
    }
});