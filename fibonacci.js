function fibonacci(limit) {
  let a = 0;
  let b = 1;
  let fseries = [a, b];
  let sum = 0;
  for (let i = 0; i <= limit; i++) {
    sum = a + b;
    fseries.push(sum);
    a = b;
    b = sum;
  }
  return fseries;
}
var newFibonacci = fibonacci(10);
