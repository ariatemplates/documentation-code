{Template {
	$classpath:'samples.templates.tplinheritance.step2.ChildTemplate',
	$extends:'samples.templates.tplinheritance.step2.ParentTemplate',
	$hasScript: true
}}

	// There is no need to have a main macro in this template as
	// it is inherited from ParentTemplate

	{macro overriddenMacro()}
		This is the child overriddenMacro. It calls the parent overriddenMacro, and childMacro.<br/>
		<ul>
		<li style="list-style: circle;">{call $ParentTemplate.overriddenMacro()/}</li>
		<li style="list-style: circle;">{call childMacro()/}</li>
		</ul>
	{/macro}

	{macro childMacro()}
		This is childMacro, which uses the scriptChildMethod, and calls parentMacro.<br/>
		<ul>
		<li style="list-style: disc;">${scriptChildMethod()}</li>
		<li style="list-style: disc;">{call parentMacro()/}</li>
		</ul>
	{/macro}

{/Template}