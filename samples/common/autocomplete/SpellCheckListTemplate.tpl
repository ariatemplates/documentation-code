{Template {
  $classpath : "samples.common.autocomplete.SpellCheckListTemplate",
  $extends : "aria.widgets.form.list.templates.LCTemplate"
}}

  {macro main()}
    // The Div is used to wrap the items with good looking border.
    {@aria:Div data.cfg}

        // This is added to aria.widgets.form.list.templates.ListTemplate, it displays something
        // when there are spelling suggestions
        {call checkSpellingMistake()/}

        {section 'Items'}
        <div {id "myList" /}
          {if !data.disabled}
            {on mouseup {fn: "itemClick"} /}
            {on mouseover {fn: "itemMouseOver"} /}
          {/if}
        >
          <a href="#" style="display: none;">&nbsp;</a> //IE6 does not highlight the 1 elm in list
          {foreach item inArray data.items}
            {call renderItem(item, item_index)/}
          {/foreach}
        </div>
        {/section}
    {/@aria:Div}
  {/macro}


  {macro checkSpellingMistake()}
    {var firstItem = data.items[0]/}
    {if firstItem != null}
      {if firstItem.object.value['view:spellingSuggestion']}
        <div style="border-bottom: 1px solid black; padding: 2px;">Do you mean <span style="font-weight: bold;">${firstItem.label}</span> ?</div>
      {/if}
    {/if}
  {/macro}

{/Template}