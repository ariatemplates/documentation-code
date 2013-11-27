{Template {
    $classpath : "samples.utils.devtools.filesgenerator.MainTemplate",
    $hasScript : true,
    $css: ["samples.utils.devtools.filesgenerator.MainTemplateStyle"]
}}
    {macro main()}
        <div>
            {@aria:SelectBox {
                label: "Skeleton type",
                options: [
                    {label: "Class", value: "class"},
                    {label: "Interface", value: "interface"},
                    {label: "HTML Template", value: "htmlTemplate"},
                    {label: "CSS Template", value: "cssTemplate"},
                    {label: "Template Script", value: "templateScript"},
                    {label: "Macro Library", value: "macroLibrary"},
                    {label: "CSS Macro Library", value: "cssLibrary"},
                    {label: "Module Controller Interface", value: "moduleControllerInterface"},
                    {label: "Module Controller", value: "moduleController"},
                    {label: "Flow Controller Interface", value: "flowControllerInterface"},
                    {label: "Flow Controller", value: "flowController"},
                    {label : "Bootstrap", value : "bootstrap"}
                ],
                bind: {
                    value: {
                        to : "type",
                        inside : data
                    }
                },
                margins: "0 0 0 0",
                onchange: "setSkeletonType",
                width: 900,
                labelWidth: 250
            } /}
        </div>

        {section {
            type: "div",
            attributes : { classList: ["inputs"] },
            id : "skeletonInputs",
            macro : "skeletonProperties",
            bindRefreshTo : [{
                inside : data,
                to : "skeletonProperties",
                recursive : false
            }]
        }/}

        {@aria:Button {
            label: "Generate skeleton!",
            onclick: "generateSkeleton",
            block: true,
            margins: "10 0 10 0"
        } /}

        <textarea {id "result" /}></textarea>

    {/macro}

    {macro skeletonProperties()}
        {foreach prop in data.skeletonProperties}
            {if prop.$type == "json:String"}
                {@aria:TextField {
                    label: prop_index,
                    value: prop.$default,
                    width: 600,
                    bind: {
                        value: {
                            inside: data.skeletonProperties[prop_index],
                            to: "currentValue"
                        }
                    },
                    width: 900,
                    labelWidth: 250,
                    block: true,
                    margins: "10 0 10 0"
                } /}
            {elseif prop.$type == "json:Boolean"/}
                {@aria:SelectBox {
                    label: prop_index,
                    options: [
                        {label: "True", value: "true"},
                        {label: "False", value: "false"}
                    ],
                    value: prop.$default + "",
                    width: 600,
                    bind: {
                        value: {
                            inside: data.skeletonProperties[prop_index],
                            to: "currentValue",
                            transform: {
                              toWidget : function (value) {
                                return (value) ? "true" : "false";
                              },
                              fromWidget : function (value) {
                                return (value == "true") ? true : false;
                              }
                            }
                        }
                    },
                    width: 900,
                    labelWidth: 250,
                    block: true,
                    margins: "10 0 10 0"
                } /}
            {elseif prop.$type == "json:Array"/}
                {@aria:TextField {
                    label: prop_index + " (comma-separated values)",
                    value: (prop.$default)? prop.$default.join(",") : "",
                    width: 600,
                    bind: {
                        value: {
                            inside: data.skeletonProperties[prop_index],
                            to: "currentValue",
              transform: {
                toWidget : function (value) {
                  return (value) ? value.join(",") : "";
                },
                fromWidget : function (value) {
                  return (value) ? value.split(",") : null;
                }
              }
                        }
                    },
                    width: 900,
                    labelWidth: 250,
                    block: true,
                    margins: "10 0 10 0"
                } /}
            {/if}
        {/foreach}
    {/macro}

{/Template}
