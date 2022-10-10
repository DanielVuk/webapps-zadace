/*
Napiši funkciju kojoj se predaje polje brojeva, te ona ispisuje brojeve
djeljive s 3
Ispis : [1,2,3,4,5,6,7,8,9,10] -> “Brojevi djeljivi s 3: 3,6,9”
*/

const divideByThree = (arr) => {
    let newArr = [];

    for (const num of arr) {
       if(num % 3 === 0)
            newArr.push(num)
    }

    console.log(`[${arr}] -> Brojevi djeljivi s 3: ${newArr}`);
}

divideByThree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])