{Template {
    $classpath: "samples.intro.SgtGreeters"
}}

    {macro main()}

    <h1>Hello Fab Four World</h1>

        {foreach name in data.people}
            ${data.greeting} ${name}!<br/>
        {/foreach}

    {/macro}

{/Template}