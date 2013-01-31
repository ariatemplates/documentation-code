{Template {
    $classpath : "snippets.templates.macros.MyOtherTemplate",
    $macrolibs : {
        myLib : "snippets.templates.macros.MyLib"
    }
}}

    {macro main ( )}
        The following lines both print "script says hello!"
        {call myLib.libHello()/}
        ${myLib.scriptHello()}
    {/macro}

{/Template}
