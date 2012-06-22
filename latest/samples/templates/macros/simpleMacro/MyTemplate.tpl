{Template {
    $classpath: "ariadoc.samples.templates.macros.simpleMacro.MyTemplate",
    $macrolibs : {
    	libOne: "ariadoc.samples.templates.macros.simpleMacro.Lib1",
    	libTwo: "ariadoc.samples.templates.macros.simpleMacro.Lib2"
    }
}}
	{var name = "Miles" /}
	
    {macro main()}
		{call libOne.sayHello(name) /} <br/>
		{call libTwo.shoutHello(name) /}
    {/macro}
	
{/Template}
