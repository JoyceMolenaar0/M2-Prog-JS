class Dino 
{
    constructor(naam, vleeseter, leeftijd, leeft, honger) {
        this.naam = naam;
        this.vleeseter = vleeseter;
        this.leeftijd = leeftijd;
        this.leeft = leeft;
        this.honger = honger;
    }

    eatFood(FoodToEat)
    {
        FoodToEat.leeft = false;
        this.honger = false;

        console.log('Ik ben een: ' + this.naam);
        console.log('Mijn honger: ' + this.honger)
    }
}

class App 
{
    runApplication() {
        let Vleeseter = new Dino ('Thylacoleo', true, 15, true, 95);
        let plantenEter = new Dino ("Gacha", false, 14, true, 95);

        console.log(Vleeseter);
        console.log(plantenEter);

        console.log('De leeftijd van deze ' + Vleeseter.naam + ' is: ' + Vleeseter.leeftijd);
        console.log('En eet deze ' + Vleeseter.naam + ' vlees? ' + Vleeseter.vleeseter);

        Vleeseter.eatFood(plantenEter);
        console.log('Leeft ' + plantenEter.naam + "? " + plantenEter.leeft);


    }
}

let app = new App();
app.runApplication();
