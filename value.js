const person = {
    name : ' sondor uddin',
    age : 25,
    profession : ' developer',
    salary : 2500,
    marrried:true ,
    'fav places' : ['ok','not ok ',' ok ok ', ' nice ok']
}

person.salary= 38000;
console.log(person)
person.salary=30000;
person['age']=26;
console.log(person);
person["fav places"]=['ok','ok2','ok3','pk4'];
console.log(person);
// only values
console.log(Object.values(person));