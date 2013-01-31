Aria.tplScriptDefinition({
    $classpath: "ariadoc.guides.todo.view.TodoScript",

    $prototype: {

        addTask: function(e) {
            if (e.keyCode==e.KC_ENTER && (v=e.target.getValue()).length>0) {
                this.moduleCtrl.addTask(v);
                e.target.setValue("");
            }
        },

        clearTask: function(e, el) {
            this.moduleCtrl.deleteTask(el.index);
        },

        clearTasks: function(e) {
            var t=this.data.tasks;
            for (var i=t.length-1; i>=0; i--) {
                if (t[i].done) this.moduleCtrl.deleteTask(i);
            }
        },

        clickTask: function(e, el) {
        	if (e.target.tagName.toUpperCase()=="INPUT") {
                this.moduleCtrl.flagTask(el.index, !el.item.done);
        	}
        	else {
                aria.utils.Json.inject({edit:true}, el.item);
                // the following is a tiny hack to put focus on the field and cursor at the end
                var tf = this.$getElementById("editBox");
                tf.focus();
                tf.setValue(el.item.desc);
        	}
        },

        editTask: function(e, el) {
        	if (e.keyCode==e.KC_ENTER) this.leaveEdit(e, el);
        },

        leaveEdit: function(e, el) {
            // We use the RefreshManager stop() and resume() to avoid an extra refresh when the value changes
            aria.templates.RefreshManager.stop();
            this.moduleCtrl.updateTask(this.$getElementById("editBox").getValue(), el.index);
            aria.utils.Json.deleteKey(el.item, "edit");
            aria.templates.RefreshManager.resume();
        },

        markAll: function(e) {
        	var attr = this.$getElementById("markAll").getAttribute("checked");
        	// The value of "checked" is the one it had at the time of drawing (i.e. before the click event)!
            // This is why values are inverted.
        	var checked = (attr && attr.length>0 ? false : true);
        	for (var i=0; i<this.data.tasks.length; i++)
                this.moduleCtrl.flagTask(i, checked);
        }

    }
});
