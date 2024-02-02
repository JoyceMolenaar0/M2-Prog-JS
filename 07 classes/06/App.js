class Dino {
    constructor(naam, vleeseter, leeftijd, leeft, honger) 
    {
        this.naam = naam;
        this.vleeseter = vleeseter;
        this.leeftijd = leeftijd;
        this.leeft = leeft;
        this.honger = honger;
    }

    eatFood(foodToEat) 
    {
        foodToEat.leeft = false;
        this.honger = false;

        console.log('Ik ben een: ' + this.naam);
        console.log("Ik eet nu " + foodToEat.naam);
        console.log("Mijn honger nu: " + this.honger);
    }
}


class Plant {
    constructor(naam, leeft) 
    {
        this.naam = naam;
        this.leeft = leeft;
    }

    eatFood(foodToEat) 
    {
        this.honger = false;

        console.log('Ik ben een: ' + this.naam);
        console.log("Ik eet nu " + foodToEat.naam);
        console.log("Mijn honger nu: " + this.honger);

    }
}

class App {
    runApplication() 
    {
        let Vleeseter = new Dino('Thylacoleo', true, 15, true, 95);
        let plantenEter = new Dino("Gacha", false, 14, true, 95);
        let Plant1 = new Plant('Gras', true);
        let Plant2 = new Plant('Struik', true);

        console.log(Plant2);
        console.log(Plant1);
        console.log(Vleeseter);
        console.log(plantenEter);

        console.log('De leeftijd van deze ' + Vleeseter.naam + ' is: ' + Vleeseter.leeftijd);
        console.log('En eet deze ' + Vleeseter.naam + ' vlees? ' + Vleeseter.vleeseter);

        plantenEter.eatFood(Plant1);
        plantenEter.eatFood(Plant2);

        Vleeseter.eatFood(plantenEter);
        console.log('Oh nee! Leeft '+ plantenEter.naam+ ': ' + plantenEter.leeft);


    }
}

let app = new App();
app.runApplication();
