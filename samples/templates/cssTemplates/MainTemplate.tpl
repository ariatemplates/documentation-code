{Template {
  $classpath: "samples.templates.cssTemplates.MainTemplate",
  $hasScript : true,
  $css : ["samples.templates.cssTemplates.FirstCss"]
}}

    {macro main ()}
        <div class="mainDiv">
            <h1>Shopping list</h1>
            {foreach note in data.notes}
                {section {
                    id : "section_" + note_index,
                    macro : {
                        name : "displayNote",
                        args : [note_index]
                    },
                    attributes : {
                        classList : [
                            "shoppingNote"
                        ]
                    },
                    type : "DIV"
                } /}
            {/foreach}
        </div>
    {/macro}


    {macro displayNote (noteKey)}
        {var note = data.notes[noteKey] /}
        <h2>${noteKey}</h2>
        <ul>
        {foreach item inArray note}
            <li class="shoppingItem{if item.taken}Taken{/if}"
                {id noteKey + item_index /}
                {on click {fn : changeClass, args : {id : noteKey + item_index}} /}
            > ${item.name} </li>
        {/foreach}
        </ul>
    {/macro}

{/Template}