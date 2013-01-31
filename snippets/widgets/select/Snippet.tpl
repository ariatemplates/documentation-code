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

	{/macro}

{/Template}
