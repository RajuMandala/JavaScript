//This is immediately invoked fucntion expression
(function counter() {
  for (var i = 0; i < 10; i++)  {
  	console.log(i);
  }

  console.log('after loop: ',i); // i can be accessed as we are stll inside function
})()

//Now we restricted scope of i to the function. So if we access i outside function, we will get error
console.log('after fucntion: ',i);	//Reference error: i is not defined
