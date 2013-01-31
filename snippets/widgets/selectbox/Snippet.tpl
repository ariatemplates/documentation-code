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

	{/macro}

{/Template}
