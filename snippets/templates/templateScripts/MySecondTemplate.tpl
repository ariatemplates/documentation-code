{Template {
    $classpath : "snippets.templates.templateScripts.MySecondTemplate",
    $hasScript : true
}}

    {var myGlobalTemplateVar = "myString" /}

    {macro main ()}
        ${printMessage()}
    {/macro}

{/Template}