////#classDefinition
Aria.classDefinition({
  $classpath: "garden.tree.Fruit"
  // (...)
});
////#classDefinition

////#interfaceDefinition
Aria.interfaceDefinition({
  $classpath: "garden.tree.IFruit"
  // (...)
});
////#interfaceDefinition

////#beanDefinitions
Aria.beanDefinitions({
  $package : "example.beans.SimpleBean"
  // (...)
});
////#beanDefinitions

////#resourcesDefinition
Aria.resourcesDefinition({
  $classpath: 'samples.templates.localization.Res'
  // (...)
});
////#resourcesDefinition


////#loadTemplate
Aria.loadTemplate({
  classpath: "samples.intro.SgtGreeters",
  div: "main"
});
////#loadTemplate

////#load
Aria.load({
  classes: [ /* array of classpaths to be loaded */ ],
  oncomplete: /* a callback */ function() {
    console.log("All my classes have been loaded!");
  }
});
////#load