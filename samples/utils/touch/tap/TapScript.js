/*
 * Copyright Amadeus
 */
Aria.tplScriptDefinition({
	$classpath : "samples.utils.touch.tap.TapScript",
	$prototype : {
		tapHandler : function (event) {
			event.preventDefault(true);
			var seconds = Number(document.getElementById("seconds").innerHTML);
			var numberOfCallbacks = (aria.core.Browser.isIE7) ? 1 : 0;
			if (aria.core.Timer._numberOfCallbacks === numberOfCallbacks) {
				document.getElementById("tapMe").hidden = true;
				this._countdownDelay(1, this._countdownSeconds);
			}
			if (seconds !== 0) {
				this._updateScore();
			}
			return false;
		},
		_countdownDelay : function (delay, callback) {
			aria.core.Timer.addCallback({
				fn : callback,
				scope : this,
				delay : delay
			});
		},
		_countdownSeconds : function () {
			try {
				var seconds = document.getElementById("seconds");
				var newSeconds = Number(seconds.innerHTML);

				if (newSeconds !== 0) {
					newSeconds -= 1;
					if (newSeconds === 10) {
						var time = document.getElementById("time");
						time.className = "redText";
					}
					if (newSeconds < 10) {
						newSeconds = "0" + newSeconds;
					}
					seconds.innerHTML = newSeconds;
					var numberOfCallbacks = (aria.core.Browser.isIE7) ? 1 : 0;
					if (aria.core.Timer._numberOfCallbacks === numberOfCallbacks) {
						this._countdownDelay(1, this._countdownCentiseconds);
					}
					this._countdownDelay(1000, this._countdownSeconds);
				}
			} catch (e) {}
		},
		_countdownCentiseconds : function () {
			try {
				var seconds = Number(document.getElementById("seconds").innerHTML);
				var centiseconds = document.getElementById("centiseconds");
				var newCentiseconds = Number(centiseconds.innerHTML);
				if (seconds === 0) {
					centiseconds.innerHTML = "00";
				} else if (newCentiseconds === 0) {
					centiseconds.innerHTML = 99;
					this._countdownDelay(10, this._countdownCentiseconds);
				} else {
					newCentiseconds -= 1;
					centiseconds.innerHTML = newCentiseconds;
					this._countdownDelay(10, this._countdownCentiseconds);
				}
			} catch (e) {}
		},
		_updateScore : function () {
			var score = document.getElementById("score");
			var newScore = Number(score.innerHTML) + 1;
			score.innerHTML = newScore;
		}
	}
});

