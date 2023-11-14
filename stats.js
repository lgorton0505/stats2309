const numbers = [1,2,4,5,6];

function addToArray(){
   numbers.push(document.getElementById("num").value);
   console.log(numbers);
}

function getLength(arr){
   return arr.length;
}

function getSum(arr){
   let sum = 0;
   for(let i = 0; i < arr.length; i++){
      sum += numbers[i];
   }
   return sum;
}

function getMean(arr){
   let mean = getSum(arr) / arr.length;
   return mean;
}

function getMin(arr){
   return Math.min(...arr);
}

function getMax(arr){
   return Math.max(...arr);
}

function getRange(arr){
   return getMax(arr) - getMin(arr);
}

function getEvens(arr){
   let evens = [];

   for(let i = 0; i < arr.length; i++){
      if(arr[i] % 2 === 0){
         evens.push(arr[i]);
      }
   }
   return evens;
}

function getOdds(arr){
   let odds = [];

   for(let i = 0; i < arr.length; i++){
      if(arr[i] % 2 != 0){
         odds.push(arr[i]);
      }
   }
   return odds;
}

console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);