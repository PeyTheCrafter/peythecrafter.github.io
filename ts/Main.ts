class Main {
    private cc = new CalendarClock();
    private util = new Utils();
    constructor() {
        this.util.debug("Main constructor");
    }

    public showTime() {
        this.util.debug("Displaying time.");
        this.util.getById("hours").innerHTML = this.cc.getHour();
        this.util.getById("minutes").innerHTML = this.cc.getMinute();
        this.util.getById("seconds").innerHTML = this.cc.getSecond();
    }

    public showDate() {

    }
}