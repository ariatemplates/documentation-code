{Template {
	$classpath:'samples.templates.tplinheritance.step2.ParentTemplate',
	$hasScript: true
}}

	{macro main()}
		<b>This is the parent main macro. It calls both parentMacro and overridenMacro.</b>
		<ul>
			<li style="list-style: square;">{call parentMacro()/}</li>
			<li style="list-style: square;">{call overriddenMacro()/}</li>
		</ul>
	{/macro}

	{macro parentMacro()}
		This is parentMacro, which uses scriptParentMethod.
		<ul>
  			<li style="list-style: circle;">${scriptParentMethod()}</li>
		</ul>
	{/macro}

	{macro overriddenMacro()}
		This is parent overriddenMacro, which uses scriptOverriddenMethod.
		<ul>
  			<li style="list-style: disc;">${scriptOverriddenMethod()}</li>
		</ul>
	{/macro}


{/Template}