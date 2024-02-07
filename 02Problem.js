/*
-We have to take a function called [ PicnicBudget ] 
-Take parameter as number how much people will go
--If number is 100 or less then 100 then picnic cost per person will be 5000
If the number is more than 100 and less then 200 then first 100 person wil be give 5000 and from 101 to 200 they will give 4000
-If the number is more than 200 then first 100 person wil be give 5000 and more than 100 person will give 4000 and more than 
  200 person will give per person 3000
-I will give number as a premeter , it can be any number 
-Depending on number function will return total budget
- Input number can be less than 100, more than 100 or more than 200 
- So test all case | keep validation

*/

// We have to take a function called [ PicnicBudget

function PicnicBudget(number) {

  let totalBudget = 0;
  const firstBudget = 5000;
  const seceondBudget = 4000;
  const thirdBudget = 3000;

  //  Check if number is negetive
  if (number <= 0 || typeof number !== 'number' ) {
    return 'Please Insert number ast least more then zero'
  }
  else {
    // If number is 100 or less then 100 then picnic cost per person will be 5000
    if (number <= 100) {
      totalBudget = (totalBudget + firstBudget) * number;
      return totalBudget;
    }
    //  If the number is more than 100 and less then 200 then first 100 person wil be give 5000 and from 101 to 200 they will give 4000
    else if (number > 100 && number < 200) {

      totalBudget = number * (totalBudget + firstBudget); // 105 as example
      for (let item = 100; item < number; item++) {
        totalBudget = totalBudget - (firstBudget - seceondBudget)
      }

    }
    // If the number is more than 200 then first 100 person wil be give 5000 and more than 100 person will give 4000 and more than 
    else if (number > 200) {

      totalBudget = number * (totalBudget + firstBudget); // 105 as example
      for (let item = 100; item < number; item++) {
        totalBudget = totalBudget - (firstBudget - seceondBudget)
      }
      for (let item = 200; item < number; item++) {
        totalBudget = totalBudget - (seceondBudget - thirdBudget)
      }
    }

  }
  // - Depending on number function will return total budget
  return totalBudget;
}

const output = PicnicBudget(66);
console.log(output);

