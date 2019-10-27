class OpeningHour extends Domer{
    day = "";
    time = "";

    constructor(day, time){
        super();
        this.day = day;
        this.time = time;
    }

    get day(){
        return this.day;
    }
    get time(){
        return this.time;
    }

    render(html){
        return html`
            <div>
                ${this.day}
                ${this.time}
            </div>
        `
    }
}