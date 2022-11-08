/* Kreirajte web servis za upravljanje obavjestima. Sastoji se od 4 rute.
(dodajObavjest, vratiObavjesti, vratiObavjest, izmjeniObavjest) Na rutu
za dodavanje obavjesti šalje se samo naziv i sadržaj obavjesti.
{"naziv":"Rok za predaju zadace","sadrzaj":"Rok za predaju
zadace je 8.11."}
Unutar funkcije novo dobivenoj obavjesti pridodaje se id i datum kad je
kreirana. Sprema se u memoriju. Kad se vraćaju sve obavjesti, vrati se
samo naziv i datum. Kad se vraća jedna obavjest, vrati se naziv, sadržaj i
timestamp.
{"naziv":"Rok za predaju zadace","sadrzaj":"Rok za predaju
zadace je 8.11.", "datum":"Fri Oct 28 2022 08:50:27 GMT+0200
(Central European Summer Time)"}
Kod izmjene obavjesti, moguće je samo izmjeniti sadržaj */

const express = require("express");
const app = express();

app.use(express.json());

let obavijesti = [];

app.post("/dodajObavijest", (req, res) => {
  let obavijest = {
    id: obavijesti.length + 1,
    naziv: req.body.naziv,
    sadrzaj: req.body.sadrzaj,
    datum: new Date().toString(),
  };

  obavijesti.push(obavijest);
  res.send(obavijest);
});

app.get("/vratiObavijesti", (req, res) => {
  const result = obavijesti.map(({ naziv, datum }) => {
    return {
      naziv,
      datum,
    };
  });

  res.send(result);
});

app.get("/vratiObavijest/:id", (req, res) => {
  const obavijest = obavijesti.find((o) => {
    return o.id === parseInt(req.params.id);
  });

  const filtered =
    (({ naziv, sadrzaj, datum } = obavijest), { naziv, sadrzaj, datum });

  res.send(filtered);
});

app.put("/izmjeniObavijest/:id", (req, res) => {
  let obavijest = obavijesti.find((o) => {
    return o.id === parseInt(req.params.id);
  });
  let index = obavijesti.indexOf(obavijest);

  obavijest = { ...obavijest, sadrzaj: req.body.sadrzaj };
  obavijesti[index] = obavijest;

  res.send(obavijest);
});

app.listen(3000, () => console.log("Listening on port 3000"));
