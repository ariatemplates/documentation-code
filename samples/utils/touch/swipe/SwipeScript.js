/*
 * Copyright Amadeus
 */
Aria.tplScriptDefinition({
	$classpath : "samples.utils.touch.swipe.SwipeScript",
	$prototype : {
		swipeHandler : function (event) {
			event.preventDefault(true);
			document.getElementById("touchMe").style.visibility = "hidden";
			document.getElementById("swipeDirection").innerHTML = event.direction;
			document.getElementById("swipeDistance").innerHTML = event.distance;
			document.getElementById("swipeLength").innerHTML = event.duration;
			document.getElementById("swipeStartX").innerHTML = event.startX;
			document.getElementById("swipeStartY").innerHTML = event.startY;
			document.getElementById("swipeEndX").innerHTML = event.endX;
			document.getElementById("swipeEndY").innerHTML = event.endY;
			return false;
		}
	}
});