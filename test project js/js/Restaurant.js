class Restaurant extends Domer{
    resName = "";
    resTelNum = "";
    adress = "";
    resEmail = "";
    weekOpeningHour = new WeekOpeningHour();
    
    constructor(){
        super();
        this.resName = resName;
        this.resTelNum = resTelNum;
        this.adress = adress;
        this.resEmail = resEmail;
        this.weekOpeningHour = weekOpeningHour;
    }

    onBookTableClick(){
        return window.location.href = "http://127.0.0.1:5500/indexBooking.html"
    }

    onWeekSpecialClick(){
        return window.location.href = "http://127.0.0.1:5500/indexWeekSpecial.html"
    }
    render(html){
        return html`
            <section>
                <div>
                    <h1>Welcome to ${this.resName}!</h1>
                    <hr>
                </div>

                <div>
                    <button type="button">Register Account</button>
                    <button type="button">Log In</button>
                    <hr>
                </div>

                <div>
                    <button type="button" click="onBookTableClick">Book A Table</button>
                    <hr>
                </div>

                <div>
                    <button type="button" click="onWeekSpecialClick">Week's Special</button>
                    <hr> 
                </div>

                <div>
                    Contact Infomation:<br>
                    Telephone Number: ${this.resTelNum}<br>
                    Adress: ${this.adress}<br>
                    Email: ${this.resEmail}<br>
                    <hr>
                </div>
                <div id="week-open">
                    ${this.weekOpeningHour}
                    <hr>
                </div>
            </section>
        `
    }
}
let resName = "Lisa Restaurant";
let resTelNum = "0790798888";
let adress = "stralsundvage 13";
let resEmail = "HelloWorld@gmail.com";
new Restaurant();