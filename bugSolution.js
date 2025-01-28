function foo(a, b) {
  if (a === null || b === null) {
    return 0; //Or throw an error, or return some meaningful value
  }
  return a + b; 
}
console.log(foo(1, null)); // Output: 1
console.log(foo(null, 1)); // Output: 1
console.log(foo(1, 2)); // Output: 3