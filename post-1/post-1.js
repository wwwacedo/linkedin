const countdown = (number = 0) => {
	if (typeof number !== 'number' || number < 0) {
		console.log('Input must be a non-negative integer!');
		return;
	}

	setTimeout(() => {
		if (number > 0) {
			console.log(number);
			return countdown(number - 1);
		}
		console.log('Counter completed!');
	}, 1000);

}

countdown(5);
