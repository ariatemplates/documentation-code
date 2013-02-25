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