//Final Solution and Runtime: O(n)
function hasTargetSum(array, target) {
  const seenNumbers = {};

  for (const number of array) {
    const complement = target - number;
    if (seenNumbers[complement]) return true;
    seenNumbers[number] = true;
  }

  return false;
}

//Practice Solution and Runtime: O(n²)
// function hasTargetSum(array, target) {
//   const seenNumbers = {};
//   for (let i = 0; i < array.length; i++){
//     const complement = target - array[i];
//     if (seenNumbers[complement]){
//       return true;
//     }else {
//       seenNumbers[array[i]] = true;
//     }
//     console.log(seenNumbers);
//   }
//   return false;
// }

//Practice Solution and Runtime: O(n²)
// function hasTargetSum(array, target) {
//   for (let i = 0; i < array.length; i++){
//     const complement = target - array[i];
//     for(let j = i + 1; j < array.length; j++){
//       if (array[j] === complement){
//         return true;
//       }
//     }
//   }
//   return false;
// }

/* 
  Write the Big O time complexity of your function here
  Final solution runtime: O(n)
*/

/* 
  Add your pseudocode here
  Create an object to keep track of our numbers we've already seen.
  Iterate through each number in the array.
  For the current number, identify a complement that adds to the target (complement = target - number).
  Check if any key in our object is our complement.
  If so, return true.
  Otherwise add that number to the object.
  If I reach the end of the array and I haven't found two numbers that add up to my target, return false.
*/

/*
  Add written explanation of your solution here
  This final solution is a function called hasTargetSum that takes an array and a target as the arguments. It first creates an empty object to store seen numbers. It iterate through the array and looks for a complement number. If the number or key in our object is a complement, return true. If none checks out to be a complement, return true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5, 4], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 5, -4], 1));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-2, 1, -5], -7));
}

module.exports = hasTargetSum;
