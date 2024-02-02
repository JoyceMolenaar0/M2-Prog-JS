class App
{
    RunApplication()
    {
        console.log('Hello world!');
    }

}

class Greet
{
    constructor()
    {
    }

    showGreeting()
    {
        console.log("Greetings!!");
    }
}

class Goodbye
{
    constructor()
    {
    }

    ShowGoodbye()
    {
        console.log("Goodbye!!");
    }
}

let greet = new Greet();
greet.showGreeting();

let Bye = new Goodbye();
Bye.ShowGoodbye();


greet.showGreeting();
Bye.ShowGoodbye();
greet.showGreeting();
Bye.ShowGoodbye();
greet.showGreeting();
Bye.ShowGoodbye();



let app = new App();
app.RunApplication();

