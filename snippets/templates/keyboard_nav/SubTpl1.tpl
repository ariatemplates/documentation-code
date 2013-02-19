{Template {
  $classpath: "snippets.templates.keyboard_nav.SubTpl1"
}}

{macro main()}
  ////#subTplIndex
  {@aria:Button {
    label : "Search",
    tabIndex: 4,
    onclick: "search"
  } /}
  ////#subTplIndex
{/macro}

{/Template}