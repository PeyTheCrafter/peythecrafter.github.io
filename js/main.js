"use strict";
class Main {
    constructor() {
        this.cc = new CalendarClock();
        this.util = new Utils();
        this.util.debug("Main constructor");
    }
    showTime() {
        this.util.debug("Displaying time.");
        this.util.getById("hours").innerHTML = this.cc.getHour();
        this.util.getById("minutes").innerHTML = this.cc.getMinute();
        this.util.getById("seconds").innerHTML = this.cc.getSecond();
    }
    showDate() {
    }
}
//# sourceMappingURL=Main.js.map