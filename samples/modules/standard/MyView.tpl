{Template {
    $classpath: "samples.modules.standard.MyView"
}}

    {macro main()}
      {section {
        id : 'mySection',
        macro : 'macroContent',
        type : 'div',
        bindRefreshTo : [{
          to : "count",
          inside : data
        }]
      }/}

      <button{on click {
        fn : "incrementCount",
        scope : moduleCtrl
      }/}>increment value</button>
    {/macro}

    {macro macroContent()}
      Count : ${data.count}
    {/macro}
{/Template}
