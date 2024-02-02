const sentence = 'I want to learn to web development';
//const result = 
// console.log(sentence);
let reverse = ' ';
// for (const letter of sentence)

// {

//     reverse=letter+reverse;
// }
// console.log(reverse);

// for(let i=0; i < sentence.length ; i ++ )
// {
//     reverse=sentence[i]+reverse;
// }
// console.log(reverse);

// shortcut
let reversed = sentence.split(' ');
console.log(reversed);
reversed = sentence.split(' ').reverse().join(" ");
console.log(reversed);