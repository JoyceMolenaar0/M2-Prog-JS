function SuperMooieGlobalFunction()
{
    console.log('Ik ben globaal');
    console.log('Dus je mag mij overal aanroepen');
}

SuperMooieGlobalFunction();
SuperMooieGlobalFunction();
SuperMooieGlobalFunction();




class App
{
    RunApplication()
    {
        console.log('haiii haiii');
        SuperMooieGlobalFunction();
        


    }

   
}

let app = new App();
app.RunApplication();



