{Template {
    $classpath:'samples.features.print.PrintTestPage',
    $hasScript: true,
    $css : ['samples.features.print.PrintTestStyles']
}}





//["hidden", "visible", "adaptX", "adaptY", "adaptXY"]


{var display = 'hidden'/}

    {macro main()}

        <p><b>Note</b> By default some browsers ignore background images &amp; bg-colors, you will need to enable these options before printing</p>
        <div style="border: 1px dashed black;margin-top: 10px;padding: 10px;">
        <h2>Font &amp Label Control</h2>

        <br/>
        Change font styles:  <span class="fStyle">style</span>, <span class="fWeight">weight</span> and <span class="fSize">size</size>
        <br/><br/>

        Change  widget label:
        <br/>
        <br/>
            <p>
                {@aria:TextField {
                label:"email address",
                labelPos:"top",
                labelAlign:"left",
                helptext:"Enter your email address",
                width:200,
                block:true,
                labelWidth:300}/}
            </p>
        </div>

    <div style="border: 1px dashed green; padding: 10px;margin-top: 10px;">
    <h2>Update print options</h2>
    <br/>
    {@aria:CheckBox {block: true,label: "Print calendar ",onchange: {fn: "toggleDisplay",args:{section:"cal"}}}/}
    {section {
        id: "cal",
        macro: "displayCal"
    }/}
    </div>


    <div style="border: 1px dashed blue;margin-top: 10px;padding: 10px;">
        <h2>Print options settings</h2>
        <p>Hide template A from print view</p>
        <br/>

        <h3 class="tempA">Template A</h3>
            {@aria:Template {
                defaultTemplate:'samples.features.print.PrintTestPageA',
                block:true,
                width: 500,
                printOptions: "hidden"
            }/}

        <br/><br/>

        <h3>Template B</h3>
            {@aria:Template {
                defaultTemplate:'samples.features.print.PrintTestPageA',
                block:true,
                width: 500
            }/}
    </div>


            <span style="page-break-after:always">&nbsp;</span>

    <div style="border: 1px dashed orange; padding: 10px;margin-top: 10px;page-break-after:always">

        <h2>Print options settings</h2>
        <br/>
        <p>Print(adaptY) scrollable content</p>
        <p></p>
        <br/>
                {@aria:Div {
                    tooltip:"Member Login",
                    sclass:"dlg",
                    cssClass : "red",
                    minWidth:600,
                    maxHeight:110,
                    printOptions: "adaptY"
                }}
                <span style="width:150px;display:block;float:left; padding-right: 5px;">
                <p>Div container</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a suscipit tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis tellus risus, porta sit amet faucibus quis, sodales in mauris. Vivamus lacus est, lacinia eu sodales ut, dignissim vitae velit. Donec bibendum magna ac dui vestibulum in viverra neque interdum. Proin sit amet mattis augue. Integer interdum, sem at vestibulum feugiat, nisl tortor molestie neque, vulputate lacinia odio risus at metus.</p>
                </span>

                <p>List widget hidden from print automatically</p>
                {@aria:List {
                    printOptions: "hidden",
                    items:[{value:0, label:"Cars"}, {value:1, label:'Trains'}, {value:2, label:'Planes'}],
                    minWidth:100
                }/}
                {/@aria:Div}
        <br/><br/>
    </div>


    {/macro}

    {macro displayCal()}
        <br/>
        {@aria:Calendar {printOptions : display}/}
        <br/><br/>
    {/macro}
{/Template}
