{Template {
    $classpath: "snippets.core.skinning.Snippet"
}}

    {macro main()}

        ////#wgtButtonSkin
        {@aria:Button {
          label : "My skinclass is std."
        }/}
        {@aria:Button {
          label : "My skinclass is important.",
          sclass : "important"
        }/}
        ////#wgtButtonSkin
        ////#wgtMyWidgetSkin
        {@aria:myWidget {
          label : "My Widget",
          sclass : "mySkinClass"
        }/}
        ////#wgtMyWidgetSkin
    {/macro}

{/Template}