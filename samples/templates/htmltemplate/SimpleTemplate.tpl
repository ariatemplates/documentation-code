{Template {
	$classpath:'samples.templates.htmltemplate.SimpleTemplate'
}}
	{macro main()}
		{call displayHeader() /}
		{foreach person inArray data.people}
			{call displayInformation(person, person_index + 1) /}
		{/foreach}

	{/macro}


	{macro displayHeader()}
		
		{@aria:Template {
				id: "mySubTemplate",
				defaultTemplate: "samples.templates.htmltemplate.SimpleSubTemplate",
				data : data,
				height: 30,
				width: 400
		} /}

	{/macro}

	{macro displayInformation(person, index)}
				<p>
				${index} - ${person.name},  
				{if person.age < 13}
					child,
				{elseif person.age < 20 /}
					teenager,		
				{else/}
					adult,		
				{/if}
				lives in ${person.livesIn}.	
			</p>
	{/macro}


{/Template}
