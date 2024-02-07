//  Function will receive a parameter which will be a number
// convert the number into a cube

// ---------------

function cubeNumber(input) {
    //    console.log(input);
    if (typeof input !== 'number' ) {
        return " There is an error";
    }
    const result = Math.pow(input, 3);
    return result;


}

const output = cubeNumber("g");
console.log(output);

Array.isArray();
// ---------------


function matchFinder ( string1 , string2 ) {

}