{Template {
  $classpath: "snippets.templates.keyboard_nav.KeyboardNav",
  $hasScript: true
}}

{macro main()}
  ////#simpleSample
  <div style="float:left; margin-right:10px">
    <input type="text" tabindex=1 />
    {@aria:Button {
      label : "First",
      tabIndex: 3,
      block: true
    } /}
  </div>
  <div style="float:left">
    <input type="text" tabindex=2 />
    {@aria:Button {
      label : "Second",
      tabIndex: 4,
      block: true
    } /}
  </div>
  ////#simpleSample

  ////#tableLikeNav
  {section {
    id: "mySection",
    tableNav : {
      ctrl: true
    },
    macro: "content"
  } /}
  ////#tableLikeNav

{/macro}

{macro content()}
{/macro}


{macro subTemplates()}
  ////#subTpls
  {@aria:Template {
    block:true,
    baseTabIndex:100,
    defaultTemplate:'ssnippets.templates.keyboard_nav.SubTpl1'
  }/}
  {@aria:Template {
    block:true,
    baseTabIndex:200,
    defaultTemplate:'ssnippets.templates.keyboard_nav.SubTpl2'
  }/}
  ////#subTpls
{/macro}

{/Template}