{Template {
    $classpath : "snippets.widgets.snippet.Splitter"
}}

{macro main()}

  ////#wgtSplitter
  {@aria:Splitter {
    sclass: "std",
    orientation:"horizontal",
    bind:{
      size1: {to: "firstPanelSize",inside:data},
      size2: {to: "secondPanelSize",inside:data}
    },
    border:true,
    size1:100,
    size2:100,
    height:400,
    width:496,
    adapt:"size1", //["size1","size2","both"]
    macro1:'PanelOne',
    macro2:'PanelTwo'
  }}
  {/@aria:Splitter}
  ////#wgtSplitter
{/macro}

{macro PanelOne()}
  <div style="padding:5px;">
    <h3> First panel </h3>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas viverra. Ut volutpat erat a tellus. Duis ligula leo, facilisis posuere, commodo vel, porta sed, sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum leo nunc, iaculis rutrum, vulputate quis, tincidunt eu, nulla. Proin nulla. Sed hendrerit ante id purus. Quisque mattis adipiscing lacus. Nulla facilisi. Aliquam in leo. Fusce dui tellus, fermentum in, adipiscing ac, placerat vehicula, elit. Phasellus auctor dolor vel felis. Aliquam rutrum. Proin eget sem ac justo varius convallis. Nulla accumsan, justo at tincidunt imperdiet, dolor lorem tincidunt ante, et pretium leo tellus sed est. Proin sit amet enim.</p>
  </div>
{/macro}


{macro PanelTwo()}
  <div style="padding:5px;">
    <h3> Second panel </h3>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas viverra. Ut volutpat erat a tellus. Duis ligula leo, facilisis posuere, commodo vel, porta sed, sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum leo nunc, iaculis rutrum, vulputate quis, tincidunt eu, nulla. Proin nulla. Sed hendrerit ante id purus. Quisque mattis adipiscing lacus. Nulla facilisi. Aliquam in leo. Fusce dui tellus, fermentum in, adipiscing ac, placerat vehicula, elit. Phasellus auctor dolor vel felis. Aliquam rutrum. Proin eget sem ac justo varius convallis. Nulla accumsan, justo at tincidunt imperdiet, dolor lorem tincidunt ante, et pretium leo tellus sed est. Proin sit amet enim. </p>
  </div>
{/macro}

{/Template}