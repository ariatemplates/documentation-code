Aria.beanDefinitions({
    $package : "samples.widgets.autocomplete.http.WikipediaResourceHandlerBean",
    $description : "Definition of the suggestions used in WikipediaResourceHandler.",
    $namespaces : {
        "base" : "aria.widgets.form.AutoCompleteBean",
        "json" : "aria.core.JsonTypes"
    },
    $beans : {
        "Suggestion" : {
            $type : "base:Suggestion",
            $description : "A Wikipedia article suggestion.",
            $restricted : false,
            $properties : {
                "title" : {
                    $type : "json:String",
                    $description : "Title of the article.",
                    $mandatory : true
                },
                "description" : {
                    $type : "json:String",
                    $description : "A short description of the article."
                },
                "url" : {
                    $type : "json:String",
                    $description : "URL of the article on Wikipedia."
                }
            }
        }
    }
});
