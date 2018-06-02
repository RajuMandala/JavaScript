for (var i = 0; i < 10; i++)  {
	console.log(i);
}


//i is global to the entire file, so we can access it anywhere in the file
console.log(i);	//10
console.log(i + 20); //30