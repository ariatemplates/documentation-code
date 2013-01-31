{Template {
  $classpath: "samples.templates.refresh.repeater.Repeater",
  $hasScript: true,
  $css: ["samples.templates.refresh.repeater.RefreshCSS"]
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