{Template {
    $classpath : "snippets.widgets.snippet.Splitter"
}}

{macro main()}

  ////#wgtSplitter
  {@aria:Splitter {
  sclass: "std",
  orientation:"horizontal",
  bind:{
  size1: {to: "firstPanelSize",inside:data},
  size2: {to: "secondPanelSize",inside:data}
  },
  border:true,
  size1:100,
  size2:100,
  height:400,
  width:496,
  adapt:"size1", //["size1","size2","both"]
  macro1:'PanelOne',
  macro2:'PanelTwo'
  }}
  {/@aria:Splitter}
  ////#wgtSplitter

{/macro}

{/Template}