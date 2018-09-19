class CalendarClock {
    private cc;

    constructor() {
        this.refresh();
    }

    private refresh() {
        this.cc = new Date();
    }

    private correct(input: number) {
        return input < 10 ? '0' + input : input.toString();
    }

    public getYear(): string {
        //We have to substract 100 to the year because Date().getYear() returns current year - 1900.
        this.refresh();
        return this.correct(this.cc.getYear - 100);
    }

    public getMonth(): string {
        this.refresh();
        return this.cc.getMonth() + 1;
    }

    public getDay(): string {
        this.refresh();
        return this.correct(this.cc.getDay());
    }

    public getHour(): string {
        this.refresh();
        return this.correct(this.cc.getHours());
    }

    public getMinute(): string {
        this.refresh();
        return this.correct(this.cc.getMinutes());
    }

    public getSecond(): string {
        this.refresh();
        return this.correct(this.cc.getSeconds());
    }
}