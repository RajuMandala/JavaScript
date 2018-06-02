"use strict"; // By use strict there will be error

//This is immediately invoked fucntion expression
(function counter() {
  for (i = 0; i < 10; i++)  { //we omitted var during the decalaration of i
  	console.log(i);
  }

  console.log('after loop: ',i); // i can be accessed as we are stll inside function
})()

console.log('after fucntion: ',i);	//10
