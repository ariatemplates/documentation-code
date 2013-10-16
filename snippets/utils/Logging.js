Aria.classDefinition({
  $classpath: "snippets.utils.Logging",
  $singleton: true,
  $prototype: {
    /* methods to know
    ////#methodsToKnow
    this.$logDebug(msg, msgArgs, o);
    this.$logInfo(msg, msgArgs, o);
    this.$logWarn(msg, msgArgs, o);
    this.$logError(msg, msgArgs, o);
    ////#methodsToKnow
    */

    ////#simpliestUsage
    simpleLog: function() {
      this.$logInfo("Processing something ...");
    }
    ////#simpliestUsage





    /* Bookmarklets for debugTool
    ////#enableContextualMenu
    javascript:aria.core.AppEnvironment.updateEnvironment({contextualMenu:{enabled:true}});
    ////#enableContextualMenu
    ////#disableContextualMenu
    javascript:aria.core.AppEnvironment.updateEnvironment({contextualMenu:{enabled:false}});
    ////#disableContextualMenu


    ////#enableDebugTools
    javascript:Aria.load({classes:['aria.tools.ToolsBridge'],oncomplete:function(){aria.tools.ToolsBridge.open()}});
    ////#enableDebugTools
    */
  }
});
