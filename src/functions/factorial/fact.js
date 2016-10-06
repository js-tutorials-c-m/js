// JavaScript Document
function factorial(){
var i,n,fact=1;
n=4;
for(i=1;i <=n ;i++){
  fact=fact*i;
}
console.log(fact);
return fact;
};
factorial();
module.exports = factorial;