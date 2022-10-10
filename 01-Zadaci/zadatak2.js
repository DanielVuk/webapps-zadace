/* Napiši funkciju koja pretvara HRK u EUR */

const konverter = (iznos) =>{
    console.log(`${iznos}HRK = ${(iznos/7.53).toFixed(2)}EUR`)
}

konverter(400)