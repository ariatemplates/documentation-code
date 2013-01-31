Aria.tplScriptDefinition({
	$classpath : "samples.utils.touch.touchstart.TouchStartScript",
	$prototype : {
		touchHandler : function (event) {
			event.preventDefault(true);
			document.getElementById("touchMe").style.visibility = "hidden";
			var startX = (event.pageX) ? event.pageX : event.clientX;
			var startY = (event.pageY) ? event.pageY : event.clientY;
			document.getElementById("results").innerHTML = "touchstart at: {x:" + startX + ", y:" + startY + "} ";
			document.getElementById("results").style.display = "block";
			return false;
		}
	}
});