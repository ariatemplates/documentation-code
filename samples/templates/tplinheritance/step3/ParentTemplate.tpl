{Template {
	$classpath: 'samples.templates.tplinheritance.step3.ParentTemplate',
	$macrolibs: {
		libParent: 'samples.templates.tplinheritance.step3.LibParent',
		libOverridden: 'samples.templates.tplinheritance.step3.LibParentOverridden'
	}
}}

	{macro main()}
		<b>This is the parent main macro. It calls both parentMacro from libParent and overridenMacro from libOverridden.</b>
		<ul>
			<li style="list-style: square;">{call libParent.parentMacro()/}</li>
			<li style="list-style: square;">{call libOverridden.overriddenMacro()/}</li>
		</ul>
	{/macro}

{/Template}