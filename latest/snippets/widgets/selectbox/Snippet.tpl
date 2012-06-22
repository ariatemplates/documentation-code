{Template {
	$classpath : "ariadoc.snippets.widgets.selectbox.Snippet" } }

	{macro main ( )}

		////#wgtSelectBoxField
		{@aria:SelectBox {
			options : data.countries,
			bind : {
				value : {
					to : country,
					inside : data.widgets
				}
			}
		}
		////#wgtSelectBoxField

	{/macro}

{/Template}
