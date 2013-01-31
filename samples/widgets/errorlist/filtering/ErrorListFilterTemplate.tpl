{Template {
  $classpath: "samples.widgets.errorlist.filtering.ErrorListFilterTemplate",
  $hasScript: true
}}

  {macro main()}
        {@aria:ErrorList {
           margins: "10 1 10 1",
           title: "Information Message",
           filterTypes: ['I'],
           messages: data.messages
        }/}
        {@aria:ErrorList {
           margins: "10 1 10 1",
           title: "Success Message",
           filterTypes: ['O'],
           messages: data.messages
        }/}
        {@aria:ErrorList {
           margins: "10 1 10 1",
           title: "Error Message",
           filterTypes: ['E'],
           messages: data.messages
        }/}
        {@aria:ErrorList {
           margins: "10 1 10 1",
           title: "Warning Message",
           filterTypes: ['W'],
           messages: data.messages
        }/}{/macro}

{/Template}