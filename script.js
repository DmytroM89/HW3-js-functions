console.log('------------- # 4');
function myPLus(a, b) {
   return a + b;
}
console.log(myPLus(3, 10));

function myMinus(a, b) {
   return a - b;
}
console.log(myMinus(-5, 2));

function myMultiply(a, b) {
   return a * b;
}
console.log(myMultiply(6, 2));

function myDivide(a, b) {
   return a / b;
}
console.log(myDivide(454, 2));

console.log('------------- # 5');
function outNumsToN(n) {
   let res = '';
   for (let i = 1; i <= n; i++) {
      res += i + ' ';
   }
   return res;
}
console.log(outNumsToN(5));

console.log('------------- # 6');
function outNumsToOne(n) {
   let res = '';
   for (let i = n; i >= 1; i--) {
      res += i + ' ';
   }
   return res;
}
console.log(outNumsToOne(5));

console.log('------------- # 7');
function pow(x, n) {
   let res = x;
   for (let i = 1; i < n; i++) {
      res *= x;
   }
   return res;
}
console.log(pow(2, 10));
console.log(Math.pow(2, 10)); // для проверки

console.log('------------- # 8');
function isBigger(a, b) {
   return a > b;
}
console.log(isBigger(5, 25));

console.log('------------- # 9');
function isSmaller(a, b) {
   return a < b;
}
console.log(isSmaller(5, 25));
