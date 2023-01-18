const prompt = require("prompt-sync")({sigint: true});
let num = prompt("Enter number to be checked for primeness: ");
let i;
let count = 0;
for (i = 0; i <= num; ++i) {
	if (num % i == 0) {
		count += 1;
	}
}

console.log(num + " has " + count + " factors; therefore...");

if (count == 2) {
	console.log(num + " is prime");
} else if (count > 2) {
	console.log(num + " is not prime");
}

if (num == 2) {
	console.log("2 is prime.");
} else if (num < 2) {
	console.log(num + " is not prime.");
}

