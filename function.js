const number = 45;
function fanOffKor (){
    console.log('ok ');
}
function ok (){
    console.log('hello');
}
fanOffKor();
ok();

// parameter

function square(number){
    console.log(number);
}

square(4);

function doubleIT(number){
    const doubled = number*2;
    console.log(number,doubled);
}

console.log('------------')
doubleIT(5);
doubleIT(15);