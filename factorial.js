function factorial(n) {
  let num = 1;
  for (let i = n; i >= 1; i--) {
    num = num * i;
  }
  return num;
}
let num = factorial(10);
