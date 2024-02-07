//One Problem
function calculateMoney(ticket){
 //Error validation and Return error message
 if(ticket<0)
 {
    return " Invalid Number" ;
 }
 let remaningMoney = 0;
 const ticketPrice = 120;
 const fixedCost = 500;
 const staffNumber = 8;
 const perstaffLunchCost = 50;
//  Total Remaning Money
remaningMoney = (ticket*ticketPrice) - (fixedCost+(staffNumber*perstaffLunchCost)) ;
 return remaningMoney ;
}
//Two Problem
function checkName(name) {
   // Invalid Check
   if (typeof name !== 'string' || Array.isArray(name)) {
       return "invalid";
   }
   else {
       //make all lowercase
       let data = name.toLowerCase();
       // Find last character
       let lastChar = data.charAt(data.length - 1);
       // check last character
       if (lastChar === 'a' || lastChar === 'y' || lastChar === 'i' || lastChar === 'e' || lastChar === 'o' || lastChar === 'u' || lastChar === 'w') {
           return "Bad Name";
       }
       else {
           return "Good Name";
       }
   }
}
//Three Problem
function deleteInvalids(arr) {

   if (!Array.isArray(arr)) {
       return "invalid";
   }
   else {
   var data = arr.filter(Number.isInteger);
   return data ;
   }

}
// FOUR
function password(obj) {
    
   if (obj.name == "null" || obj.birthYear == "null"  || obj.siteName == "null" || Object.keys(obj).length  !== 3) {

       return 'invalid';
   }
   let value = obj.birthYear;
   value = value.toString();
   // return typeof value , value.length;
   if (value.length !== 4) {

       return 'invalid';
   }
   else {
       
       let output = obj.siteName + '#' + obj.name + '@' + obj.birthYear;
       output.charAt(0).toUpperCase() + output.slice(1);
       output = output [0].toUpperCase() + output . slice(1);
       
       return output;
   }
}

// FIVE

function monthlySavings(arr, number) {

    // console.log(arr,number)
    if (typeof number !== "number") {
        return 'invalid input';
    }
    else {
        let saving = 0;
        let livingCost = number;
        let totalAmout = 0;
        for (let items of arr) {
            // console.log(arr,items);
            if(items >= 3000 ){
                let payment = items*.2 
                items = items - payment
            }
            totalAmout = totalAmout + items;
            
        }
        // console.log(totalAmout , livingCost);
        if( totalAmout === livingCost )
        {
            return totalAmout-livingCost;
        }
        if( totalAmout > livingCost )
        {
            return totalAmout-livingCost;
        }
        else {
            return "earn more"
        }

    }
    return 'earn more';
}