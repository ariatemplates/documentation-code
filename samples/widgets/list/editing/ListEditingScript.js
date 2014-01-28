Aria.tplScriptDefinition({
	$classpath : "samples.widgets.list.editing.ListEditingScript",
	$prototype : {
		addComposer: function() {
            if (this.data.indexOthers < 5) {
                aria.utils.Json.add(this.data.italian, this.data.others[this.data.indexOthers]);
                this.data.indexOthers++;
            }
        },
        removeComposer : function() {
            if (this.data.indexOthers > 0) {
                aria.utils.Json.removeAt(this.data.italian, this.data.indexOthers + 2);
                this.data.indexOthers--;
            }
        }
	}
});