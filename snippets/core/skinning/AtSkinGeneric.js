////#GenericWidgetSkin
Aria.classDefinition({
    $classpath : "aria.widgets.AriaSkin",
    $singleton : true,
    $prototype : {
        skinName : "mySkin",
        skinObject : {
            PageGeneral : {

            	//define color, css, font etc settings for the appplication
            },
            Icon : {
            	//define different icons which you would like to use in widgets
            	myIcon:{
            		content : {

            		},
            		spriteUrl : "myOwnGif"
            	}
            },
            myWidget : {
                mySkinClass : {
						// properties gets inherited from 'std' skinclass
                },
                std : {
                    	// default skinclass
                    	// properties documented in AriaSkinBeans.js
                    states : {
                        state1 : {
							// properties gets inherited from 'normal' state
                        },
                        normal : {
							// default state
                        }

                    }
                }
            }
           
        }
    }
});
////#GenericWidgetSkin