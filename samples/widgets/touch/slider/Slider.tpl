{Template {
  $classpath : 'samples.widgets.touch.slider.Slider',
  $wlibs : {
    'touch' : 'aria.touch.widgets.TouchWidgetLib'
  }
}}

  
  {macro main()}
    Here is a Touch Slider Widget bound with a Text Widget to display a value between $0 and $100 :

    <br><br>

    {@touch:Slider {
      bindValue: {
        to: "slider",
        inside: data
      },
      width: 100
    }/}
    <br>
	
	{section {
      id : "display",
	  macro : "values",
      bindRefreshTo : [{
          inside : data,
          to : "slider"
      }]

  }/}
    

    <br><br>

    Here is a medium slider (width: 200px):

    <br><br>

    {@touch:Slider {
      width: 200
    }/}

    <br><br>

    Here is a longer slider (width: 300px):

    <br><br>

    {@touch:Slider {
      width: 300
    }/}

  {/macro}
  {macro values()}
     Value $: ${data.slider ? (data.slider*100).toFixed(0) : 0}
{/macro}

{/Template}