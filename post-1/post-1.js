const counter = (number = 0) => {
    return new Promise((resolve, reject) => {
        if (typeof number !== 'number' || number < 0) {
            reject(new Error('Input must be a non-negative integer'));
            return;
        }

        const countdown = (num) => {
            if (num > 0) {
                const timeoutId = setTimeout(() => {
                    console.log(num);
                    countdown(num - 1);
                }, 1000);
                return () => clearTimeout(timeoutId);
            } else {
                resolve('Counter completed!');
            }
        };

        countdown(number);
    });
};

counter(5)
    .then(message => console.log(message))
    .catch(error => console.error(error.message));