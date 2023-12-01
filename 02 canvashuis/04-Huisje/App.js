class App
{
    RunApplication()
    {
        console.log('haiii haiii');
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        console.log(canvas);

        

        //Schuin dak//

        g.beginPath();
        g.fillStyle = 'Yellow';
        g.moveTo(150,50);
        g.lineTo(100,150);
        g.lineTo(300,200);
        g.lineTo(350,100)
        g.lineTo(150,50);
        g.closePath();
        g.stroke();
        g.fill();

        // Muur Voorkant//

        g.beginPath();
        g.moveTo(100,150);
        g.lineTo(100,250);
        g.lineTo(300,300);
        g.lineTo(300,200);
        g.closePath();
        g.stroke();

        //Muur Zijkant//
        g.beginPath();
        g.moveTo(300,300);
        g.lineTo(400,250);
        g.lineTo(400,150);
        g.lineTo(300,200);
        g.closePath();
        g.stroke();


        //overige dak//
        g.beginPath();
        g.moveTo(300,200);
        g.lineTo(350,100);
        g.lineTo(400,150);
        g.closePath();
        g.stroke();

        //raam//
        g.beginPath();
        g.moveTo(150,225);
        g.lineTo(150,180);
        g.lineTo(250,205);
        g.lineTo(250,250);
        g.closePath();
        g.stroke();
        
        


        


    }

   
}

let app = new App();
app.RunApplication();

