// JavaScript Document
function factorial(n){
var i,n,fact=1;

for(i=1;i <=n ;i++){
  fact=fact*i;
    }
console.log(fact);
return fact;
 };

module.exports = factorial;