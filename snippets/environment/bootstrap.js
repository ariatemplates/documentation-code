////#timeFormatEnv
aria.core.AppEnvironment.setEnvironment({
  "timeFormats":{
    "shortFormat" : "hh-mm",
    "fullFormat"  : "hh-mm-ss"
   }
});
////#timeFormatEnv

////#widgetLibs
aria.core.AppEnvironment.setEnvironment({
  // ...
  defaultWidgetLibs : {
    // the standard aria library can be changed for the whole application here
    "aria" : "aria.widgets.AriaLib", // here, we keep the default aria library
    // declare the custom library :
    "mycustomlib" : "samples.customlib.MyCustomLibrary"
  }
});
////#widgetLibs



Aria.load({
  classes: ['aria.core.log.WindowAppender'],
  oncomplete: function() {
    ////#addAppender
    aria.core.Log.addAppender(new aria.core.log.WindowAppender());
    ////#addAppender
  }
});

////#clearAppenders
aria.core.Log.clearAppenders();
////#clearAppenders

////#resetLogLevel
aria.core.Log.resetLoggingLevels();
aria.core.Log.setLoggingLevel("", aria.core.Log.LEVEL_ERROR);
aria.core.Log.setLoggingLevel("aria.", aria.core.Log.LEVEL_INFO);
aria.core.Log.setLoggingLevel("my.package.*", aria.core.Log.LEVEL_DEBUG);
////#resetLogLevel

