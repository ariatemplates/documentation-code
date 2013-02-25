{Template {
    $classpath : "snippets.widgets.textarea.Snippet"
}}

{macro main()}

  {var test = { value : "text value" }/}

  ////#wgtTextareaSimple
  {@aria:Textarea {
    label : "Left Label",
    labelPos : "left",
    helptext : "Enter some data",
    width : 280,
    labelWidth : 100,
    height : 80
  }/}
  ////#wgtTextareaSimple

  ////#wgtTextareaPrefill
  {@aria:Textarea {
    label : "Standard Prefill",
    labelPos : "left",
    width : 280,
    block : true,
    labelWidth : 100,
    bind : {
      prefill : {
        to : "value",
        inside : test }
      },
    height : 50
  }/}
  ////#wgtTextareaPrefill

  ////#wgtTextareaBinding
  {@aria:Textarea {
    label : "Standard",
    labelPos : "left",
    helptext : "Enter your first name",
    width : 280,
    block : true,
    labelWidth : 100,
    bind : {
      "value" : {
        inside : test,
        to : 'value' }
    },
    height : 50
  }/}
  ////#wgtTextareaBinding

  ////#wgtTextareaBindingTransform
  {@aria:Textarea {
    label : "Simple Transform",
    labelPos : "left",
    width : 280,
    block : true,
    labelWidth : 100,
    bind : {
      "value" : {
        inside : test,
        to : 'value',
        transform : function (value) {
          // Reverse the string
          return value.split("").reverse().join("");
          }
        }
    },
    height : 50
  }/}
  ////#wgtTextareaBindingTransform

{/macro}

{/Template}