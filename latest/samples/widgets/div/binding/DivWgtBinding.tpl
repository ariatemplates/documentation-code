{Template {
  $classpath : 'samples.widgets.div.binding.DivWgtBinding',
  $hasScript : false } }

  {macro main ( )}
  <p>Enter the tooltip and click outside, mouseover the div will show the entered tooltip</p>
  {@aria:TextField {
      id : "toFocus",
      label : "Tooltip : ",
      block: true,
      helptext : "Enter the tooltip for the div",
      bind : {
        value : {
          to : 'view:tooltip',
          inside : data }
      }}/}
      {@aria:Div {
  sclass : "basic",
  width : 400,
  height : 100,
  bind: {
    tooltip: {
      to : "view:tooltip",
      inside : data
    }
  } }}
  <h2>Move focus out of textbox and mouse over the div to view the tooltip.</h2>
{/@aria:Div}


  {/macro}

{/Template}
