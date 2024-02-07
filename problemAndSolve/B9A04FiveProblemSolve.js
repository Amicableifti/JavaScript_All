/*
Problem 01 
বাকে র ভাই মি রপুর চি ড়ি য়াখানার ম্যানে জার । প্রতি দি ন তাকে অসংখ্য টি কে ট বি ক্রি করতে হয় । টাকার হি সে ব এ
তি নি সবসময় গড়মি ল বাধি য়ে ফে লে ন । তুমি যে হে তুসদ্য ডে ভে ল োপার হচ্ছ ো বাকে র ভাই ত োমার কাছে একটি
হে ল্প চে য়ে ছে । বাকে র ভাই কে calculateMoney( ) নামে একটি ফাংশন বানি য়ে দি তে হবে যাকে প্রতি দি ন
টি কে ট সে ল করার সংখ্যা ইনপুট দি লে সে সকল খরচ বাদ দি য়ে ম োট কত টাকা বাকে র ভাইর কাছে থাকে তা বলে
দি তে পারে ।
চি ড়ি য়াখানায় প্রতি টি কে ট বি ক্রি হয় ১২০ টাকায় । আর ব্যয় এর মধ্যে প্রতি দি ন ১ জন দার োয়ান কে দি তে হয় ৫০০
টাকা এবং ৮ জন স্টাফ কে লাঞ্চ করান োর জন্যে খরচ হয় জনপ্রতি ৫০ টাকা করে ।
Input :
ফাংশন টি ইনপুট নে বে টি কে ট সে ল করার সংখ্যা । ইনপুট হবে একটি পজি টি ভ সংখ্যা । (0<=Input)
Output :
টি কে টে র আয় ও ব্যয় গুল ো ক্যালকুলে ট করে বাকী কত টাকা বাকে র ভাইর কাছে থাকল ো সে টা ই ত োমার
ফাংশন আউটপুট হি সে বে রি টার্ন করবে । আউটপুট পজি টি ভ নে গে টি ভ যে ক োন কি ছুই হতে পারে ।
💡যে মন ইনপুট যদি 10 হয় তাহলে আউটপুট হবে ( 10 * 120) - ( 500 + (8 * 50) ) = 300
Challenge 📢 : বাকে র ভাই যদি ইনপুট হি সে বে নে গে টি ভ সংখ্যা দে য় তাহলে ত োমাকে একটা error ম্যাসে জ
আউটপুট হি সে বে রি টার্ন করে দি তে হবে ।
*/

/*

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

*/

/*
console.log(calculateMoney(10)); 
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-130)); 
*/

// Output

/*
300
1257000
10260
Invalid Number
 */

//PROBLEM 02

/*
সালমান ভাই ও রাশে দা ভাবীর ক োল জুড়ে এসে ছে একটা পুত্র সন্তান । সালমান ভাই পুত্র সন্তানে র একটা ভাল ো নাম
রাখতে চান । কি ন্তু তাদে র এলাকায় গ্রামে র মানষু রা নাম কে ব্যাংগ করে উচ্চারন করে । যে মন কার ো নাম salman
হলে তারা বলে সালমাইন্যা । কার ো নাম jafor হলে তারা বলে জাফইর্যা । সালমান ভাই চান না তার পুত্র সন্তান কে
কে উ এভাবে ক্ষে পাক ।
সালমান ভাই দে খতে পে লে ন যে যাদে র নামে র শে ষে A, y, i , e , o , u, w থাকে তাদে র কে আসলে ক্ষে পান ো
যায় না । যমন Tonoy, utsho , Roide, shanto এসব ধরনে র নাম গুল ো কে ব্যাংগ করে উচ্চারন করা যায় না ।

এখন ত োমাকে সালমান ভাইর জন্য checkName() নামে একটা ফাংশন লি খে দি তে হবে । যে টা একটা স্ট্রি ং
ইনপুট নে বে । এবং ফাংশন টি চে ক করে দে খবে নাম টি রাখা ভাল ো হবে না খারাপ হবে । ভাল ো হলে সে রি টার্ন
করবে “Good Name” আর নাম টি খারাপ হলে রি টার্ন করবে “Bad Name”

Input : ত োমার ফাংশন টি ইনপুট নে বে একটি নাম । ইনপুট টি হবে একটি স্ট্রি ং । যে খানে character গুল ো
ছ োট হাতে র বা বড় হাতে র হতে পারে ।

Output : ফাংশন টি আউটপুট হি সে বে রি টার্ন করবে একটি স্ট্রি ং । যার ভ্যালুহবে “Good Name” অথবা
“Bad Name”
*/
/*
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

console.log(checkName('Salman'));
console.log(checkName('RAFEE'));
console.log(checkName('199n'));
console.log(checkName(8));
console.log(checkName(['Rashed',true]));
*/

/*
// Problem 03 

function deleteInvalids(arr) {

    if (!Array.isArray(arr)) {
        return "invalid";
    }
    else {
    var data = arr.filter(Number.isInteger);
    return data ;
    }

}
console.log(deleteInvalids( [1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }] ));
console.log(deleteInvalids( [ "1" , {num:2} , NaN] ));
console.log(deleteInvalids([ 1 , 2 , -3 ]));
console.log(deleteInvalids({ num: [1, 2, 3] })); */

// Problem 04

/*

*/
/*
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
console.log(password({ name: 'kolimuddin' , birthYear: 1999 , siteName: 'google'}));
console.log(password({ name: 'rahat', birthYear: 2002, siteName: 'Facebook' }));
console.log(password({ name: 'toky', birthYear: 200, siteName: 'facebook' }));
console.log(password({ name: 'maisha', birthYear: 2002 }));
*/

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
// console.log(monthlySavings([ 1000 , 2000 , 3000 ] , 5400));
// console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000));
// console.log(monthlySavings([900, 2700, 3400], 10000));
// console.log(monthlySavings("100", [ 900 , 2700 , 3400]));

