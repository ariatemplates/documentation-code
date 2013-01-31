{Template {
    $classpath : "snippets.widgets.select.Snippet"
}}

	{macro main()}

       {var data={countries:[],widgets:{country:""}}/}

		////#wgtSelectField
		{@aria:Select {
            options : data.countries,
			bind : {
				value : {
					to : "country",
					inside : data.widgets
				}
			}
		}/}
		////#wgtSelectField
		
		////#wgtSelectBinding
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
		}/}
		////#wgtSelectBinding
		
	{/macro}

{/Template}
