class App
{
    RunApplication()
    {

        this.greeting = 'Starting up';
        console.log('Is dit live?')

        //OP 2 (Begin)//
        this.AppNaam = 'Oefening'
        this.VersieNummer = '0.0.1'
        this.VersieDatum = '14:47 PM NOV 20 2023'
        this.Autheur = 'Joyce Molenaar'
        this.Copyright = 'None'
        this.distributeur = 'Joyce Molenaar'
        this.darkmode = true

    
         //OP 2 (Eind)//

    }

   
}
let app = new App();
app.RunApplication();

console.log(app.greeting)
console.log(app.AppNaam)
console.log(app.VersieNummer)
console.log(app.VersieDatum)
console.log(app.Autheur)
console.log(app.Copyright)
console.log(app.distributeur)
console.log(app.darkmode)
