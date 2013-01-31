{Template {
  $classpath: "samples.templates.refresh.stopresume.StopResume",
  $hasScript: true,
  $css: ["samples.templates.refresh.stopresume.RefreshCSS"]
}}
    {var mySectionPrefix = "mySection" /}
    {macro main ()}
        <table>
            {repeater {
                loopType: "array",
                content: data.teams,
                type: "TBODY",
                childSections : {
                        id: "myTeamSection",
                        macro: {
                                name: "printTeamLine",
                                args: [],
                                scope:this
                        },
                        bindRefreshTo : getSectionBindings,
                        type: "TR",
                        attributes: myChildSectionAttributes
                }
            }/}
        </table>
        <br/>
        <br/>
        <div>
            <span class="myLink" {on click { fn: stopRefreshes} /}>Stop</span>
            <span class="myLink" {on click { fn: resumeRefreshes} /}>Resume</span>
        </div>
    {/macro}

    {macro printTeamLine (thisItem)}
        {var team = thisItem.item /}
        <td><span class="teamName">${team.name}</span></td>
        <td><span class="score">{call printScore(team.score) /}</span></td>
        <td><span class="myLink" {on click { fn: increaseCount, args: team} /}>increase</span></td>
        <td><span class="myLink" {on click { fn: addNext, args: thisItem} /}>Add</span></td>
        <td><span class="myLink" {on click { fn: removeThis, args: thisItem} /}>Remove</span></td>
        <td>refresh: ${updateRefreshCountOf(thisItem)}</td>
    {/macro}

    {macro printScore (n)}
        {for var i = 0; i < n; i++}
            <span class="ball">&nbsp;</span>
        {/for}
    {/macro}

{/Template}