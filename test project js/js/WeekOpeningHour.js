class WeekOpeningHour extends Domer {
    weekOpeningHour=[];

    constructor(){
        super(); 
        this.weekOpeningHour.push(new OpeningHour("Monday-Friday", "11.30-22.00"));
        this.weekOpeningHour.push(new OpeningHour("Saturday", "12.00-20.00"));
        this.weekOpeningHour.push(new OpeningHour("Sunday", "13:00-20.00"));
    }

    getWeekOpeningHour(){
        let result="";
        for(let openingHour of this.weekOpeningHour){
            result += `
          
            <div>${openingHour.day}</div>
            <div>${openingHour.time}</div>
            <br>
           
            `
        }
        return result;
    }

    render(html){
        return html`
            <section>
                ${this.getWeekOpeningHour()}
            </section>
        `
    }
}

