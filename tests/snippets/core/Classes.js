// Dummy classes "used" by some classes
if (Aria.nspace) {
    Aria.classDefinition({$classpath: "snippets.core.classes.Plant"});
    Aria.classDefinition({$classpath: "snippets.core.classes.Gardener"});
    Aria.classDefinition({$classpath: "org.thirdparty.parsers.JavaScript"});
    Aria.classDefinition({$classpath: "org.thirdparty.parsers.PerlScript"});
}

Aria.classDefinition({
    $classpath: "tests.snippets.core.Classes",
    $extends: "aria.jsunit.TestCase",
    /*
     * This test case only checks that the beans listed in $dependencies are loaded properly
     */
    $dependencies: [
        "snippets.core.classes.IColorfulObject",
        "snippets.core.classes.CustomLogger",
        "snippets.core.classes.Device",
        "snippets.core.classes.DevicesMain",
        "snippets.core.classes.Disk",
        "snippets.core.classes.DynamicDeps",
        "snippets.core.classes.Fruit",
        "snippets.core.classes.FruitUsage",
        "snippets.core.classes.IObject",
        "snippets.core.classes.MainClass",
        "snippets.core.classes.MyLogger",
        "snippets.core.classes.StaticDeps",
        "snippets.core.classes.Vegetable",
        "snippets.core.classes.Vehicle",
        "snippets.core.classes.WorkAgainOnDataTypes",
        "snippets.core.classes.WorkOnDataTypes",
        "snippets.core.classes.Wrapping"
    ],

    $prototype: {
    }

});