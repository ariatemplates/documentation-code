{Template {
    $classpath: "ariadoc.guides.drench.view.Main",
    $hasScript: true
}}

    {macro main()}

        <h1>Clean the board!</h1>

        <div class="timer">Level
            <strong>
                {section {
                    id: "level",
                    type: "span",
                    bindRefreshTo: [{to:"level",inside:data}]
                }}
                    ${data.level}
                {/section}
            </strong>
            <span style="float:right">Time
                <strong>
                    {section {
                        id: "timer",
                        type: "span",
                        bindRefreshTo: [{to:"timer",inside:data}]
                    }}
                        ${("00"+data.timer).slice(-3)}
                    {/section}
                </strong>
            </span>
        </div>

        <div {on click "startGame"/}>
	        {section {
	            id: "board",
	            type: "div",
	            bindRefreshTo: [{to:"moves",inside:data}],
	            attributes: {style: "width:"+BOARDSIZE*25+"px"}
	        }}
	            {foreach line inArray data.board}
	                <div class="line">
	                    {foreach cell inArray line}<span data-x="${cell_index}" data-y="${line_index}" {if cell==-1}class="fade"{else/}style="background:${COLORS[cell]}"{/if}></span>{/foreach}
	                </div>
	            {/foreach}
	        {/section}
	    </div>

        {section {
            id: "banner",
            type: "div",
            bindRefreshTo: [{to:"moves",inside:data}]
        }}
            {if !data.gameStarted}
                <div class="msg">You have <span>${data.moves}</span> moves to clean the board.<br/>Pick a place to start</div>
            {else/}
                {if data.cleaned==TOTAL}
                    <div class="msg">${win()}</div>
                    <div class="inset"><button type="button" {on click {fn:"newGame", args:true}/}>Next level</button></div>
                {elseif data.moves==0/}
                    <div class="msg">${fail()}</div>
                    <div class="inset"><button type="button" {on click "newGame"/}>Again! Again!</button></div>
                {else/}
                    <div class="msg"><span>${data.moves}</span> ${(data.moves>1 ? "moves" : "move")} left</div>
                    {for var c=1; c<COLORS.length; c++}
                        <span class="color" style="background:${COLORS[c]}" {on click {fn:"clean",args:c}/}></span>
                    {/for}
                {/if}
            {/if}
        {/section}

    {/macro}

{/Template}
