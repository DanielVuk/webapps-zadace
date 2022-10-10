/* 
Napiši funkciju kojoj se predaje string, te ona ispisuje bez razmaka svaku
rijec velikim slovom (cammelCase)
Ispis : “web apps vjezbe” -> “webAppsVjezbe” 
*/


const toCammelCase = (str) =>{
    let originalStr = str;
    str.toLowerCase()
    let newStr = '';

    for(let i = 0; i<str.length; i++){
        if(str[i] == ' '){
            newStr+= str[i+1].toUpperCase();
            i++;
        }else{
            newStr+=(str[i].toLowerCase())
        }   
    }
    console.log(`"${originalStr}" -> ${newStr}`);
}

toCammelCase('web ApPs vjeZbe')