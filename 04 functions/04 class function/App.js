




class App
{
    RunApplication()
    {
        console.log("Hello world");
    }

    newClassFunction()
    {
        console.log("Hello world in de newClassFunction")
    }

    AnotherFunctionWithArguments(aArgument)
    {
        console.log("Kom maar met je argument");
        console.log("Hier: ");
        console.log(aArgument);
    }


   
}







let app = new App();
app.RunApplication();
app.newClassFunction();
app.AnotherFunctionWithArguments("Mijn argument is iets...");

