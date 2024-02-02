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
        this.greeting = " Greetings!!"
    }

    showGreeting()
    {
        console.log('Greetings van binnen!!' + this.greeting);
    }
}

class Goodbye
{
    constructor()
    {
        this.goodbyeing = ' Goodbye!!'
    }

    ShowGoodbye()
    {
        console.log('Goodbyeee van bnnen!!' + this.goodbyeing);
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

