{Template {
  $classpath: "samples.templates.refresh.animate.AnimatedRefresh",
  $hasScript: true,
  $css: ["samples.templates.refresh.animate.RefreshCSS"]
}}

    {macro main()}


    {@aria:Button {
        id : "first",
        label : "Change data with animation",
        onclick : "changeAnimating"
    } /}

    {@aria:Button {
        id : "second",
        label : "Change data without animation",
        onclick : "changeNotAnimating"
    } /}

    {@aria:Button {
        id : "third",
        label : "Manual Refresh",
        onclick : "manualRefresh"
    } /}

    {@aria:Button {
        id : "fourth",
        label : "Change animation",
        onclick : "changeAnimation"
    } /}

    {section {
        id : "autoSection2",
        macro : "myMacro2",
        cssClass : "page text-center2",
        bindRefreshTo : [{
            inside : data,
            to : "test",
            recursive : true
        },{
            inside : data,
            to : "test2",
            recursive : true,
            animate : false
        },{
            inside : data.animation,
            to : "animateIn",
            recursive : true,
            animate : false
        }],
        bind : {
            animation : {
                to : "animation",
                inside : data
            }
        },
        type : "div"
    }/}

        <div class="log" id="log" > REFRESH LOG: </div>

        {/macro}


    {macro myMacro2 ()}
        <h1>ANIMATING THIS SECTION using <b>${data.animation.animateIn}</b></h1>
        <p><i>test</i> is bound to an animated refresh</p>
        <p><i>test2</i> is bound to a not animated refresh</p>
        <h2>test = ${data.test}</h2>
        <h2>test2 = ${data.test2}</h2>
    {/macro}

{/Template}
