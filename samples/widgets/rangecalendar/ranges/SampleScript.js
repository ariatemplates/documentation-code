Aria.tplScriptDefinition({
    $classpath : "samples.widgets.rangecalendar.ranges.SampleScript",
    $prototype : {
        getRanges : function () {
            var now = new Date();
            return [{
                        fromDate : this.addDays(now, 2),
                        toDate : this.addDays(now, 6),
                        classes : {
                            from : "blueRange firstDay",
                            to : "blueRange lastDay",
                            fromTo : "blueRange"
                        }
                    }, {
                        fromDate : this.addDays(now, 15),
                        toDate : this.addDays(now, 24),
                        classes : {
                            from : "greenRange firstDay",
                            to : "greenRange lastDay",
                            fromTo : "greenRange"
                        }
                    }, {
                        fromDate : this.addDays(now, 28),
                        toDate : this.addDays(now, 28),
                        classes : {
                            sameFromTo : "redDay"
                        }
                    }];
        },

        addDays : function (refDate, days) {
            var res = new Date(refDate.getTime());
            res.setDate(res.getDate() + days);
            return res;
        }
    }
});
