{Template {
    $classpath:'ariadoc.guides.spreadsheet.view.Main',
    $hasScript: true,
    $css: ['ariadoc.guides.spreadsheet.view.MainStyle']
}}
  {var count=0/}

  {macro main()}
    {call mainLinks()/}
    {call mainLayout()/}
  {/macro}

  {macro mainLinks()}
    <div class="mainLinks">
      {var links=[
         {name:"Load Dataset",cbfn:"loadDataset"},
         {name:"New Dataset",cbfn:"createNewDataset"},
         {name:"Copy Dataset",cbfn:"copyDataset"},
         {name:"Save",cbfn:"saveChanges"},
         {name:"Cancel",cbfn:"cancelChanges"}
      ]/}
      {foreach lnk in links}
        {separator}&nbsp;|&nbsp;{/separator}
        {@aria:Link {
          label:lnk.name,
          onclick:{
            fn:lnk.cbfn,
            scope:moduleCtrl
          }
        }/}
      {/foreach}

      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      {section {
        id:"dsList",
        bindRefreshTo: [
          {to:"datasets", inside:data, recursive:false},
          {to:"currentDs", inside:data}
        ]
      }}
        {if data.datasets.length==0}
          No dataset loaded yet..
        {else/}
          // Display list of currently loaded datasets
          Datasets:&nbsp;
          {foreach ds in data.datasets}
            {separator} - {/separator}
            {if ds==data.currentDs}
              <b>${ds.name}</b>
            {else/}
              <a {on mousedown {fn:"selectDataset",args:parseInt(ds_index,10)}/}>
                ${ds.name}
              </a>
            {/if}
          {/foreach}
        {/if}
      {/section}
    </div>
  {/macro}

  // Generate the main data layout (placeholders and scrollbars)
  {macro mainLayout()}
    {section {
        id:"mainLayout",
        bindRefreshTo: [{to:"currentDs", inside:data}]
      }}
      // process table width to have fixed column sizes
      // otherwise column size might change when content is updated
      {if data.currentDs!=null}
        {var borderWidth=1/}
        {var tblWidthFixed=borderWidth/}
        {var tblWidthScroll=borderWidth/}
        {foreach col in data.currentDs["fixedColumns"]}
            {set tblWidthFixed+=borderWidth+col.width/}
        {/foreach}
        {foreach col in data.currentDs["scrollableColumns"]}
            {set tblWidthScroll+=borderWidth+col.width/}
        {/foreach}

        <table class="mainLayout">
          <tbody>
            // query row
            <tr>
              <td class="dataBlock">{call dataDiv("fixedColumns","filter1","filter",tblWidthFixed)/}</td>
              <td class="dataBlock">{call dataDiv("scrollableColumns","filter2","filter",tblWidthScroll)/}</td>
              <td class="vscroll">&nbsp;</td>
            </tr>
            // scrollbar row
            <tr>
              <td class="hscroll">&nbsp;</td>
              <td class="hscroll">{call scrollbarDiv("hscroll1","hscrollbar","width:"+tblWidthScroll+"px")/}</td>
              <td class="hscroll">&nbsp;</td>
            </tr>
            // data row
            <tr>
              <td class="dataBlock">{call dataDiv("fixedColumns","part1","data",tblWidthFixed)/}</td>
              <td class="dataBlock">{call dataDiv("scrollableColumns","part2","data",tblWidthScroll)/}</td>
              <td class="vscroll">{call scrollbarDiv("vscroll","vscrollbar","height:2400px")/}</td>
            </tr>
            // 2nd scrollbar row
            <tr>
              <td class="hscroll">&nbsp;</td>
              <td class="hscroll">{call scrollbarDiv("hscroll2","hscrollbar","width:"+tblWidthScroll+"px")/}</td>
              <td class="hscroll">&nbsp;</td>
            </tr>
          </tbody>
        <table>
      {/if}
    {/section}
  {/macro}

  // Generate a div that will handle the scrollbar
  {macro scrollbarDiv(id,cssClass,contentStyle)}
    <div {id id/} class="${cssClass}" {on scroll {fn:"onScroll",args:id}/}>
      <div {id id+"Content"/} class="${cssClass}Content"
      {if contentStyle} style="${contentStyle}" {/if}
      >&nbsp;</div>
    </div>
  {/macro}

  // Generate a div containing the data specified by the dataCat attribute
  {macro dataDiv(colType,cssClass,type,tblWidth)}
    <div class="${colType} ${cssClass}" {id "dataCont_"+colType+"_"+type/}>
      <div class="dataDiv" {id "dataDiv_"+colType/}>
        {if !data.currentDs || !data.currentDs.items || data.currentDs.items.length==0}
          &nbsp;
        {else/}
          <table {id "dsData_"+colType/} data-id="TABLE" style="width:${tblWidth}px" class="datasheet" {on mousedown {fn:"onDsDataCellClick"}/}>
            <thead>
              <tr>
              {foreach col in data.currentDs[colType]}
                <th style="width:${col.width}px">${col.title}</th>
              {/foreach}
              </tr>
            </thead>
            </thead>
              {if type=="filter"}
                <tbody>
                  <tr>
                  {foreach col in data.currentDs[colType]}
                    <td class="">
                     {@aria:TextField {
                        autoselect:true,
                        width: col.width-2,
                        bind:{
                          // TODO create a filter structure in the datamodel
                          //value:{to:"editValue",inside:cellItm}
                          //requireFocus:{to:"hasFocus",inside:cellItm}
                        }
                      }/}
                    </td>
                  {/foreach}
                  </tr>
                </tbody>
              {else/}
                {repeater {                  
                  loopType: "array",
                  content: data.currentDs.items,
                  type: "TBODY",
                  childSections : {
                    id: "dsrow_"+colType,
                    bindRefreshTo: {fn:"getRowBindRefresh", scope:this},
                    macro: {
                            name: "dsRow",
                            args: [data.currentDs[colType]],
                            scope:this
                    },
                    type: "TR"
                  }
                }/}
              {/if}
            </table>
        {/if}
      </div>
    </div>
  {/macro}

  // Display a row of the dataset table
  {macro dsRow(cols, itm)}
    {var item=itm.item/}
    {var cellItm=null/}
    {var cls="cell"/}
    {if item.editMode}
      {set cls="selected"/}
    {/if}

    {foreach col in cols}
      {set cellItm=item[col.colId]/}
      <td class="${cls}" data-id="${cellItm.id}" data-colId="${col.colId}">
        {if item.editMode}
         {@aria:TextField {
            autoselect:true,
            width: col.width-2,
            bind:{
              value:{to:"editValue",inside:cellItm}
              //requireFocus:{to:"hasFocus",inside:cellItm}
            }
          }/}
        {else/}
           ${cellItm.value}&nbsp;
        {/if}
      </td>
    {/foreach}
  {/macro}


{/Template}

