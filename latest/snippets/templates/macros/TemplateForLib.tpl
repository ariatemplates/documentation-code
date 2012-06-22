{Template {
	$classpath : "my.simple.TemplateForLib",
	$macrolibs : {
		myLib : "my.simple.lib" }
} }

	{macro main ( )}
		The following lines both print "script says hello!" .
		{ call myLib.libHello ( ) /}
		${ myLib.scriptHello() /}
	{/macro}

{/Template}
