{Template {
    $classpath : "snippets.templates.macros.MyTemplate",
    $macrolibs : {
        mathLib : "snippets.templates.macros.MathLib",
        otherLib : "snippets.templates.macros.MyLib"
    }
}}

    {macro main ( )}
        Let' s multiply 2 by 5 . <br />
        {call mathLib.printMult ( 5 , 2 ) /}
    {/macro}

{/Template}
