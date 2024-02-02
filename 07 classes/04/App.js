class Dino 

{
    constructor(naam, vleeseter, leeftijd) {
        this.naam = naam;
        this.vleeseter = vleeseter;
        this.leeftijd = leeftijd;
    }
}

class App 

{
    runApplication() {
        console.log('Hello World!');

        let dino = new Dino("Gacha", false, 14);
        console.log(dino);

        console.log('De leeftijd van deze ' + dino.naam + ' is: ' + dino.leeftijd);
        console.log('En eet deze ' + dino.naam + ' vlees? ' + dino.vleeseter);
    }
}

let app = new App();
app.runApplication();
