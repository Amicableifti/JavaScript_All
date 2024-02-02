// We can declare like this way
const country = 'Bangladesh';
const division = "Dhaka";
const distrist = `Lakshmipur`;
// const thana = new String('Demra');

const numbers = [1,2,3,4,5,6];


// console.log(typeof thana , typeof country);
// console.log(typeof division , typeof country);
// console.log(numbers.length);
// console.log(numbers[0]);

// String is immutabl;e | not changable
// Array is mutable | Changeable

const city = 'london' ;

// console.log(city.length);
// console.log(city[2]);

// console.log(numbers[1]);
numbers[1]=22;
// console.log(numbers[1]);
// console.log(city);

// Case String

const school= " Monipur High School And College ";
// console.log(school);
// console.log(school.toLowerCase());
// console.log(school.toUpperCase());

const subject = 'Chemisty';
const book = 'chemisty';

// if we compare two string

if(subject.toLowerCase === book.toLowerCase ){
    console.log('I am Good');
}
else {
    console.log('I am not good becasue no match');
}

// Uppercase and Lowercase not same | Case Sensetive

const drink = '     water';
const liquid = '  water ';
//  use .trim to unconsider gap
if(drink.trim === liquid.trim ){
    console.log('Water matched');
}
else {
    console.log('No matched Water');
}