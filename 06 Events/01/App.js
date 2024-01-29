class App
{
    RunApplication()
    {
        console.log('Hello World!!');
        let uiButton = document.getElementById('Button1');
        let localeFunction =function (e){
            console.log('Click!')

        };
        uiButton.addEventListener('click', localeFunction);
    }

}

let app = new App();
app.RunApplication();

