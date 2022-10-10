/* 
Napiši funkciju koja vraća predano polje obrnutim redosljedom
Ispis : [3,4,5,6] -> [6,5,4,3] 
*/

const reverse = (arr) => {
  console.log(`[${arr}] -> [${arr.sort().reverse()}]`);
};

reverse([3, 4, 5, 6]);
