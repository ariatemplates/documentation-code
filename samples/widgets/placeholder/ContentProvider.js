/*
 * Copyright Amadeus
 */
/**
 * Sample Content Provider
 */
Aria.classDefinition({
	$classpath : 'samples.widgets.placeholder.ContentProvider',
	$implements : ['aria.embed.IContentProvider'],
	$constructor : function () {},
	$destructor : function () {},
	$prototype : {
		/**
		 * Provide the sample contents
		 */
		getContent : function (placeholderPath) {
			switch (placeholderPath) {
				case 'body' :
					return [
							'<div class="bodyTitle">This is the <span class="placeholderName">"body"</span> placeholder.</div>',
							'<p class="placeholder_description">It includes some html contents, and a subtemplate below:</p>',
							{
								classpath : 'samples.widgets.placeholder.Subtemplate'
							}];
					break;
				case 'body.sample' :
					return ['<p class="placeholder_description">This is the content of the <span class="placeholderName">sample</span> placeholder '
							+ '<span style="font-weight: bold;">INCLUDED</span> in the <span class="placeholderName">body</span> placeholder ("body.sample")</p>'];
					break;
				case 'sample' :
					return ['<p class="placeholder_description">This is the content of the <span class="placeholderName">sample</span> placeholder '
							+ '<span style="font-weight: bold;">NOT</span> included in the <span class="placeholderName">body</span> placeholder ("sample")</p>'];
					break;
				default :
					break;

			}

		}
	}
});
