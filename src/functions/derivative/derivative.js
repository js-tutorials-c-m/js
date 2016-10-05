// JavaScript Document
var derivative= function(x,n){
	var x=4,
	    n=3;
	result=n*Math.pow(x,(n-1));
	  console.log(result);
	  return result;
}
 derivative();

module.exports = derivative;
