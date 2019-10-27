let clearBookingButton = document.querySelector("#clear-button");
let addBookingButton = document.querySelector("#add-button");

class Customer{// no use of this class?
    fname = "";
    lname = "";
    vistingDate = "";
    vistingTime = "";
    tableType = "";
    telNum = "";
    email = "";
    contactPreference = "";
    note = "";
    

    constructor(fname, lname, vistingDate, vistingTime, tableType, telNum, email, contactPreference, note){
        this.fname = fname;
        this.lname = lname;
        this.vistingDate = vistingDate;
        this.vistingTime = vistingTime;
        this.tableType = tableType;
        this.telNum = telNum;
        this.email = email;
        this.contactPreference = contactPreference;
        this.note = note;
   
    }
}

let customerBookingList = [];

clearBookingButton.onclick = clearBooking();
addBookingButton.onclick = addBooking();


function clearBooking(evt){
   
    fname = "";
    lname = "";
    vistingDate = "";
    vistingTime = "";
    tableType = "";
    telNum = "";
    email = "";
    contactPreference = "";
    note = "";

    //console.log(customerBookingList)
}

function addBooking(evt){
    
    customerBookingList.push(new Customer(fname.value, lname.value, vistingDate.value, vistingTime.value, tableType.value, telNum.value, email.value, contactPreference.value, note.value))
    console.log(customerBookingList);

}

new Customer();










