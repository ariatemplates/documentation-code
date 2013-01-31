{Template {
  $classpath:'samples.widgets.splitter.TemplateSplitter',
  $hasScript : true,
  $width : {min: 300, max: 580}
}}
  {macro main()}  

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
    
    <br/><br/>
    {@aria:Button {
      label:"Increment size1 +50px",
      onclick : {fn : changeState,args:"mOnePlus"}
    } /}
    {@aria:Button {
      label:"Decrement size1 -50px",
      onclick : {fn : changeState,args:"mOneMinus"}
    } /}  
    {@aria:Button {
      label:"Increment size2 +50px",
      onclick : {fn : changeState,args:"mTwoPlus"}
    } /}
    {@aria:Button {
      label:"Decrement size2 -50px",
      onclick : {fn : changeState,args:"mTwoMinus"}
    } /} 
  <br/> <br/>

    
  {/macro}
  
  {macro PanelOne()}
     <div style="padding:5px;">
    <h3> First panel </h3>
     Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas viverra. Ut volutpat erat a tellus. Duis ligula leo, facilisis posuere, commodo vel, porta sed, sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum leo nunc, iaculis rutrum, vulputate quis, tincidunt eu, nulla. Proin nulla. Sed hendrerit ante id purus. Quisque mattis adipiscing lacus. Nulla facilisi. Aliquam in leo. Fusce dui tellus, fermentum in, adipiscing ac, placerat vehicula, elit. Phasellus auctor dolor vel felis. Aliquam rutrum. Proin eget sem ac justo varius convallis. Nulla accumsan, justo at tincidunt imperdiet, dolor lorem tincidunt ante, et pretium leo tellus sed est. Proin sit amet enim.     
   </div>
   
  {/macro}
    
    
  {macro PanelTwo()}
    <div style="padding:5px;">
    <h3> Second panel </h3>
    <p>After Refresh:<b>${data.counter}</b></p>
    {@aria:TextField {
    label: "Standard",
    labelPos: "left",
    width: 280,
    block: true,
    labelWidth: 100 
    }/}
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas viverra. Ut volutpat erat a tellus. Duis ligula leo, facilisis posuere, commodo vel, porta sed, sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum leo nunc, iaculis rutrum, vulputate quis, tincidunt eu, nulla. Proin nulla. Sed hendrerit ante id purus. Quisque mattis adipiscing lacus. Nulla facilisi. Aliquam in leo. Fusce dui tellus, fermentum in, adipiscing ac, placerat vehicula, elit. Phasellus auctor dolor vel felis. Aliquam rutrum. Proin eget sem ac justo varius convallis. Nulla accumsan, justo at tincidunt imperdiet, dolor lorem tincidunt ante, et pretium leo tellus sed est. Proin sit amet enim. </p>
  </div>
  {/macro} 
  
{/Template}