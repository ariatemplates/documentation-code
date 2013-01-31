{Template {
	$classpath : "snippets.widgets.multiselect.Snippet"
}}

	{macro main()}

	   {var data={companies:[],widgets:{company:""}}/}

    	////#wgtMultiSelect
		{@aria:MultiSelect {
            fieldDisplay : "code",
			fieldSeparator : '/',
			displayOptions : {
				// ...
			},
			items : data.companies,
			bind : {
				value : {
					to : "company",
					inside : data.widgets
				}
			}
		}/}
    	////#wgtMultiSelect
		
		////#wgtMultiSelectBind
		{@aria:MultiSelect {
            fieldDisplay : "code",
			fieldSeparator : '/',
			displayOptions : {
				// ...
			},
			items : data.companies,
			bind : {
				value : {
					to : "company",
					inside : data.widgets
				}
			},
			instantBind:true
		}/}
		////#wgtMultiSelectBind
	{/macro}

{/Template}
