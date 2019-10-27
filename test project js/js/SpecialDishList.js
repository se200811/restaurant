class SpecialDishList extends Domer {
    dishList = [];

    constructor(){
        super();
        this.dishList.push(new SpecialDish("Fries Chicken", 100, "fish", "pic1"));
        this.dishList.push(new SpecialDish("name2", 200, "fish", "pic2"));
        this.dishList.push(new SpecialDish("name3", 300, "fish", "pic3"));
        this.dishList.push(new SpecialDish("name4", 400, "fish", "pic4"));
        this.dishList.push(new SpecialDish("name5", 500, "fish", "pic5"));
        this.dishList.push(new SpecialDish("name6", 600, "fish", "pic6"));
        this.dishList.push(new SpecialDish("name7", 700, "fish", "pic7"));
    }

    getDishList(){
        let result="";
        for(let specialDish of this.dishList){
            result += `
            <section id="list">
            <div>${specialDish.dishName}</div>
            <div>${specialDish.dishPrice}</div>
            <div>${specialDish.dishIngredient}</div>
            <div>${specialDish.dishPicture}</div> 
            <br>
            </section>
            `
        }
        return result;
    }

    render(html){
        return html`
            <div id="dish-list">
                ${this.getDishList()}
               

            
            </div>

        
        `

    }
}
new SpecialDishList();