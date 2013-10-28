{Template {
	$classpath : "samples.widgets.touch.dialog.DialogTpl",
	$wlibs : {
		touch : "aria.touch.widgets.TouchWidgetLib"
	},
	$hasScript : true
}}

{macro main()}

  {var data = {dialogVisible : false} /} 
  {@touch:Dialog{
  	bind :{
  		  isVisible : {
            inside : data,
            to : "dialogVisible"
          }
  	},  	
  	animateIn: "slide right",
  	animateOut:"slide left",
  	macro: "myMacro",
    absolutePosition : {
        top : 400,
        left : 400
    }
  }/}
 
  {@aria:Button{
		label:"Display Dialog",
		onclick : {fn : displayDialog}
		}
  /}
{/macro}


{macro myMacro()}

	<span style="display:block; margin-top: 20px; margin-left: 10px; margin-right: 10px; height: 40px;">		
		This sample demonstrates the use of a HTML Dialog widget with animations that are typically associated to touch capable devices.		
		To close me, simply tap outside of the dialogue.		
	</span>

{/macro}


{/Template}
