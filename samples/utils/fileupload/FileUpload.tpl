{Template {
  $classpath : "samples.utils.fileupload.FileUpload",
  $hasScript : true,
  $css: ['samples.utils.fileupload.FileUploadStyle']
}}

{macro main()}
  <h2>File Upload</h2>
  This sample relies on the native browser file input, and a form.
  <br/>
  Click on the "Import from file" link below to launch the system dialog, once a file is selected it will automatically be uploaded using aria.core.IO.asyncFormSubmit.
  <br/><br/>
  
  {section {
  	id: "form",
  	macro: "form"
  }/}<br/>
  <span {id "catchFocus"/} tabIndex="1"></span>

  You can choose below the response type to be sent by the server:<br />
  {@aria:RadioButton { label: "HTML document", bind: { value: {to: "responseExtension", inside: data }}, keyValue: "html", value: "html" } /}<br />
  {@aria:RadioButton { label: "XML document", bind: { value: {to: "responseExtension", inside: data }}, keyValue: "xml" } /}<br />
  {@aria:RadioButton { label: "Plain text", bind: { value : {to: "responseExtension", inside: data }}, keyValue: "txt" } /} (IE &lt;= 8 interprets any tag and entity in a text document)<br />

  {@aria:Dialog {
     title: "File Upload Results",
     icon: "std:info",
     width: 400,
     maxHeight: 500,
     bind:{
         "visible": { inside: data, to: 'dialogOpen' },
         "contentMacro": { inside: data, to: 'contentMacro' }
     }
  }/}

{/macro}


{macro form()}
  <div class="fileUploadForm">
  	{var browser = aria.core.Browser /}
	{var needWorkaround = browser.isIE /}
  	{if needWorkaround}
  	    <span class="fakeLink">Import a file</span>
  	{else/}
  		{@aria:Link {
  			label: "Import a file",
  			onclick: importAFileClick
  		}/}
	{/if}
    <form enctype="multipart/form-data" name="simulateAsyncFormSubmit" id="simulateAsyncFormSubmit">
      <input type="file" id="simulateAsyncFileUpload" name="simulateAsyncFileUpload" {on change fileChosen /} />
    </form>
  </div>
{/macro}

{macro defaultContent()}
  <div style="padding:10px;">
    <h1>File Uploaded Successfully</h1>

    ${data.response}
  </div>
{/macro}

{macro errorContent()}
  <div style="padding:10px;">
    <h1>File Upload Failed</h1>
  </div>
{/macro}

{/Template}