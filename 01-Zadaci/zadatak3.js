/* Napiši funkciju koja provjerava nalazi li se dani broj X unutar [100,150000]
Ispis : 53 -> “53 nije unutar [100,150000]” */

const provjeri = (broj) => {
    (broj > 99 && broj < 150001) ? console.log(`${broj} -> ${broj} je unutar [100, 150000]`) : 
        console.log(`${broj} -> ${broj} nije unutar [100, 150000]`)
}

provjeri(150001)