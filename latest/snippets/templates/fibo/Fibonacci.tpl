{Template {$classpath: "ariadoc.snippets.templates.fibo.Fibonacci"}}

    {var data={fibo:[0,1]}/}

    {macro main()}

        <h1>A Simple Fibonacci Example</h1>

        {section {
            id: "fibonid",
            bindRefreshTo : [{inside : data, to : "fibo"}]
        }}
            {for var i=0; i<data.fibo.length; i++}
                F<sub>${i}</sub> = ${data.fibo[i]}<br/>
            {/for}
        {/section}

        {@aria:Button {
            label : "Display one more!",
            onclick : function(){f = data.fibo; l=f.length; this.$json.add(f, f[l-1]+f[l-2], l)}
        } /}

    {/macro}

{/Template}