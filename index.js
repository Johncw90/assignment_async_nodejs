// //Warmups
// //1.

// var p = new Promise(function(resolve, reject) {

// 	setTimeout(function() {
// 		resolve('Hello Promise!')
// 	}, 1000);
	
// });

// p.then(function(message) {

// 	console.log(message);

// });

// //2.

// function delay(milliseconds) {

// 	return new Promise(function(resolve,reject) {
// 		setTimeout(function() {
// 		resolve(milliseconds)
// 	}, milliseconds);
// 	});
// };

// function countDown(val) {
// 	if (val >= 100) {
// 		console.log(val);
// 		return delay(val - 100)
// 	} else {
// 		console.log('Done!')
// 	};
// };

// delay(1000)
//   .then(countDown)
//   .then(countDown)
//   .then(countDown)
//   .then(countDown)
//   .then(countDown)
//   .then(countDown)
//   .then(countDown)
//   .then(countDown)
//   .then(countDown)
//   .then(countDown)
//   .then(countDown);

//   //3.

//   function square(num) {
//   	var p = new Promise(function(resolve,reject) {
//   		if (typeof num === "number") {
//   			var squaredNum = num * num;
//   			resolve(squaredNum);
//   		} else {
//   			reject('Not a number');
//   		}
//   	});
//   	return p;
//   };


// var arr = [1,2,3,4,5,6,7,8,9];

// arr = arr.map(function(i) {

//   return square(i);

// });

// Promise.all(arr)
	
// 	.then(function(results) {
// 	   console.log(results);	

// 	});

//4.

function doBadThing(forRealz) {

	var p = new Promise(function(resolve, reject) {
		if (!forRealz) {
			resolve('Yay!')
		} else {
			reject('Nay')
		}
	});
	return p;
};

doBadThing(true)
	.then(function(result) {
	 console.log(result);
	 throw ('thrown true');
},	 function(err) {
	 console.log(err);
});
	
doBadThing(false)
	.then(function(result) {
		throw ('Uh oh');
		console.log(result);	
	})
	.catch(function(err) {
		console.error(err)
	});

























