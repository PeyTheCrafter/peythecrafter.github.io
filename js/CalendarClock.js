"use strict";
class CalendarClock {
    constructor() {
        this.refresh();
    }
    refresh() {
        this.cc = new Date();
    }
    correct(input) {
        return input < 10 ? '0' + input : input.toString();
    }
    getYear() {
        //We have to substract 100 to the year because Date().getYear() returns current year - 1900.
        this.refresh();
        return this.correct(this.cc.getYear - 100);
    }
    getMonth() {
        this.refresh();
        return this.cc.getMonth() + 1;
    }
    getDay() {
        this.refresh();
        return this.correct(this.cc.getDay());
    }
    getHour() {
        this.refresh();
        return this.correct(this.cc.getHours());
    }
    getMinute() {
        this.refresh();
        return this.correct(this.cc.getMinutes());
    }
    getSecond() {
        this.refresh();
        return this.correct(this.cc.getSeconds());
    }
}
//# sourceMappingURL=CalendarClock.js.map