{Template {
	$classpath : "samples.html.custom.gallery.Images",
	$wlibs : {
		image : "samples.html.custom.gallery.ImageLibrary"
	},
	$hasScript : true,
	$css : ["samples.html.custom.gallery.ControlsStyle"]
}}

{macro main()}

{section {
	id : "buttons",
	macro : "controlButton",
	bindRefreshTo : [{
		inside : data,
		to : "visible"
	}]
}/}


{@image:Gallery {
	images : data.images,
	visible : data.visible,
	bind : {
		visible : {
			inside : data,
			to : "visible"
		}
	}
}/}

{/macro}

{macro controlButton ()}

<div class="controls">
	<div class="thumbnails">
		<ul>
			{foreach image inArray data.images}
				<li
					{if image_index === data.visible} class="visible"{/if}
					{on click {
						fn : setVisible,
						args : image_index
					}/}
				>${image_ct}</li>
			{/foreach}
		</ul>
	</div>
</div>
{/macro}
{/Template}