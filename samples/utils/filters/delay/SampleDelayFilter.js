/**
 * Sample filter used to test filter delays for a request and a response.
 */
Aria.classDefinition({
    $classpath : 'samples.utils.filters.delay.SampleDelayFilter',
    $extends : 'aria.core.IOFilter',
    $constructor : function (args) {
        this.$IOFilter.constructor.call(this, args);
        if (args == null) {
            this.requestDelay = 5000;
            this.responseDelay = 6000;
        }
    },
    $prototype : {}
});
