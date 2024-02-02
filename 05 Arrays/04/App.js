class App {
    RunApplication() {



        console.log('RunApplication is aangeroepen!');

        let mijnH1 = document.getElementById("headerId")
        mijnH1.innerText = "Dit is nieuw";
        console.log(mijnH1.innerText);

        let headersByCssClass = document.getElementsByClassName("BandName");
        let data = ['Appel', 'owaojd', 'Okekkekeyyy', "Lala", "awijd"];

  
        let headers = document.getElementsByClassName("BandName");
        console.log(headers);
        console.log(headers.length);
  
        for( let i = 0; i < headers.length; i++){
          console.log(headers[i])
        }

        headersByCssClass[0].innerText = "nieuws ";
        headersByCssClass[1].innerText = "reviews";
        headersByCssClass[2].innerText = "commentaar ";
        headersByCssClass[3].innerText = "Beste Forums Posts ";
        headersByCssClass[4].innerText = "PriceWatch ";

        
        
        for( let i = 0; i < data.length; i++){
            headersByCssClass[i].innerText = i +": "+data[i];
            headersByCssClass[i].innerText = i +": "+data[i];

            console.log(data[i])
          }


    }
  }
  
  let app = new App();
  app.RunApplication();
  