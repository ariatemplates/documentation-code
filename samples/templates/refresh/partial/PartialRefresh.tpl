{Template {
  $classpath: "samples.templates.refresh.partial.PartialRefresh",
  $hasScript: true,
  $css: ["samples.templates.refresh.partial.RefreshCSS"]
}}
    {var mySectionPrefix = "mySection" /}
    {macro main ()}
        <table>
            <tbody>
                {for var i = 0; i < data.teams.length; i++}
                    {section {
                        id : mySectionPrefix + i,
                        macro : {
                          name : "printTeamLine",
                          args: [i]
                        },
                        type : "TR"
                    } /}
                {/for}
            </tbody>
        </table>
    {/macro}

    {macro printTeamLine (n)}
        {var team = data.teams[n] /}
        <td><span class="teamName">${team.name}</span></td>
        <td><span class="score">{call printScore(team.score) /}</span></td>
        <td><span class="myLink" {on click { fn: increaseCount, args: team} /}>increase</span></td>
        <td><span class="myLink" {on click { fn: partialTemplateRefresh, args : {sectionNumber : n}} /}>refresh</span></td>
    {/macro}

    {macro printScore (n)}
        {for var i = 0; i < n; i++}
            <span class="ball">&nbsp;</span>
        {/for}
    {/macro}

{/Template}