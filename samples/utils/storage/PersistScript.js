Aria.tplScriptDefinition({
    $classpath : "samples.utils.storage.PersistScript",
    $dependencies : ["aria.storage.LocalStorage"],
    $destructor : function () {
        if (this.storage) {
            this.storage.$dispose();
        }
        this.storage = null;
    },
    $prototype : {
        $dataReady : function () {
            try {
                this.storage = new aria.storage.LocalStorage();

                this.storage.$on({
                    "change" : {
                        fn : this.onStorageChange,
                        scope : this
                    }
                });
            } catch (ex) {
                this.$json.setValue(this.data, "error", ex.message);
            }
        },

        /**
         * Save the datamodel in localStorage, note that the datamodel is an object, not a string. It's going to be
         * serialized.
         */
        save : function () {
            this.storage.setItem("userInput", this.data);

            this.$json.setValue(this.data, "external", null);
        },

        /**
         * Load the datamodel from localStorage, note that the datamodel is an object, not a string. getItem is going to
         * give us an object
         */
        load : function () {
            var storedData = this.storage.getItem("userInput") || {};

            this.$json.setValue(this.data, "value", storedData.value);

            this.$json.setValue(this.data, "external", null);
        },

        /**
         * Clear localStorage
         */
        clear : function () {
            this.storage.clear();
            this.load();

            this.$json.setValue(this.data, "external", null);
        },

        /**
         * React to storage change
         * @param {Object} event
         */
        onStorageChange : function (event) {
            if (event.newValue == null || event.newValue.value !== this.data.value) {
                this.$json.setValue(this.data, "external", event.newValue || {
                    value : ""
                });
            }
        }
    }
});