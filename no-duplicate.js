// Array has some duplicate elements


const biriyaniKhor = ['abul', 'kabul', 'cabul', 'kobul','cabul'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function noDuplicate(array) {
    const sum = [];
    for (let items of array) 
    {
        // includes work for checking a particular property
        if (sum.includes(items) === false){
            sum.push(items);
        }

   }
   return sum;
}

const uniqueArray = noDuplicate(biriyaniKhor);
console.log(uniqueArray);