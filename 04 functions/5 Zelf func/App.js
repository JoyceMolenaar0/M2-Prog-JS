class App
{
    RunApplication()
    {
        
    }

    MarioRoeper()
    {
        console.log("MARIO!!");
    }

    LachRoeper()
    {
        let Roeper = "BWAHAHAHA!!!"
        return Roeper
    }

    GetallenOptellen(getal1, getal2)
    {
        return getal1 + getal2;
    
    }

    Vermenigvuldigen(getal1, getal2)
    {
        return getal1 * getal2;
    }
}

let app = new App();
app.RunApplication();
app.MarioRoeper();
console.log(app.LachRoeper());
let Optellen = app.GetallenOptellen(21, 51);
let vermenigvuldigen = app.Vermenigvuldigen(9, 3);

console.log(Optellen);
console.log(vermenigvuldigen);


