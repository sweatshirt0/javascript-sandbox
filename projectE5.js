let c = 0;
let n = 1;

while (c < 20) {
	for(let i = 1; i <= 20; i++) {
		if(n % i == 0) {
			c++;
		} else {
			c = 0;
			break;
		}
	}

	if(c == 20) {
		console.log(n);
		break;
	} else {
		n++;
	}
}
