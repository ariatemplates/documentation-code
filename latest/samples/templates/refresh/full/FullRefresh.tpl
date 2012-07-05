{Template {
  $classpath: "samples.templates.refresh.full.FullRefresh",
  $hasScript: true,
  $css: ["samples.templates.refresh.full.RefreshCSS"]
}}

    {macro main ()}
        <table>
            <tbody>
                <tr>
                    <td><span class="teamName">${data.team.name}</span></td>
                    <td><span class="score">{call printScore(data.team.score) /}</span></td>
                    <td><span class="myLink" {on click { fn: increaseCount} /}>increase</span></td>
                    <td><span class="myLink" {on click { fn: fullTemplateRefresh} /}>refresh</span></td>
                </tr>
            </tbody>
        </table>
    {/macro}

    {macro printScore (n)}
        {for var i = 0; i < n; i++}
            <span class="ball">&nbsp;</span>
        {/for}
    {/macro}

{/Template}