{Template {
  $classpath : 'samples.widgets.text.TextWgtSample',
  $hasScript : false } }

	{macro main ( )}
        <h3>Static Width</h3>
        {@aria:Text {
             text: "This is the text to be displayed. At time there is a lot of text and it is necessary to make the test shorter. We do this by using ellipses.",
             width : 150,
             ellipsis: "...",
             ellipsisLocation: "right"
         }/}
         <br/><br/>
         <h3>Wide Enough</h3>
         {@aria:Text {
             text: "This is the text",
             width : 350,
             ellipsis: "...",
             ellipsisLocation: "right"
         }/}
         <br/> <br/>
         <h3>A Dynamic Width, No ellipsis</h3>
         {@aria:Text {
             text: "This is the text to be displayed. At time there is a lot of text and it is necessary to make the test shorter.",
             width : 150
         }/}

	{/macro}

{/Template}
