{Template {
	$classpath : "samples.widgets.widgetlibs.html.checkbox.BaseCheckBoxTag",
	$hasScript : true,
	$wlibs : {
		html : "aria.html.HtmlLibrary"
	}
}}

{macro main ()}

    <div>
        <label>
			{@html:CheckBox {
				bind : {
					checked : {
						inside : data,
						to : "selected"
					}
				}
			}/}

			{section {
				id : "displayId",
				macro : "display",
				bindRefreshTo : [
					{
						inside : data,
						to : "selected"
					}
				]
			}/}
		</label>
    </div>     

{/macro}

{macro display()}
{var selected = this.data.selected ? " selected" : "not selected"/}
the checkbox is <strong>${selected}</strong>.

{/macro}

{/Template}
