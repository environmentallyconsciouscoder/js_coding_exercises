export function findSmallNums(nums) {
	if (!nums) throw new Error('nums is required');
	// Your code here
	const newArray = [];
	for (let index = 0; index < nums.length; index++) {
		const element = nums[index];
		if (element < 1) {
			newArray.push(element);
		}
	}
	return newArray;
}

export function findNamesBeginningWith(names, char) {
	if (!names) throw new Error('names is required');
	if (!char) throw new Error('char is required');
	// Your code here
	const newArray = [];
	for (let index = 0; index < names.length; index++) {
		const element = names[index];
		if (element[0] === char) {
			newArray.push(element);
		}
	}
	return newArray;
}

export function findVerbs(words) {
	if (!words) throw new Error('words is required');
	// Your code here
	const newArray = [];

	for (let index = 0; index < words.length; index++) {
		const element = words[index];
		if (element.slice(0, 3) === "to ") {
			newArray.push(element);
		}
	}
	return newArray;
}

export function getIntegers(nums) {
	if (!nums) throw new Error('nums is required');
	// Your code here
	const newArray = [];

	for (let index = 0; index < nums.length; index++) {
		const element = nums[index];
		if (Number.isInteger(element)) {
			newArray.push(element);
		}
	}
	return newArray;
}

export function getCities(users) {
	if (!users) throw new Error('users is required');
	// Your code here
	const newArray = [];

	for (let index = 0; index < users.length; index++) {
		const element = users[index];
		newArray.push(element.data.city.displayName);
	}
	return newArray;
}

export function getSquareRoots(nums) {
	if (!nums) throw new Error('nums is required');
	// Your code here
	const newArray = [];

	for (let index = 0; index < nums.length; index++) {
		const element = nums[index];
		let squareRootNumber = Math.sqrt(element);

		if (Number.isInteger(squareRootNumber)) {
			newArray.push(squareRootNumber);
		} else {
			newArray.push(parseFloat(squareRootNumber.toFixed(2)));
		}
	}
	return newArray;
}

export function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error('sentences is required');
	if (!str) throw new Error('str is required');
	// Your code here
	const newArray = [];

	for (let index = 0; index < sentences.length; index++) {
		const element = sentences[index];
		const capitalizeWord = str[0].toUpperCase() + str.slice(1);
		if (element.includes(str) || element.includes(capitalizeWord)) {
			newArray.push(element);
		}
	}
	return newArray;
}

export function getLongestSides(triangles) {
	if (!triangles) throw new Error('triangles is required');
	const newArray = [];

	// Your code here
	for (let index = 0; index < triangles.length; index++) {
		const element = triangles[index];
		newArray.push(Math.max(...element))
	}
	return newArray;
}
