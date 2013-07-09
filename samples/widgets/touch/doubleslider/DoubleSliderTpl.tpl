{Template {
  $classpath : 'samples.widgets.touch.doubleslider.DoubleSliderTpl',
  $wlibs : {
    'touch' : 'aria.touch.widgets.TouchWidgetLib'
  }
}}
  {var data = {slider : [0, 0]} /} 
  {macro main()}
  <div style="padding: 20px">
    Here is a Double Slider Widget display a value between 0 and 1 :
	<br><br>
	{@touch:DoubleSlider {
      width : 400,
      id : "slider",
      bind : {
          value : {
              to: "slider",
              inside: data
          }
      }
      
    }/}
	
	
  </div>

  {section {
      id : "display",
      macro : "values",
      bindRefreshTo : [{
          inside : data,
          to : "slider"
      }]
  }/}
{/macro}

{macro values()}
   Values are ${data.slider.join(" - ")}
 	
{/macro}

{/Template}