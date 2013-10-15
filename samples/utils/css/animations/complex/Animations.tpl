{Template {
  $classpath:'samples.utils.css.animations.complex.Animations',
  $hasScript: true,
  $dependencies: ["aria.utils.css.Effects"]
}}
	{macro main()}
		<div id="exampleContainer" style="background:#0B610B; height: 500px; position:relative;">
            <p style="color: white; padding: 30px; font-weight: bold;">Click on the stick</p>
            <img id="stick" {on click {fn:"onClick"}/} src="${data.imgPath}${data.images[5].url}" style="position:absolute; top:200px; left:400px; height:300px;">
            <img id="ball8" src="${data.imgPath}${data.images[2].url}" style="position:absolute; top:220px; left:200px; height:50px; z-index:10">
            <img id="ball9" src="${data.imgPath}${data.images[3].url}" style="position:absolute; top:122px; left:387px; height:50px;">
            <img id="ball13" src="${data.imgPath}${data.images[0].url}" style="position:absolute; top:40px; left:354px; height:50px;">
            <img id="ball14" src="${data.imgPath}${data.images[1].url}" style="position:absolute; top:190px; left:244px; height:50px;">
            <img id="pin" src="${data.imgPath}${data.images[4].url}" style="position:absolute; top: 265px; left: 148px; height:50px;">
        </div>
	{/macro}


{/Template}