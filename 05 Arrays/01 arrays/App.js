class App
{
    RunApplication()
    {
        console.log('Is dit live?')
        let Artiesten = ['Artiest 1','Artiest 2','Artiest 3'];
        console.log(Artiesten);

        let Nummers =  [6,1, 2];
        console.log(Nummers);


        for (let Nummer = 6; Nummer < Nummers.length; Nummer++) {
            console.log(Nummer);
        }


        // //OP 2 (Begin)//
        // let AppNaam = 'Oefening'
        // let VersieNummer = '0.0.1'
        // let VersieDatum = '14:47 PM NOV 20 2023'
        // let Autheur = 'Joyce Molenaar'
        // let Copyright = 'None'
        // let distributeur = 'Joyce Molenaar'
        // let darkmode = true

        // console.log(AppNaam)
        // console.log(VersieNummer)
        // console.log(VersieDatum)
        // console.log(Autheur)
        // console.log(Copyright)
        // console.log(distributeur)
        // console.log(darkmode)
        //  //OP 2 (Eind)//

    }

}

let app = new App();
app.RunApplication();

