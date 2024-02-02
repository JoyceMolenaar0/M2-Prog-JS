class App
{
    runApplication(){
        
        this.canvas = document.getElementById("canvasId");
        let g = this.canvas.getContext("2d");
        this.tekenCirkel(g)
        let q = Math.floor(Math.random() *2);
        console.log(this.canvas)
        
    }
   
    tekenCirkel(g)
    {
        let rood = "#FF0000"
        let q = Math.floor(Math.random() *2);

        for (let i = 0; i < 201; i++) 
        { 
            let e = Math.floor(Math.random() * 15);
            let X = Math.floor(Math.random() * 1001);
            let Y = Math.floor(Math.random() * 1001);

            g.fillStyle = rood ;
            g.beginPath();
            g.arc(X, Y, e, 0, Math.PI * 2);
            g.stroke();
            g.fill();
            g.closePath()

          }
    }
    }


let app = new App();
app.runApplication();