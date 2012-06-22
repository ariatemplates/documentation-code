{Template {
	$classpath : "my.simple.Template",
	$macrolibs : {
		myLib : "my.simple.lib",
		otherLib : "my.other.lib" }
} }

	{macro main ( )}
		Let' s multiply 2 by 5 . <br />
		{ call myLib.printMult ( 5 , 2 ) /}
	{/macro}

{/Template}
