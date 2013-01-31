{Template {
  $classpath: "samples.widgets.list.binding.ListBinding"
}}

  {macro main()}
    <div style="float:left;width:40%">
	    <p>Sample List widget Binding</p>
	    {@aria:CheckBox {
	        label: "Multiple select",
	        labelPos: "right",
	        bind:{
	            value:{inside: data, to: 'multipleSelect1'}
	        }
	    }/}
	    {@aria:List {
	        items : data.items,
	        minWidth:100,
	        block: true,
	        bind: {
	                multipleSelect: {inside: data, to: 'multipleSelect1'},
	                selectedValues: {inside:data, to:"selectedValue1"}
	            }
	    }/}
	    {@aria:CheckBox {
	        label: "Enable List",
	        labelPos: "right",
	        bind:{
	            value:{inside: data, to: 'selectDisabled1'}
	        }
	    }/}
	    {@aria:List {
	        items : data.items,
	        minWidth:100,
	        block: true,
	        bind: {
	                disabled: {inside: data, to: 'selectDisabled1',
	                    transform : 'aria.widgets.transform.NotTransform'},
	                selectedValues: {inside:data, to:"selectedValue1"}
	            }
	    }/}
    </div>
    <div style="float:left;margin:60px">
	    <p>Selected values</p>
	    {@aria:Text {
	      bind: {
	        text:{inside: data, to: 'selectedValue1'}
	      }
	    } /}
    </div>

   {/macro}

{/Template}