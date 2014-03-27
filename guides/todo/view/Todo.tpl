{Template {
    $classpath: "ariadoc.guides.todo.view.Todo",
    $hasScript: true
}}

    {macro main()}

        <div id="todo-app">

            <h1>Todos</h1>

            <input type="text" placeholder="What needs to be done?" class="todo-input" {on keydown {fn:"addTask", scope:this}/} />

            {call listControl("markall")/}

	        {repeater {
	            id: "tasklist",
	            content: data.tasks,
	            type: "ul",
	            childSections: {
	                id: "task",
	                macro: "taskline",
	                type: "li",
	                bindRefreshTo: function(el) { return [ {inside:el.item} ] }
	            }
	        }/}

            {call listControl("status")/}

        </div>

    {/macro}

    /**
     * listControl
     * --
     * outputs list controls
     * if type=markall the Mark All As bar is used
     * if type=status  the status bar is used
     */
    {macro listControl(type)}
        {section {
            id: type,
            type: "div",
            attributes: {
                classList: ["todo-"+type]
            },
            bindRefreshTo: [ {to:"tasks", inside:data} ],
            macro: {
            	name: "listControlContent",
            	args: [type]
            }
        }/}
    {/macro}

    /**
     * taskLine
     * --
     * outputs a line in the list of tasks
     */
    {macro taskline(el)}
		{if (el.item.edit)}
            <input type="text" class="editBox" {id "editBox"/} {on blur {fn:"leaveEdit", scope:this, args:el}/} {on keydown {fn:"editTask", scope:this, args:el}/} />
        {else/}
	        <span {on click {fn:"clickTask", scope:this, args:el}/} {if (el.item.done)}class="todo-done"{/if}>
	           <input type="checkbox" {if (el.item.done)}checked{/if} />
	           ${el.item.desc}
	           <a class="remove" title="Remove this task" {on click {fn:"clearTask", scope:this, args:el}/}></a>
	        </span>
        {/if}
    {/macro}

    {macro listControlContent(type)}
        {if (data.tasks.length>0)}
            {var t=this.moduleCtrl.tasksLeft()/}

            {if (type=="markall")}
                <label>
                    <input type="checkbox" {id "markAll"/} {if (t==0)}checked="true"{/if} {on click markAll/} />Mark all as completed
                </label>

            {elseif (type=="status")/}
                <strong>${t}</strong> ${t>1 ? 'tasks':'task'} left.
                {var c=data.tasks.length-t/}
                {if (c>0)}
                    <a class="todo-clear" {on click {fn:"clearTasks", scope:this}/}>
                        Clear ${c} completed ${c>1 ? 'tasks':'task'}
                    </a>
                {/if}
            {/if}

        {/if}
    {/macro}

{/Template}
