{Template {
    $classpath:'samples.templates.keyboardnavigation.tableNavigation.TableNavigation'
}}
{macro main()}
    <p>This table and the widgets can be navigated with the keyboard only. You must use the up and down arrows with the CTRL modifier.</p>

         {section {
            "id" : "mySection",
            "tableNav" : {
                ctrl:true
            }
         }}
            <fieldset>
                <legend>Section with table-like navigation</legend>
                {@aria:TextField {label:"Destination", id:"-1", block:true, labelWidth : 200, helptext: "first focus here"}/}
                <div style='display: table;'>
                    {for var i=0; i<5; i++}
	                    <div style='display: table-row;'>
	                        <div style='display: table-cell;'>
	                            {@aria:CheckBox { }/}
	                        </div>
	                        <div style='display: table-cell;'>
	                            {@aria:CheckBox { label: "Option"}/}
	                        </div>
	                        <div style='display: table-cell;'>
	                            {@aria:TextField {}/}
	                        </div>
	                    </div>
	                {/for}
                </div>
            </fieldset>
        {/section}

{/macro}
{/Template}