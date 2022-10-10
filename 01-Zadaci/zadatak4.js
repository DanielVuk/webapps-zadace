/* Napiši funkciju koja pretvara broj X u sate i minute
Ispis : 120 -> “Ovo je 2 sata i 0 minuta” */

const pretvori = (minute) => {
    console.log(`${minute} -> Ovo je ${parseInt(minute / 60)} sata i ${minute%60} minuta`);
}

pretvori(138)