{Template {
  $classpath: "samples.features.clickbuster.ClickSample",
  $hasScript: true
}}

{macro main()}
    <h1>Click Buster example</h1>
      <input type="submit" value="Reset 'tap me' label"  {on tap {fn: resetLabel, scope: this}/}>
    <br>
    {@aria:Fieldset {
      label: "Choose element",
      width: 300
    } }
        {@aria:RadioButton {
            label: "input",
            keyValue: "input",
            block: true,
            bind:{
                "value": {inside: data, to: 'element'}
            }
        }/}
        {@aria:RadioButton {
            label: "link",
            keyValue: "link",
            block: true,
            bind:{
                "value": {inside: data, to: 'element'}
            }

        }/}
        {@aria:RadioButton {
            label: "button",
            keyValue: "button",
            block: true,
            bind:{
                "value": {inside: data, to: 'element'}
            }
        }/}
        {@aria:RadioButton {
            label: "checkbox",
            keyValue: "checkbox",
            block: true,
            bind:{
                "value": {inside: data, to: 'element'}
            }
        }/}
     {/@aria:Fieldset}

    <br>
    {@aria:Fieldset {
      label: "Choose tap mode",
      width: 300
    } }
        {@aria:RadioButton {
            label: "tap",
            keyValue: "tap",
            block: true,
            bind:{
                "value": {inside: data, to: 'tapMode'}
            }
        }/}
        {@aria:RadioButton {
            label: "safetap",
            keyValue: "safetap",
            block: true,
            bind:{
                "value": {inside: data, to: 'tapMode'}
            }

        }/}
     {/@aria:Fieldset}
    <br><br><br>
    {section {
        bindRefreshTo: [{to:"toggle", inside:this.data}, {to:"element", inside:this.data}, {to:"tapMode", inside:this.data}],
        macro: {name: "myMacro", scope : this}
    } /}
    <br><br><br>

    {section {
        bindRefreshTo: [{to:"log", inside:this.data}],
        macro: {name: "log", scope : this}
    } /}
{/macro}

{macro myMacro()}
    {if this.data.toggle}
        {if this.data.tapMode == "safetap"}
            <div style="background-color:yellow" {on safetap {fn: tapCB, scope: this}/}><b>Tap me!</b></div>
        {else/}
            <div style="background-color:yellow" {on tap {fn: tapCB, scope: this}/}><b>Tap me!</b></div>
        {/if}
    {else/}
        {if this.data.element == "input"}
            <div>
                <input {on click {fn: inputCB, scope: this, args : "input"}/} />
            </div>
        {elseif this.data.element == "link"/}
            <a {on click {fn: inputCB, scope: this, args : "link"}/} id="project-name-val" href="http://www.ariatemplates.com"> Aria Templates</a>
        {elseif this.data.element == "button"/}
            <form action="http://www.ariatemplates.com">
                <input {on click {fn: inputCB, scope: this, args : "button"}/} type="submit" value="visit AT.com">
            </form>
        {elseif this.data.element == "checkbox"/}
            <input {on click {fn: inputCB, scope: this, args : "checkbox"}/} type="checkbox" name="javascript" value="javascript"/> checkbox
        {/if}
    {/if}
{/macro}


{macro log()}
<div style="background-color:yellow">
<h3>
    <b>Events Log:</b>
</h3>
    {foreach logMsg in this.data.log}
        <p>
        ${logMsg}
        </p>
    {/foreach}
</div>
{/macro}


{/Template}
