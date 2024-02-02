class App
{
    RunApplication()
    {
        console.log('Is dit live?')

        let Artiesten = ['Artiest 1','Artiest 2','Artiest 3'];
        console.log(Artiesten);
        Artiesten.push('Bob Dylan', 'Prince')


        let indexToRemove = Artiesten.indexOf('Bob Dylan', 'Prince');
        Artiesten.splice(indexToRemove,2);

        console.log(Artiesten);
        console.log(Artiesten);

    }

}



let app = new App();
app.RunApplication();

