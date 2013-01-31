Aria.interfaceDefinition({
    $classpath: "ariadoc.guides.todo.ITodoCtrl",
    $extends: "aria.templates.IModuleCtrl",

    $interface: {

        tasksLeft:  function() {},
        addTask:    function(desc) {},
        updateTask: function(desc, idx) {},
        deleteTask: function(idx) {},
        flagTask:   function(idx, done) {}

    }
});
