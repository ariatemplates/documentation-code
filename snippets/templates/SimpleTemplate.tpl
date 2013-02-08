{Template {
  $classpath: "snippets.templates.SimpleTemplateWidget"
}}
{macro main()}
  ////#templateWidget
  {@aria:Template {
    defaultTemplate : "snippets.intro.view.SgtGreeters"
  }/}
  ////#templateWidget

  ////#comments
  // you can use single line comments...
  /* ...or multiline
    when needed */
  ////#comments

{/macro}
{/Template}