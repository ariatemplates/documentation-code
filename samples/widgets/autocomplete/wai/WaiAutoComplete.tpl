{Template {
    $classpath : "samples.widgets.autocomplete.wai.WaiAutoComplete",
    $hasScript : true
}}

    {macro main()}

        {@aria:AutoComplete {
            waiAria : true,
            label : "Country",
            labelWidth: 100,
            autoFill : false,
            resourcesHandler : this.nationsHandler,
            waiSuggestionsStatusGetter: this.waiSuggestionsStatusGetter,
            waiSuggestionAriaLabelGetter: this.waiSuggestionAriaLabelGetter
        }/}<br><br>

        {@aria:AutoComplete {
            waiAria : true,
            label : "City",
            labelWidth: 100,
            autoFill : false,
            resourcesHandler : this.citiesHandler,
            waiSuggestionsStatusGetter: this.waiSuggestionsStatusGetter,
            waiSuggestionAriaLabelGetter: this.waiSuggestionAriaLabelGetter
        }/}

    {/macro}

{/Template}
