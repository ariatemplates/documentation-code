Aria.classDefinition({
    $classpath: "ariadoc.guides.todo.TodoCtrl",
    $extends: "aria.templates.ModuleCtrl",
    $implements: ["ariadoc.guides.todo.ITodoCtrl"],

    $constructor: function () {
        this.$ModuleCtrl.constructor.call(this);
        this.setData({
            tasks: (localStorage.tasklist ? JSON.parse(localStorage.tasklist) : [])
        });
        this.json.addListener(this._data, "tasks", {fn:this.__saveTasks, scope:this}, false, true)
    },

    $prototype: {
        $publicInterfaceName: "ariadoc.guides.todo.ITodoCtrl",

        __saveTasks: function() {
            localStorage.setItem("tasklist", JSON.stringify(this.json.removeMetadata(this._data.tasks)));
        },

        tasksLeft: function() {
            var n=0, t=this._data.tasks;
            for (var i=0; i<t.length; i++) n+=(t[i].done?0:1);
            return n;
        },

        addTask: function(desc) {
            this.json.add(this._data.tasks, {done:false, desc:desc});
        },

        updateTask: function(desc, idx) {
            this.json.inject({desc:desc}, this._data.tasks[idx]);
        },

        deleteTask: function(idx) {
            this.json.removeAt(this._data.tasks, idx);
        },

        flagTask: function(idx, done) {
            this.json.setValue(this._data.tasks[idx], "done", done);
        }

    }
});
