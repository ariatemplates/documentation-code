// Template A
{Template {
   $classpath: "ariadoc.snippets.templates.domInteractions.TemplateA",
   $hasScript: true
}}

   {macro main()}

      // Template B
      {@aria:Template {
         defaultTemplate: "ariadoc.snippets.templates.domInteractions.TemplateB"
      }/}

      // Template C
      {@aria:Template {
         defaultTemplate: "ariadoc.snippets.templates.domInteractions.TemplateC",
         id: "thisIsTemplateC"
      }/}
   {/macro}

{/Template}