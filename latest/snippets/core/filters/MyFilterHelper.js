Aria.classDefinition({
	$classpath: 'ariadoc.snippets.core.filters.MyFilterHelper',
	$singleton: true,
	$dependencies: [
		'aria.core.IOFiltersMgr'
	],
	$prototype: {
		////#attachFilter
		attachFilters: function() {
			aria.core.IOFiltersMgr.addFilter('ariadoc.snippets.core.filters.IOFilter');
		},
		////#attachFilter

		////#detachFilter
		dettachFilters: function() {
			aria.core.IOFiltersMgr.removeFilter('ariadoc.snippets.core.filters.IOFilter');
		},
		////#detachFilter

		////#delayFilter
		attachWithDelay: function() {
			aria.core.IOFiltersMgr.addFilter({
				classpath: 'ariadoc.snippets.core.filters.IoDelayFilter',
				initArgs: {
					requestDelay : 1000,
					responseDelay : 1000
				}
			});
		}
		////#delayFilter
	}
});