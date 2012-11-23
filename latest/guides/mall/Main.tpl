{Template {
    $classpath : "ariadoc.guides.mall.Main",
    $css : ["ariadoc.guides.mall.Style"],
    $hasScript : true
}}
{macro main()}
    // Slots
    <div class="court">
        {foreach slot in data.slots}
            {call slot(slot) /}

            {if slot_ct === 5}
                <div class="clear">&nbsp;</div>
            {/if}
        {/foreach}
    </div>

    <div class="clear">&nbsp;</div>

    // Counters
    {foreach counter in data.counters}
        {if !counter.slot}
            {call counter(counter) /}
        {/if}
    {/foreach}
{/macro}

{macro slot(slot)}
    <div class="slot {if !slot.usable}locked{/if}">
        Slot ${slot.position}<br>

        {if slot.counter}
            {call counter(slot.counter)/}
        {/if}
    </div>
{/macro}

{macro counter(counter)}
    {var width = 100 /}
    <div class="counter">
        {@aria:CheckBox {
            label : "Open",
            bind : {
                value : {
                    inside : counter,
                    to : "open"
                }
            },
            block : true
        }/}

        {@aria:TextField {
            label : "Type",
            readOnly : true,
            value : counter.type,
            block : true,
            labelPos : "top",
            width : width
        }/}

        {@aria:NumberField {
            label : "Owners",
            bind : {
                value : {
                    inside : counter,
                    to : "owners"
                }
            },
            block : true,
            labelPos : "top",
            width : width
        }/}

        {@aria:NumberField {
            label : "Employees",
            bind : {
                value : {
                    inside : counter,
                    to : "employees"
                }
            },
            block : true,
            labelPos : "top",
            width : width
        }/}

        {@aria:NumberField {
            label : "Total",
            bind : {
                value : {
                    inside : counter,
                    to : "people"
                }
            },
            labelPos : "top",
            width : width
        }/}

        {@aria:Select {
            label : "Slot",
            value : "" + (counter.slot ? counter.slot.position : -1),
            options : buildOptions(),
            labelPos : "top",
            width : width,
            bind : {
                value : {
                    inside : counter,
                    to : "assignedTo",
                    transform : {
                        fromWidget : function (value) {
                            return parseInt(value, 10);
                        },
                        toWidget : function (value) {
                            return "" + value;
                        }
                    }
                }
            }
        }/}
    </div>
{/macro}
{/Template}