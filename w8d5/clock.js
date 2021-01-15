class Clock {
    constructor() {
        
        // 1. Create a Date object.
        const timeNow = new Date();

        // 2. Store the hours, minutes, and seconds.
        this.hours = timeNow.getHours();
        this.minutes = timeNow.getMinutes();
        this.seconds = timeNow.getSeconds();

        // 3. Call printTime.
        this.printTime();
        // 4. Schedule the tick at 1 second intervals.
        setInterval(this._tick.bind(this),1000);
    }

    printTime() {
        // Format the time in HH:MM:SS
        // Use console.log to print it.
        const time = [this.hours, this.minutes, this.seconds].join(":");
        console.log(time);
    }

    _tick() {
        // 1. Increment the time by one second.
        // 2. Call printTime.
        this.seconds += 1;
        this.printTime();
    }
}

const clock = new Clock();