let num = 600851475143;
let div = 2;

while (num > 1) {
	if ((num % div) == 0) {
		num = num / div;
		div--;
	}
	div++;
}


console.log(div);

/* So the way i got this to work is basically you set the divisor starting at 2 and check to see if it evenly divides into the num. if it does; set num to the result of num / divisor and decrease the divisor and start the process again until num is <= 1. If done correctly; the divisor should be set to the largest prime factor and the num should also be the same as the divisor -- dividing by the same number gives you 1 which will boot you out of the loop. Then we display the divisor in the console as the answer. */
