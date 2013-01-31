/*
 * Copyright Amadeus
 */
Aria.tplScriptDefinition({
	$classpath : "samples.utils.touch.touchend.TouchEndScript",
	$prototype : {
		touchHandler : function (event) {
			event.preventDefault(true);
			document.getElementById("touchMe").style.visibility = "hidden";
			document.getElementById("results").style.display = "block";
			if (event.type === "touchstart" || event.type === "mousedown") {
				document.getElementById("results").innerHTML = "You have started touching the screen.";
			} else {
				document.getElementById("results").innerHTML = "You have stopped touching the screen.";
			}
			return false;
		}
	}
});