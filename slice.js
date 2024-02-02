const address = 'Andorkilla';
const part = address.slice(2,5);
// start which index to which index
//  write two number ( start , end)
console.log(part);

const text = "Mozilla";

// Takes 4 last characters of string
console.log(text.substring(text.length - 4)); // prints "illa"

// Takes 5 last characters of string
console.log(text.substring(text.length - 5)); // prints "zilla"
console.log(text.substring(2, 5)); // "zil"
console.log(text.substr(2, 3)); // "zil"

const sentence = "I am a food and hard working person";
// console.log(sentence.split(' '));
console.log(sentence.split('am'));
const freinds = 'halkim,dsd,sd,sd,sads,dasdsad,jollil,khjolli';
console.log(freinds.split(','));
const realFriends = ['jalim','halim','khalim','kholil','joli','molil'];
console.log(realFriends.join('|'));