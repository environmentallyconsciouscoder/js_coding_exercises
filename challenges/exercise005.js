export const findNextNumber = (nums, n) => {
	if (nums === undefined) throw new Error('nums is required');
	if (n === undefined) throw new Error('n is required');
	// Your code here!

	const indexes = [];

	for (let index = 0; index < nums.length; index++) {
		const num = nums[index];
		if (num === n) {
			indexes.push(index)
		}
	}

	if (indexes.length < 1) {
		return null
	} else if (nums.length - 1 === indexes[0]) {
		return null
	}

	else if (indexes.length > 0) {
		return nums[indexes[0] + 1]
	}
};

export const count1sand0s = (str) => {
	if (str === undefined) throw new Error('str is required');
	// Your code here!
	const onesOrZeros = {
		1: 0,
		0: 0
	}

	for (let index = 0; index < str.length; index++) {
		const element = str[index];

		if (element == 1) {
			onesOrZeros[1] += 1
		} else {
			onesOrZeros[0] += 1
		}

	}

	return onesOrZeros
}

export const reverseNumber = (n) => {
	if (n === undefined) throw new Error('n is required');
	// Your code here!
	const reversedNum = n
		.toString()
		.split('')
		.reverse()
		.join('')
	return parseInt(reversedNum);
};

export const sumArrays = (arrs) => {
	if (arrs === undefined) throw new Error('arrs is required');
	let totalSum = 0;
	// Your code here!
	for (let index = 0; index < arrs.length; index++) {
		const element = arrs[index];
		const sumWithInitial = element.reduce((accumulator, currentValue) => accumulator + currentValue);
		totalSum += sumWithInitial;
	}
	return totalSum
};

export const arrShift = (arr) => {
	if (arr === undefined) throw new Error('arr is required');
	// Your code here!
	if (arr.length == 1) {
		return arr;
	} else {
		const lastElement = arr[arr.length - 1];
		arr.splice(arr.length - 1, 1, arr[0]);
		arr.splice(0, 1, lastElement);
		return arr;
	}
};

export const findNeedle = (haystack, searchTerm) => {
	if (haystack === undefined) throw new Error('haystack is required');
	if (searchTerm === undefined) throw new Error('searchTerm is required');
	// Your code here!

	const terms = searchTerm.toLowerCase()

	if (haystack.product_name != undefined) {
		const name = haystack.product_name.toLowerCase();
		const location = haystack.location.toLowerCase();

		if (name.includes(terms)) {
			return true;
		} else if (location.includes(terms)) {
			return true;
		} else {
			return false;
		}
	} else {
		const name = haystack.name.toLowerCase();
		const description = haystack.description.toLowerCase();
		const store = haystack.store.toLowerCase();

		if (name.includes(terms)) {
			return true;
		} else if (description.includes(terms)) {
			return true;
		} else if (store.includes(searchTerm)) {
			return true;
		}
		else {
			return false;
		}
	}

};

export const getWordFrequencies = (str) => {
	if (str === undefined) throw new Error('str is required');
	// Your code here!
	const string = str.split(' ');
	const obj = {};
	for (let i = 0; i < string.length; i++) {
		const stringAsLowerCase = string[i].toLowerCase().replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g, "")

		if (obj[stringAsLowerCase] !== undefined) {
			obj[stringAsLowerCase] += 1;
		} else {
			obj[stringAsLowerCase] = 1;
		}
	};
	return obj;
};
