/**
 * This is the module controller for the filter delay sample. Will make the request using a filter if enabled and using
 * a time delay if selected.
 */
Aria.classDefinition({
    $classpath : 'samples.utils.filters.delay.TemplateFilterDelayController',
    $extends : 'aria.templates.ModuleCtrl',
    $implements : ['samples.utils.filters.delay.ITemplateFilterDelayController'],
    $constructor : function () {
        this.$ModuleCtrl.constructor.call(this);
        this._data = {
            selectedValue1 : [0],
            selectDisabled1 : true
        };
    },
    $prototype : {
        $publicInterfaceName : "samples.utils.filters.delay.ITemplateFilterDelayController",
        /**
         * Fake request using either a filter and a delay, a filter with no delay, or no filter.
         */
        search : function () {
            var filterDelay = this._data.selectedValue1.toString();
            if (!this._data.selectDisabled1) {
                aria.core.IOFiltersMgr.addFilter({
                    classpath : 'samples.utils.filters.delay.SampleDelayFilter',
                    initArgs : {
                        requestDelay : filterDelay
                    }
                });
            }
            this.submitJsonRequest("actionName", {
                myData : "value"
            }, {
                fn : this._onFilterDelaysResponse,
                scope : this
            });
        },
        /**
         * Callback used to handle the response for search.
         */
        _onFilterDelaysResponse : function (evt) {
            if (this._data.selectDisabled1) {
                alert('Request complete without using a filter.');
            } else if (this._data.selectedValue1 > 0) {
                alert('Request complete using a filter and a delay of:' + this._data.selectedValue1 + 'ms.');
            } else {
                alert('Request complete using a filter with no delay.');
            }
            aria.core.IOFiltersMgr.removeFilter('samples.utils.filters.delay.SampleDelayFilter');
        }
    }
});
