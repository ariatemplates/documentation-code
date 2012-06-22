{Template {
  $classpath : "ariadoc.snippets.widgets.iconbutton.Snippet",
  $hasScript: true } }

  {macro main ( )}

   ////#wgtIconButton1
        {@aria:IconButton {
	      icon: "std:confirm",
	      width: 150,
	      onclick: buttonClick,
	      block: true
	    } /}
    ////#wgtIconButton1

    ////#wgtIconButton2
        {@aria:IconButton {
	      icon: "std:confirm",
	      width: 150,
	      bind:{
	          disabled : { inside : data,
	            to : 'enableButton',
	            transform : 'aria.widgets.transform.NotTransform' }
	      },
	      onclick: buttonClick
	    } /}
    ////#wgtIconButton2

    {/macro}

{/Template}