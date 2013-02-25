{Template {
  $classpath: "snippets.custom-widgets.MyWidgetUsage",
  $wlib: {
    'custom': "snippets.custom-widgets.MyCustomWidgetsLib"
  }
}}

{macro main()}
  /*
  ////#myWidgetInclusion
  {@custom:Element {
    bind : {
      name : {
        inside : data, to : "name"
      }
    },
    on : {
      click : {
        fn : "clicked",
        scope : this
      }
    }
  }/}
  ////#myWidgetInclusion
  */
{/macro}

{/Template}