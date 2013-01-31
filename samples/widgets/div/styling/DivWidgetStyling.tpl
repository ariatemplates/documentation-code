{Template {
  $classpath : 'samples.widgets.div.styling.DivWidgetStyling',
  $hasScript : false } }

  {macro main ( )}
      <p style="color:green">Div style set using 'sclass:basic'</p>
      {@aria:Div {
        sclass : "basic",
        width : 200,
        height : 100,
        bind: {
            tooltip: {
                to : "view:tooltip",
                inside : data
            }
        } }}
  <h1>Sample div</h1>
{/@aria:Div}
<p style="color:green">Div style set using 'sclass:errortip'</p>
{@aria:Div {tooltip : "Some tooltip",   sclass:"errortip",width:500}}
                <cdata>
                        {@aria:Link {label:"Error 30002"}/}
                        <p>Template parsing error line 18: invalid statement name: aria:Button</p>
                {/@aria:Div}
                <div style="float:left">
                <p style="color:green">Div style set using 'sclass:list'</p>
                {@aria:Div {
                    tooltip:"New container",
                    sclass:"list",
                    width:200,
                    cssClass: "testme"
                }}
                    <h3>List example</h3>
                    <ul>
                        <li>Flights</li>
                        <li>Holidays</li>
                        <li>City breaks</li>
                        <li>Car Hire</li>
                        <li>going out</li>
                    </ul>
                {/@aria:Div}
                </div>
                <div style="float:left;margin-left:30px">
                <p style="color:green">Div style set using 'sclass:dlg'</p>
                {@aria:Div {
                    tooltip:"Member Login",
                    sclass:"dlg",
                    cssClass : "red",
                    maxWidth:150,
                    minHeight:100
                }}
                <p>sclass attribute set to dlg</p>
                {/@aria:Div}
                </div>
                {/macro}

{/Template}
