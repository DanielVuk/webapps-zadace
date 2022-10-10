/*
Napiši funkciju koja za dani broj X provjeri nalazi li se unutar [0, 1000], te
množi sve višekratnike broja 7 do X te ispisuje rezultat.
Ispis : 23 -> 2058
*/

const provjeri = (broj) => {
  broj >= 0 && broj < 1001
    ? console.log("Broj se nalazi u intervalu")
    : console.log("Broj se ne nalazi u intervalu");

  let suma = 1;
  for (let i = 7; i < broj; i += 7) {
    suma *= i;
  }

  console.log(`${broj} -> ${suma}`);
};

provjeri(23);
