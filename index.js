let diff
function hasTargetSum(array, target) {
  // Write your algorithm here
  let obj = {}
  for(let index = 0; index < array.length; index++){
    diff = target - array[index]
    if(obj[diff]){
      return true
    } else{
      obj[array[index]] = true
    }
  }
  return false
}
console.log(hasTargetSum([1,2,3], 5))
/* 
  Write the Big O time complexity of your function here
  O(n)
*/

/* 
  Add your pseudocode here
function hasTargetSum(array, target)
  let empty Object function as hash table
  for every index of the array starting at index 0, within the restrictions of the length of the array, we will loop through every index
    variable diff is (target - array[index])
    diff is put into object
      if any key in the object (alternatively, element of the array) matches diff
        return true
        otherwise, false

*/

/*
  Add written explanation of your solution here
  
  I declare the function hasTargetSum to take in the arguments array [] and an int called target
    To improve the time complexity, we utilize the JavaScript Object as a Hash Table. a Hash Table lets us store a key to a specific value. We declare an empty object and input the keys later on in the function
      we create a for loop that interates over each index within the length of the array starting at 0
      the variable diff is declared, which the value being the target integer subtracted by the element(array integer) at the index of array
      the diff variable is mapped to the empty object as a key
        if any element in the array (key in object) matches the diff, return true
        otherwise the program returns false

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
}

module.exports = hasTargetSum;
