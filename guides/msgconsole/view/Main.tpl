{Template {
    $classpath:'ariadoc.guides.msgconsole.view.Main',
    $hasScript: false,
    $css: ['ariadoc.guides.msgconsole.view.MainStyle']
}}

    {macro main()}
        <table class="toppanel">
        <tr><td class="topmsg">
          {section {
                id:"startBtn",
                bindRefreshTo: [
                  {to:"retrievalStarted", inside:data} ,
                  {to:"nbrOfMsgs", inside:data}
                ],
                macro: "displayStartBtn"
            }/}
        </td>
        <td>
          {call pauseBtn()/}
        </td></tr>
        </table>



      <div class="listcontainer">
        <table class="msglist">
          {repeater {
            loopType: "array",
            content: data.msgs,
            type: "TBODY",
            childSections : {
              id: "msgrow",
              macro: {
                      name: "msgRow",
                      args: [],
                      scope:this
              },
              type: "TR"
            }
          }/}
        </table>
      </div>

    {/macro}


  {macro msgRow(itm)}
    {set msg=itm.item/}

    {@aria:Tooltip {
      id:"msgTip"+msg.uid,
      width: 250,
      macro: {
        name: "msgTooltip",
        args: [msg]
      }
    }/}

    {set cls="sev"+msg.severity/}
    <td class="${cls} idx">${msg.id}</td>
    <td class="${cls} prio">${msg.severity}</td>
    <td class="${cls} date">${msg.date}</td>
    <td class="${cls} cat">${msg.cat}</td>
    <td class="${cls} loc">${msg.location}</td>

    <td class="${cls} desc">
	{@aria:Text {
          text: msg.description,
          tooltipId: "msgTip"+msg.uid,
          width: 240,
		  block:true
        } /}
	</td>
    <td class="${cls} auth">${msg.author}</td>
  {/macro}

  {macro msgTooltip(msg)}
    // macro generating the tooltip over the message description
    <b>Message Severity: </b> ${msg.severity}<br/>
    <b>Message Category: </b> ${msg.cat}<br/>
    <b>Location: </b> ${msg.location}<br/>
    <b>Description: </b> ${msg.description}
  {/macro}

  {macro pauseBtn()}
    {section {
            id:"pauseBtn",
            bindRefreshTo: [
              {to:"retrievalStarted", inside:data},
              {to:"retrievalPaused", inside:data}
            ],
            macro: "displayPauseBtn"
        }/}
  {/macro}

  {macro displayStartBtn()}
    {if !data.retrievalStarted}
      <div class="start">
        Message Retrieval has not started yet:
        <a {on click {fn:"startMsgRetrieval",scope:moduleCtrl}/}>Start Retrieval</a>
      </div>
    {else/}
      Total messages: ${data.nbrOfMsgs}
      <i>(Open Firebug to see the message traffic)</i>
    {/if}
  {/macro}

  {macro displayPauseBtn()}
    {if data.retrievalStarted}
      <div>
        {if !data.retrievalPaused}
          {@aria:Button {
            label:"Pause",
            width:80,
            onclick:{
              fn:"pauseMsgRetrieval",
              scope:moduleCtrl
            }
          }/}
        {else/}
          {@aria:Button {
            label:"Resume",
            width:80,
            onclick:{
              fn:"startMsgRetrieval",
              scope:moduleCtrl
            }
          }/}
        {/if}
      </div>
    {/if}
  {/macro}

{/Template}

