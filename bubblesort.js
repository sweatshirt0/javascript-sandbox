const array = [10, 8, 9, 7, 5, 5, 1, 3, 4, 2];

for (let i = 0; i < array.length; i++) {
	for (let j = 1; j < array.length; j++) {
		if (array[j] < array[j - 1]) {
			const temp = array[j]
			array[j] = array[j - 1]
			array[j - 1] = temp;
		}
	}
}

console.log(array);
