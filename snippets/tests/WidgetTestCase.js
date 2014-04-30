/*
 * This snippet is used in the test documentation
 */


var setOfCode = function() {

    ////#clearAll
    Aria.classDefinition({
        $classpath: "MyWidgetTest",
        $extends: "aria.jsunit.WidgetTestCase",
        $dependencies: ["myLibrary.ImageGallery"],
        $prototype: {
            testInitialValueFalse: function () {
                var model = {};
                var cfg = {
                    images: ["one.jpg", "two.jpg"],
                    bind: {
                        index: {
                            inside: model,
                            to: "visible"
                        }
                    }
                };

                var widget = this.createAndInit("myLibrary.ImageGallery", cfg);
                // Assuming that the widget defines a getImageDom method
                // to img tag in the DOM
                var imageElement = widget.getImageDom();

                // Assuming that by default the widget displays the first image
                this.assertEquals(imageElement.src, "one.jpg");

                // Change the datamodel to display the second image
                aria.utils.Json.setValue(model, "visible", 1);

                imageElement = widget.getImageDom();
                this.assertEquals(imageElement.src, "two.jpg");

                widget.$dispose();
            }
        }
    });
    ////#clearAll

    ////#createContainerAndInit
    Aria.classDefinition({
        $classpath: "MyWidgetTest",
        $extends: "aria.jsunit.WidgetTestCase",
        $dependencies: ["myLibrary.Accordion"],
        $prototype: {
            testInitialValueFalse: function () {
                var model = {};
                var cfg = {
                    open: true,
                    bind: {
                        open: {
                            inside: model,
                            to: "open"
                        }
                    }
                };

                var widget = this.createContainerAndInit(
                        "myLibrary.Accordion",
                        cfg,
                        "<div>Test markup</div>"
                );

                // Assuming that the widget defines a getDom method
                var hasMarkup =
                    widget.getDom().getElementsByTagName("div").length > 0;
                this.assertTrue(hasMarkup);

                // Change the datamodel to close the accordion
                // (assuming it remove the content from the DOM)
                aria.utils.Json.setValue(model, "open", false);

                hasMarkup = widget.getDom().getElementsByTagName("div").length > 0;
                this.assertFalse(hasMarkup);

                widget.$dispose();
            }
        }
    });
    ////#createContainerAndInit

    ////#manual
    Aria.classDefinition({
        $classpath: "MyWidgetTest",
        $extends: "aria.jsunit.WidgetTestCase",
        $dependencies: ["myLibrary.ImageGallery"],
        $prototype: {
            testInitialValueFalse: function () {

                // Please don't use this method unless you know what you're doing
                // Use automatic creation instead

                var model = {};
                var cfg = {
                    images: ["one.jpg", "two.jpg"],
                    bind: {
                        index: {
                            inside: model,
                            to: "visible"
                        }
                    }
                };

                // Creates a widget instance
                var widget = new myLibrary.ImageGallery(cfg, this.outObj.tplCtxt);
                widget.writeMarkup(this.outObj);
                this.outObj.putInDOM();
                widget.initWidget();

                // Assuming that the widget defines a getImageDom method
                // to img tag in the DOM
                var imageElement = widget.getImageDom();

                // Assuming that by default the widget displays
                // the first image
                this.assertEquals(imageElement.src, "one.jpg");

                this.outObj.clearAll();
                widget.$dispose();
            }
        }
    });
    ////#manual

    ////#containerWidgets
    var widget = new myLibrary.Accordion(cfg, this.outObj.tplCtxt);
    // Opening widget tag
    widget.writeMarkupBegin(this.outObj);

    // Any additional markup (widget content)
    this.outObj.write("");

    // Closing widget tag
    widget.writeMarkupEnd(this.outObj);

    this.outObj.putInDOM();
    widget.initWidget();
    ////#containerWidgets

};
