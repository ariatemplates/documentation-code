{Template {
    $classpath : "snippets.html-widgets.textarea.Snippet",
    $wlibs : {
      html : "aria.html.HtmlLibrary"
    }
}}

{var data = {} /}

{macro main()}
  ////#wgtTextarea
  {@html:TextArea {
    attributes : {
      classList : ["stylish"]
    },
    //text to be displayed before the user issues input
    placeholder : "I'm here to help",
    //define that complete content should be selected when focussing
    autoselect : true,
    bind : {
      value : {
        inside : data,
        to : "value",
        //add transformation function
        transform : {
          fromWidget : function(value) {
            //convert new lines form the widget to html line break
            return value.split(/\r\n|\r|\n/).join("<br />");
          }
        }
      }
    },
    //event listener
    on : {
      type : "reactOnType"
    }
  }/}
  ////#wgtTextarea
{/macro}
{/Template}
