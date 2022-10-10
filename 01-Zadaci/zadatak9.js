/*
Napiši funkciju koja prima dva objekta, te u slučaju da imaju iste kljućeve
vraća true
Ispis : {a:1,b:2,c:3}, {a:321,b:3,c:1} -> true
*/

const sameKeys = (obj1, obj2) => {
  console.log(
    obj1,
    ", ",
    obj2,
    ` -> ${
      JSON.stringify(Object.keys(obj1)) == JSON.stringify(Object.keys(obj2))
    }`
  );
};

sameKeys({ a: 1, b: 2, c: 3 }, { a: 321, b: 3, c: 1 });
