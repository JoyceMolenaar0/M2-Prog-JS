class App {
  RunApplication() {
      console.log('RunApplication is aangeroepen!');

      let headers = document.getElementsByTagName("h1");

      for (let i = 0; i < headers.length; i++) {
          console.log(headers[i].innerText);
      }
  }
}

let app = new App();
app.RunApplication();
