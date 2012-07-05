Aria.tplScriptDefinition({
	$classpath : 'samples.widgets.calendar.binding.CustomizedCalendarScript',
	$constructor : function () {
		this.dateUtils = aria.utils.Date;
	},
	$prototype : {
		_keyActions : {
			37 : {/* KC_ARROW_LEFT */
				increment : -7,
				incrementUnit : "D"
			},
			38 : {/* KC_ARROW_UP */
				increment : -1,
				incrementUnit : "D"
			},
			39 : {/* KC_ARROW_RIGHT */
				increment : 7,
				incrementUnit : "D"
			},
			40 : {/* KC_ARROW_DOWN */
				increment : 1,
				incrementUnit : "D"
			}
		},
		onModuleEvent : function (evt) {
			if (evt.name == "update") {
				this.$refresh();
			} else if (evt.name == "keyevent") {
				var keyAnswer = this._keyActions[evt.keyCode];
				if (keyAnswer) {
					this.$json.inject(keyAnswer,evt,false);
				}
			}
		},

		clickDay : function (evt) {
			var date = evt.target.getExpando("date");
			if (date) {
				var jsDate = new Date(parseInt(date));
				this.moduleCtrl.dateClick({date: jsDate});
			}
		},

		getClassForDay : function (day) {
			var res = [];
			var baseCSS = this.skin.baseCSS;
			res.push(baseCSS+"day");
			res.push(baseCSS+"mouseOut");
			if (day.isWeekend) {
				res.push(baseCSS+"weekEnd");
			}
			if (day.isSelected) {
				res.push(baseCSS+"selected");
			}
			if (day.isToday) {
				res.push(baseCSS+"today");
			}
			res.push(day.isSelectable ? baseCSS+"selectable" : baseCSS+"unselectable");
			return res.join(' ');
		},

		mouseOverDay : function (evt) {
			var date = evt.target.getExpando("date");
			if (date) {
				evt.target.setClassName(evt.target.getClassName().replace(this.skin.baseCSS+"mouseOut", this.skin.baseCSS+"mouseOver"));
			}
		},

		mouseOutDay : function (evt) {
			var date = evt.target.getExpando("date");
			if (date) {
				evt.target.setClassName(evt.target.getClassName().replace(this.skin.baseCSS+"mouseOver", this.skin.baseCSS+"mouseOut"));
			}
		}
	}
});