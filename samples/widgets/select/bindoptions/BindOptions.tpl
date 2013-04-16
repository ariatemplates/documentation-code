{Template {
	$classpath : 'samples.widgets.select.bindoptions.BindOptions'
}}

	{macro main ( )}

	{@aria:Select {
        label: "All Countries: ",
        labelWidth:220,
        options: data.OptionsBindingValues,
        bind: {
            options : {
                to : "OptionsBindingValues",
                inside : data
            }
        }
    }/}&nbsp;&nbsp;&nbsp;
    {@aria:Button {
        label: "Modify options list",
        onclick: deleteFirstElement

      }/}<br/>

	{/macro}

{/Template}
