Aria.classDefinition({
        $classpath : "samples.html.custom.gallery.ImageLibrary",
        $extends : "aria.widgetLibs.WidgetLib",
        $singleton : true,
        $prototype : {
                widgets : {
                        "Gallery" : "samples.html.custom.gallery.GalleryWidget"
                }
        }
});