/*
 * Copyright Amadeus
 */
Aria.tplScriptDefinition({
	$classpath : "samples.utils.touch.touchmove.TouchMoveScript",
	$prototype : {
		touchHandler : function (event) {
			event.preventDefault(true);
			document.getElementById("touchMe").style.visibility = "hidden";
			var moveX = (event.pageX) ? event.pageX : event.clientX;
			var moveY = (event.pageY) ? event.pageY : event.clientY;
			document.getElementById("results").innerHTML = "touchmove : {x:" + moveX + ", y:" + moveY + "} ";
			document.getElementById("results").style.display = "block";
			return false;
		}
	}
});