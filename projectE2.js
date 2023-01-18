let pre = 0;
let cur = 1;
let aft;

let s = 0;

let cap = 4000000;

while (cur <= cap) {
	aft = pre + cur;
	pre = cur;
	cur = aft;

	if (cur % 2 == 0) {
		s = s + cur;
	}
}


console.log(s);
