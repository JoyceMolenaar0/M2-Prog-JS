

class User
{
    constructor(naam)
    {
        this.naam = naam
    }
    
    wieBenIk()
    {
        console.log(this.naam)
    }
}

class App
{
    
    runApplincation()
    {
        let patches = new User("patches the hyane")
        let user1 = new User("Joyce") ;      
        let user2 = new User("Yati");

        let user3 = new User("Fayline");    
        let user4 = new User("Macy");
        let user5 = new User("Iris");
        let user6 = new User("Amy");
        
        
        patches.wieBenIk();
        user6.wieBenIk();
        user5.wieBenIk();
        user2.wieBenIk();
        user3.wieBenIk();
        user1.wieBenIk();
        user6.wieBenIk();
        user4.wieBenIk();
        user2.wieBenIk();
        user3.wieBenIk();
        user2.wieBenIk();

       
    }
}



let app = new App();
app.runApplincation();