Aria.classDefinition({
    $classpath : "snippets.core.skinning.AtSkinButton",
    $singleton : true,
    $prototype : {
        skinName : "atskin",
        skinObject : {
            // //#ButtonSkin
            Button : {
                important : {
                    label : {
                        fontWeight : "bold"
                    }
                },
                simple : {
                    simpleHTML : true
                },
                std : {
                    frame : {
                        frameType : "FixedHeight"
                    },
                    states : {
                        normal : {
                            marginBottom : 5,
                            spriteURLv : "atskin/sprites/buttonCentre_1-4-2.gif",
                            sprHeight : 25,
                            sprWidth : 17,
                            marginTop : 5,
                            color : "#000000",
                            sprIdx : 0,
                            spcLeft : 8,
                            spriteURL : "atskin/sprites/buttonEdges_1-4-2.gif"
                        },
                        disabled : {
                            color : "#B0B0B0",
                            sprIdx : 2
                        },
                        msdown : {
                            marginBottom : 3,
                            marginTop : 7,
                            sprIdx : 1
                        },
                        normalFocused : {
                            sprIdx : 3
                        },
                        msoverFocused : {
                            sprIdx : 3
                        }
                    }
                }
            }
            // //#ButtonSkin
        }
    }
});