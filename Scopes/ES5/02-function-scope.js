function counter() {
  for (var i = 0; i < 10; i++)  {
  	console.log(i);
  }

  console.log(i); // i can be accessed as we are stll inside function
}

counter()

//Now we restricted scope of i to the function. So if we access i outside function, we will get error
console.log(i);	//Reference error: i is not defined
