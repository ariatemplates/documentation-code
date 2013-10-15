Aria.tplScriptDefinition({
	$classpath:  'samples.utils.css.animations.complex.AnimationsScript',
	$prototype:{
		onClick: function() {
      aria.utils.css.Effects.animate("stick", {
          top : "170"
      }, {
          duration : 300,
          queue : "stick",
          onEndAnimation : function () {
              aria.utils.css.Effects.animate("ball9", {
                  top : "77"
              }, {
                  duration : 300,
                  queue : "9",
                  onEndAnimation : function () {
                      aria.utils.css.Effects.animate("ball13", {
                          top : "0",
                          left : "345"
                      }, {
                          duration : 300,
                          queue : "13"
                      });
                      aria.utils.css.Effects.animate("ball13", {
                          top : "146",
                          left : "267"
                      }, {
                          duration : 800,
                          queue : "13",
                          onEndAnimation : function () {
                              aria.utils.css.Effects.animate("ball14", {
                                  top : "193",
                                  left : "241"
                              }, {
                                  duration : 200,
                                  queue : "14",
                                  onEndAnimation : function () {
                                      aria.utils.css.Effects.animate("ball8", {
                                          top : "242",
                                          left : "153"
                                      }, {
                                          duration : 800,
                                          queue : "8",
                                          onEndAnimation : function () {
                                              aria.utils.css.Effects.animate("pin", {
                                                  height : "0",
                                                  width : "0"
                                              }, {
                                                  duration : 1500,
                                                  onEndAnimation : function () {
                                                      alert("well done!");
                                                  }
                                              });
                                          }
                                      });
                                  }
                              });
                              aria.utils.css.Effects.animate("ball14", {
                                  top : "205",
                                  left : "230"
                              }, {
                                  duration : 500,
                                  queue : "14"
                              });
                          }
                      });
                      aria.utils.css.Effects.animate("ball13", {
                          top : "158",
                          left : "257"
                      }, {
                          duration : 500,
                          queue : "13"
                      });

                  }
              });

              aria.utils.css.Effects.animate("ball9", {
                  top : "0",
                  left : "440"
              }, {
                  duration : 500,
                  queue : "9"
              });

              aria.utils.css.Effects.animate("ball9", {
                  top : "200",
                  left : "525"
              }, {
                  duration : 1500,
                  queue : "9"
              });
          }
      });

      aria.utils.css.Effects.animate("stick", {
          top : "200"
      }, {
          queue : "stick"
      });


		}			
	}
});