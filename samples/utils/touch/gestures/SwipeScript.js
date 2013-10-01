Aria.tplScriptDefinition({
	$classpath : "samples.utils.touch.gestures.SwipeScript",
	$prototype : {
		swipeHandler : function (event) {
			event.preventDefault(true);
			document.getElementById("touchMe").style.visibility = "hidden";
			document.getElementById("swipeDirection").innerHTML = event.detail.direction;
			document.getElementById("swipeDistance").innerHTML = event.detail.distance;
			document.getElementById("swipeLength").innerHTML = event.duration;
			document.getElementById("swipeStartX").innerHTML = event.detail.startX;
			document.getElementById("swipeStartY").innerHTML = event.detail.startY;
			document.getElementById("swipeEndX").innerHTML = event.detail.endX;
			document.getElementById("swipeEndY").innerHTML = event.detail.endY;
			return false;
		}
	}
});