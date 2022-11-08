/* Kreirajte web servis za dodavanje autora. Sastoji se 3 rute. (dodajAutora,
vratiAutore, izbrisiDjeloAutora) Kod dodavanja autora, očekuje se da se
preda naziv i lista djela. Ukoliko se ne predaju isključivo ta dva ključa
(naziv, djela) odgovara sa sljedecim JSON response -> {"Error":"Krivi
kljucevi"}. Nakon toga provjerava je li duzina imena svakog djela manja
od 20 znakova i u slučaju da nije vraća JSON response sa imenom djela koji
je pre dugacak -> {"Error":"Djelo Process Mining in Practice ima
vise od 20 znakova"} Ako je sve uredu dodaje datum i id, te sprema
autora. Vrati autore vraca sve autore i djela. Ruta za brisanje djela brise
iz liste djela autora jedno djelo. */

const express = require("express");
const app = express();

app.use(express.json());

let autori = [];

app.post("/dodajAutora", (req, res) => {
  if (!req.body.naziv || !req.body.djela) {
    return res.status(400).send("Error: Krivi kljucevi");
  }

  for (const djelo of req.body.djela) {
    if (djelo.length > 20) {
      return res.status(400).send(`Error: ${djelo} ima vise od 20 znakova`);
    }
  }

  let autor = {
    id: autori.length + 1,
    naziv: req.body.naziv,
    djela: req.body.djela,
    datum: new Date().toLocaleDateString(),
  };

  autori.push(autor);
  res.send(autori);
});

app.get("/vratiAutore", (req, res) => {
  res.send(autori);
});

app.delete("/izbrisiDjeloAutora/:id", (req, res) => {
  let djelo = autori.find((a) => {
    return a.id === parseInt(req.params.id);
  });
  if (!djelo) return res.status(404).send("Djelo se ne nalazi u bazi.");

  let index = autori.indexOf(djelo);
  autori.splice(index, 1);

  // autori = autori.filter((a) => {
  //   return a.id !== parseInt(req.params.id);
  // });

  res.send(autori);
});

app.listen(3000, () => console.log("Listening on port 3000"));
