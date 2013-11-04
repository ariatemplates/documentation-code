Aria.tplScriptDefinition({
	$classpath:  'samples.utils.css.animations.AnimationsScript',
	$prototype:{
	    animateBackground: function() {
			aria.utils.css.Effects.animate("backgroundId", {
                backgroundPositionX: "40"
            }, {queue: true, duration: 400});

            aria.utils.css.Effects.animate("backgroundId", {
                backgroundPositionX: "0"
            }, {queue: true, duration: 400});

            aria.utils.css.Effects.animate("backgroundId", {
                backgroundPositionY: "40"
            }, {queue: true, duration: 400});

            aria.utils.css.Effects.animate("backgroundId", {
                backgroundPositionY: "0"
            }, {queue: true, duration: 400});
		},
		animateBorders: function() {
           aria.utils.css.Effects.animate("borderId", {
                borderLeftWidth: "8"
             }, {queue: true, duration: 400});

             aria.utils.css.Effects.animate("borderId", {
                     borderLeftWidth: "1"
                 }, {queue: true, duration: 400});

            aria.utils.css.Effects.animate("borderId", {
                borderWidth: "8"
            }, {queue: true, duration: 400});

            aria.utils.css.Effects.animate("borderId", {
                borderWidth: "1"
             }, {queue: true, duration: 400});
        },
        animateOutlineWidth: function() {
            aria.utils.css.Effects.animate("outlineWidthId", {
                outlineWidth: "15"
            }, {queue: true, duration: 400});
            aria.utils.css.Effects.animate("outlineWidthId", {
                outlineWidth: "1"
            }, {queue: true, duration: 400});
         },
        animateSpacing: function() {
            aria.utils.css.Effects.animate("spacingId", {
                borderSpacing: "15"
            }, {queue: true, duration: 400});
            aria.utils.css.Effects.animate("spacingId", {
                borderSpacing: "1"
            }, {queue: true, duration: 400});
        },
        animatePosition: function() {
            aria.utils.css.Effects.animate("positionId", {
                left: "15"
            }, {queue: true, duration: 400});
            aria.utils.css.Effects.animate("positionId", {
                left: "0"
            }, {queue: true, duration: 400});
            aria.utils.css.Effects.animate("positionId", {
                top: "15"
            }, {queue: true, duration: 400});
            aria.utils.css.Effects.animate("positionId", {
                top: "0"
            }, {queue: true, duration: 400});
        },
        animateFontsize: function() {
            aria.utils.css.Effects.animate("fontsizeId", {
                fontSize: "35"
            }, {queue: true, duration: 400});
            aria.utils.css.Effects.animate("fontsizeId", {
                fontSize: "18"
            }, {queue: true, duration: 400});
        },
        animateLetterSpacing: function() {
            aria.utils.css.Effects.animate("letterSpacingId", {
                letterSpacing: "50"
            }, {queue: true, duration: 400});
            aria.utils.css.Effects.animate("letterSpacingId", {
                letterSpacing: "0"
            }, {queue: true, duration: 400});
        },
        animateWordSpacing: function() {
            aria.utils.css.Effects.animate("wordSpacingId", {
                wordSpacing: "30"
            }, {queue: true, duration: 400});
            aria.utils.css.Effects.animate("wordSpacingId", {
                wordSpacing: "0"
            }, {queue: true, duration: 400});
        },
        animateTextIndent: function() {
            aria.utils.css.Effects.animate("textIndentId", {
                textIndent: "242"
            }, {queue: true, duration: 400});
            aria.utils.css.Effects.animate("textIndentId", {
                textIndent: "0"
            }, {queue: true, duration: 400});
        },
        animateLineHeight: function() {
            aria.utils.css.Effects.animate("lineHeightId", {
                lineHeight: "80"
            }, {queue: true, duration: 400});
            aria.utils.css.Effects.animate("lineHeightId", {
                lineHeight: "22"
            }, {queue: true, duration: 400});
        },
        animateSize: function() {
            aria.utils.css.Effects.animate("sizeId", {
                width: "242"
            }, {queue: true, duration: 400});
            aria.utils.css.Effects.animate("sizeId", {
                height: "72"
            }, {queue: true, duration: 400});
            aria.utils.css.Effects.animate("sizeId", {
               width: "100", height: "30"
            }, {queue: true, duration: 400});
        },
        animateMinsize: function() {
            aria.utils.css.Effects.animate("minsizeId", {
                minWidth: "242"
            }, {queue: true, duration: 400});
            aria.utils.css.Effects.animate("minsizeId", {
                minHeight: "72"
            }, {queue: true, duration: 400});
            aria.utils.css.Effects.animate("minsizeId", {
               minWidth: "100", minHeight: "30"
            }, {queue: true, duration: 400});
        },
        animateMaxsize: function() {
            aria.utils.css.Effects.animate("maxsizeId", {
                maxWidth: "242"
            }, {queue: true, duration: 400});
            aria.utils.css.Effects.animate("maxsizeId", {
                maxHeight: "72"
            }, {queue: true, duration: 400});
            aria.utils.css.Effects.animate("maxsizeId", {
               maxWidth: "100", maxHeight: "30"
            }, {queue: true, duration: 400});
        },
        animateMargin: function() {
            aria.utils.css.Effects.animate("marginId", {
                margin: "30"
            }, {queue: true, duration: 400});
            aria.utils.css.Effects.animate("marginId", {
                marginBottom: "0"
            }, {queue: true, duration: 400});
            aria.utils.css.Effects.animate("marginId", {
                margin: "0"
            }, {queue: true, duration: 400});
        },
        animatePadding: function() {
            aria.utils.css.Effects.animate("paddingId", {
                padding: "30"
            }, {queue: true, duration: 400});
            aria.utils.css.Effects.animate("paddingId", {
                paddingBottom: "0"
            }, {queue: true, duration: 400});
            aria.utils.css.Effects.animate("paddingId", {
                padding: "0"
            }, {queue: true, duration: 400});
        },
        animateScroll: function() {
            aria.utils.css.Effects.animate("scrollId", {
                scrollLeft : "200"
            }, {queue: true, duration: 400});
            aria.utils.css.Effects.animate("scrollId", {
                scrollTop : "60"
            }, {queue: true, duration: 400});
            aria.utils.css.Effects.animate("scrollId", {
                scrollTop : "0",
                scrollLeft : "0"
            }, {queue: true, duration: 400});
        }
    }
});
