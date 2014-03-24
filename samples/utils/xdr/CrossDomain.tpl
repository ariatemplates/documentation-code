{Template {
    "$classpath" : 'samples.utils.xdr.CrossDomain',
    "$hasScript" : true,
    "$width" : {"min": 974}
}}
    {macro main()}
        <h1>Aria Templates Cross-Domain Transactions with IO</h1>
        <br><br>
        <h2>Content from Yahoo Pipes feed will display here.</h2>
        <br><br>
        {@aria:Button {
            label: "Make a cross domain request..",
            onclick: {
                fn: "xdrRequest"
            }
        }/}
        <br><br>
        {@aria:Dialog {
          title: "XDR response",
          cssClass : "mainContent",
          icon: "std:info",
          modal: false,
          visible: false,
          macro: "defaultContent",
          bind:{
              "visible": { inside: data, to: 'response'}
          }
        }/}
    {/macro}
    {macro defaultContent()}
    <pre>
       ${this.formatResponse(this.response)}
    </pre>
  {/macro}
{/Template}
