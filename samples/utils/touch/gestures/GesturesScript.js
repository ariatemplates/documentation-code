Aria.tplScriptDefinition({
    $classpath : 'samples.utils.touch.gestures.GesturesScript',

    $constructor : function () {
        this.inData = {};
        this.inData.messages = [];
        this.inData.messagesCount = 0;
    },

    $prototype : {
        touchHandler : function (event) {
            if (event.type == "dragstart" || event.type == "swipemove" || event.type == "pinchmove" || event.type == "dragmove") {
                event.preventDefault();
            }
            var msg = event.duration + "ms - " + event.type;
            this.inData.messages.push(msg);
            this.$json.setValue(this.inData, "messagesCount", this.inData.messages.length);
        },

        clearConsole: function() {
            this.inData.messages = [];
            this.$json.setValue(this.inData, "messagesCount", 0);
        }
    }
});