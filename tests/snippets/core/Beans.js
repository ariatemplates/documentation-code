Aria.classDefinition({
    $classpath: "tests.snippets.core.Beans",
    $extends: "aria.jsunit.TestCase",
    /*
     * This test case only checks that the beans listed in $dependencies are loaded properly
     */
    $dependencies: [
        "snippets.core.beans.SimpleBean",
        "snippets.core.beans.AnotherSimpleBean",
        "snippets.core.beans.BaseContactBeans",
        "snippets.core.beans.ContactBeans",
        "snippets.core.beans.GroupManager"
    ],

    $prototype: {
    }

});