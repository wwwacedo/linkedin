const countdown = (number = 0) => {
    if (typeof number !== 'number' || number < 0) {
        console.log('Input must be a non-negative integer');
        return;
    }

    if (number > 0) {
        setTimeout(() => {
            console.log(number);
            countdown(number - 1);
        }, 1000);
    } else {
        console.log('Counter completed!');
    }
};

countdown(5);

