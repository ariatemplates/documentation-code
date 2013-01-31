{Template {
	$classpath:'samples.templates.tplinheritance.step1.ParentTemplate'
}}

	{macro main()}
		<b>This is the parent main macro. It calls both parentMacro and overridenMacro.</b>
		<ul>
			<li style="list-style: square;">{call parentMacro()/}</li>
			<li style="list-style: square;">{call overriddenMacro()/}</li>
		</ul>
	{/macro}

	{macro parentMacro()}
		This is parentMacro.<br/>
	{/macro}

	{macro overriddenMacro()}
		This is the parent overriddenMacro.<br/>
	{/macro}


{/Template}