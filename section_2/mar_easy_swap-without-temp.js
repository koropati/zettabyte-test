/**
 * Direction:
 * Swap these numbers without using temporary variable
 *
 * Expected Result:
 * {
 *  a: 4,
 *  b: 2
 * }
 */
 let numbers = {
    a: 2,
    b: 4
   };
  
  function result(numbers) {
    numbers.b = [numbers.a, numbers.a=numbers.b][0];
    return numbers;
  }
   
  console.log(result(numbers));