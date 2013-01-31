{Template {
	$classpath : "snippets.widgets.selectbox.Snippet"
}}

	{macro main()}

       {var data={countries:[],widgets:{country:""}}/}

		////#wgtSelectBoxField
		{@aria:SelectBox {
			options : data.countries,
			bind : {
				value : {
					to : "country",
					inside : data.widgets
				}
			}
		}/}
		////#wgtSelectBoxField

		////#wgtSelectBoxBinding
		{@aria:SelectBox {
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
		////#wgtSelectBoxBinding
	{/macro}

{/Template}
