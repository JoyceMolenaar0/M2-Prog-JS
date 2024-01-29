class App
{
    RunApplication()
    {
        console.log('Hello World!!');
        let uiButton = document.getElementById('Button1');

        uiButton.addEventListener("click", (e)=>
        {
            console.log("Click!!");
        });
    }

}

let app = new App();
app.RunApplication();

