class App {
  RunApplication() {
      console.log('RunApplication is aangeroepen!');

      let mijnH1 = document.getElementById("headerId")
      console.log(mijnH1.innerText);

      let headers = document.getElementsByClassName("BandName");
      console.log(headers);
      console.log(headers.length);

      for( let i = 0; i < headers.length; i++){
        console.log(headers[i])
      }
  }
}

let app = new App();
app.RunApplication();
