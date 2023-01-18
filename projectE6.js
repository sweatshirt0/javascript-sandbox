let i;
let sumsq = 0;
let j;
let sqsum = 0;

for (i = 1; i <= 100; i++) {
	temp = i*i;
	sqsum += temp;
}

console.log("the sum of the square is " + sqsum);

for (j = 0; j <= 100; ++j) {
	sumsq += j;
}

console.log(sumsq);

res1 = sumsq * sumsq;

console.log(res1);

res2 = res1 - sqsum;

console.log(res2);


