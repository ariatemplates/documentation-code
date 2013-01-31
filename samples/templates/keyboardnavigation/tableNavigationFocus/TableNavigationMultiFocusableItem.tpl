{Template {
    $classpath:'samples.templates.keyboardnavigation.tableNavigationFocus.TableNavigationMultiFocusableItem'
}}
{macro main()}
    <p>This table and the widgets can be navigated with the keyboard only. You must use the arrows with the CTRL modifier.</p>

         {section {
            "id" : "mySection",
            "tableNav" : {
                ctrl:true
            }
         }}
            <fieldset>
                <legend>Section with table navigation</legend>
                {@aria:TextField {label:"Destination", id:"-1", block:true, labelWidth : 200, helptext: "first focus here"}/}

                <table cellspacing="0" cellpadding="0" style="border:#4776A7 solid 1px;">
                    <tr style="background-color : #4776A7;color:white;">
                        <th style="padding:5px; border-right: solid 1px white;">Choose</th>
                        <th style="padding:5px; border-right: solid 1px white;">Index</th>
                        <th style="padding:5px; border-right: solid 1px white;">Options</th>
                        <th style="padding:5px; border-right: solid 1px white;">Comments</th>
                        <th style="padding:5px">Price</th>
                    </tr>
                    {for var i=0; i<5; i++}

                    <tr style="{if i%2 == 0} background-color : #EFF9FF;{else/}background-color : #ffffff;{/if}">
                        <td>{@aria:CheckBox { }/}</td>
                        <td>${i + 1}</td>
                        <td>{@aria:CheckBox { label: "Option1"}/}&nbsp;{@aria:CheckBox { label: "Option2"}/}&nbsp;{@aria:CheckBox { label: "Option2"}/}</td>
                        <td>{@aria:TextField {}/}</td>
                        <td><a href="">102.00</a></td>
                    </tr>

                    {/for}
                </table>
            </fieldset>
        {/section}

{/macro}
{/Template}