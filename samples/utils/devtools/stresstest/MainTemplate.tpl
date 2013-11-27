{Template {
    $classpath : "samples.utils.devtools.stresstest.MainTemplate",
    $texts : {
        code : "samples.utils.devtools.stresstest.CodeGenerator"
    },
    $hasScript : true
}}

{macro main()}
Aria Templates allows to test the performances of CSS selectors used inside the application.
<br />
The test tool is made available by the singleton <strong>aria.ext.StressTest</strong>
<br /><br />
The test is done running the same action for each selectors, measuring the time it takes to complete.
<br />
The default action is the refresh of all root templates. For more information please read the API docs.
<br /><br />
There are two type of test:
<ol>
    <li><strong>Normal</strong>: Selectors are removed one by one. The test measures the performance gain removing a single selector from the application</li>
    <li><strong>Incremental</strong>: All selectors are removed and the added back one by one. The test measures the performance loss introduced by each selector.</li>
</ol>

From this page you can configure the type of test you want to execute, the application will show the code to be executed.
<br />
You can also start a stress test on this page.
<br /><br />

{@aria:NumberField {
    label : "Repeat",
    labelWidth : 100,
    tooltip : "How many times a single selector test should be executed. Default 2",
    bind : {
        value : {
            inside : data,
            to : "repeat"
        }
    }
}/}
<br />

{@aria:Select {
    label : "Widget",
    labelWidth : 100,
    tooltip : "Should the Stress test measure also the CSS associated to Aria Templates widget. Default false",
    bind : {
        value : {
            inside : data,
            to : "widget"
        }
    },
    options : [{label: "False", value: "false"}, {label: "True", value: "true"}]
}/}
<br />

{@aria:Select {
    label : "Incremental",
    labelWidth : 100,
    tooltip : "Should the Stress test be normal or incremental. Default normal",
    bind : {
        value : {
            inside : data,
            to : "incremental"
        }
    },
    options : [{label: "Normal", value: "false"}, {label: "Incremental", value: "true"}]
}/}
<br /><br />

{section {
    id : "snippet",
    macro : "codeSnippet",
    bindRefreshTo : [
        {inside: data, to: "repeat"},
        {inside: data, to: "widget"},
        {inside: data, to: "incremental"}
    ]
}/}

<br /><br />
{@aria:Button {
    onclick : "startTest",
    label : "Start Stress Test"
}/}
{/macro}

{macro codeSnippet()}
Snippet of code to run a stress test.<br />
<textarea readonly="readonly" style="width:46em;height:160px;border:dashed 1px #F1E8D9;background:none;">
    ${code.processTextTemplate({
        type: "console",
        options: this.data
    })}
</textarea>
<br />
Bookmaklet, useful for Internet Explorer, you can type this in the URL address bar.<br />
<textarea readonly="readonly" style="width:46em;height:80px;border:dashed 1px #F1E8D9;background:none;">
    ${code.processTextTemplate({
        type: "bookmarklet",
        options: this.data
    })}
</textarea>
{/macro}
{/Template}
