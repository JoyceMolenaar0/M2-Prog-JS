class App {
    RunApplication() {
        console.log('Hello World!!');
        let uiButton = document.getElementById('Button1');
        let NieuwButton = document.getElementById('Button2');
        let FotoMario = document.getElementById('FotoMario');  
        let MijnFoto = document.getElementById('MijnFoto');
        let MarioHeading = document.getElementById('MarioHeading');
        let MarioTekst = document.getElementById('MarioTekst');
        let DivClick = document.getElementById('DivClick');
        let DivH1 = document.getElementById('DivH1');

        uiButton.addEventListener('click', (e) => {
            const para = document.createElement('P');
            const node = document.createTextNode('This is new.');
            para.appendChild(node);
            document.body.appendChild(para);
        });

        NieuwButton.addEventListener('click', (e) => {
            const para = document.createElement('P');
            const node = document.createTextNode('TNEw new new');
            para.appendChild(node);
            document.body.appendChild(para);
        });

        FotoMario.addEventListener('click', (e) => {
            MarioHeading.removeAttribute("hidden");
            MarioTekst.removeAttribute("hidden");
            MijnFoto.removeAttribute("hidden");
        });

        DivClick.addEventListener('click', (e) => {
            DivH1.removeAttribute("hidden");
            DivH1.style.color = this.getRandomColor();
        });
    }

    getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}

let app = new App();
app.RunApplication();
