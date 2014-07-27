define(function() {

    /**
     * TimeController
     *
     * Creates the universal time for the application. The current time is held in the
     * clock property. The delay property speeds or slows down time.
     *
     *
     *
     *
     *
     *
     */
    var TimeController = {
        offset: null,
        clock: 1,
        interval: null,
        delay: 1, // seconds

        start: function() {
            var TimeController = this;

            if (!TimeController.interval) {
                TimeController.offset = Date.now();

                TimeController.interval = setInterval(function() {
                    TimeController.clock += TimeController.getDelta(TimeController.offset);
                }, TimeController.delay);
            }
        },

        stop: function() {
            if (TimeController.interval) {
                clearInterval(TimeController.interval);

                TimeController.interval = null;
            }
        },

        reset: function() {
            TimeController.clock = 0;
        },

        getDelta: function(offset) {
            var now = Date.now(),
                os  = offset ? offset : 1,
                d   = now - os
            ;

            TimeController.offset = now;

            return d;
        },

        getTime: function() {
            return TimeController.clock / 1000;
        }
    };

    return TimeController;
});
