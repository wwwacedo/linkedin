"use strict";

// function to create a array of numbers
function makeArray(items, start, step) {
    return Array.from({length: items}, (_, i) => start + i * step);
}

// function to search the array
function binarySearch(arr, value) {
	const rounds = [];
	let lowestIndex = 0;
	let highestIndex = arr.length - 1;

	while (lowestIndex <= highestIndex) {
		const midIndex = Math.floor((lowestIndex + highestIndex) / 2);
		const guess = arr[midIndex];

		// this is just to track the rounds
		rounds.push({ lowestIndex, highestIndex, midIndex, guess });

		if (guess === value) {
			return {message: `Value ${value} was found at round ${rounds.length}.`, rounds};
		} else if (guess > value) {
			highestIndex = midIndex - 1;
		} else {
			lowestIndex = midIndex + 1;
		}
	}

	return {message: `Value ${value} was not found!`, rounds: null};
}

// create a array of 1 million numbers
const myArr = makeArray(1000000, 1, 1);

// search for a number in the array
const result = binarySearch(myArr, 1000000); 

// destructure the result object 
const {message, rounds} = result;

// print the result
console.log(`\n${message}\n`);
console.table(rounds ? rounds : '');

