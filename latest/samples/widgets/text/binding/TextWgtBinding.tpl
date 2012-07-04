{Template {
  $classpath : 'samples.widgets.text.binding.TextWgtBinding',
  $hasScript : false } }

	{macro main ( )}
        <h3>Date Picker</h3>
        {var minDate = new Date()/}
        {var maxDate = new Date(minDate.getFullYear()+1,minDate.getMonth(),minDate.getDate())/}

        {@aria:DatePicker {
            label: "Departure date:",
            labelWidth:150,
            width:300,
            minValue: minDate,
            maxValue: maxDate,
            bind:{
                "value":{to:'view:calvalue',inside:data}
            }
        }/}
        <br/>
        {@aria:Text {
             ellipsis: "...",
             ellipsisLocation: "right",
             width:30,
             bind: {
                text : {to: "view:calvalue" , inside: data,
                    transform :{
                        toWidget : function(text) {
                            var dayDate = new Date(text);
                            var weekday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
                            return weekday[dayDate.getDay()];
                        },
                        fromWidget : function (text) {
                            return null;
                        }
                    }
                }
            }
         }/}
         <br/>
         {@aria:Text {
            ellipsis: "...",
            ellipsisLocation: "right",
             bind: {
                text : {to: "view:calvalue" , inside: data,
                    transform :{
                        toWidget : function(text) {
                            var dayDate = new Date(text);
                            var weekday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
                            return weekday[dayDate.getDay()];
                        },
                        fromWidget : function (text) {
                            return null;
                        }
                    }
                }
            }
         }/}

	{/macro}

{/Template}
