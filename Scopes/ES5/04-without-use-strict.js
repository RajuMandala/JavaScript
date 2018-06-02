// var i; will be decalred here by the system

//This is immediately invoked fucntion expression
(function counter() {
  for (i = 0; i < 10; i++)  { //we omitted var during the decalaration of i
  	console.log(i);
  }

  console.log('after loop: ',i); // i can be accessed as we are stll inside function
})()

//By omitting var in the for loop, we allowed the system to create a var i at the top of file
console.log('after fucntion: ',i);	//10
