class SpecialDish extends Domer{
    dishName = "";
    dishPrice = "";
    dishIngredient = "";
    dishPicture = "";

    constructor(dishName, dishPrice, dishIngredient, dishPicture){
        super();
        this.dishName = dishName;
        this.dishPrice = dishPrice;
        this.dishIngredient = dishIngredient;
        this.dishPicture = dishPicture;
    }

    render(html){
        return html`
            <div>
                ${this.dishName}
                ${this.dishPrice}
                ${this.dishIngredient}
                ${this.dishPicture}

            
            </div>

        
        `

    }
}