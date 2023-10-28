

export function camelCaseWords(words) {
	if (words === undefined) throw new Error('words is required');
	// Your code here!
	if (words.length === 1) {
		return words[0]
	} else {
		let list = words.map((word, index) => {
			if (index === 0) {
				return words[index];
			} else {
				return words[index][0].toUpperCase() + words[index].slice(1);
			}
		})
		return list.join('');
	}
}

export function getSquares(nums) {
	if (nums === undefined) throw new Error('nums is required');
	// Your code here!
	if (nums.length === 0) {
		return nums
	} else {
		return nums.map((num) => {
			return num * num;
		})
	}
}

export function getTotalSubjects(people) {
	if (people === undefined) throw new Error('people is required');
	// Your code here!
	let count = 0
	people.forEach((ppl) => {
		count += ppl.subjects.length;
	})
	return count;
}

export function checkIngredients(menu, ingredient) {
	if (menu === undefined) throw new Error('menu is required');
	if (!ingredient) throw new Error('ingredient is required');
	// Your code here!
	const list = menu.map((data) => {
		return data.ingredients.includes(ingredient);
	})
	return list.includes(true)
}

export function duplicateNumbers(arr1, arr2) {
	if (arr1 === undefined) throw new Error('arr1 is required');
	if (arr2 === undefined) throw new Error('arr2 is required');
	// Your code here!
	let duplicatedNumbers = [];
	const shorterstArr = arr1.length < arr2.length ? arr1 : arr2;
	const longestArr = arr1.length > arr2.length ? arr1 : arr2;

	for (let index = 0; index < shorterstArr.length; index++) {
		const element = shorterstArr[index];
		if (longestArr.includes(element)) {
			duplicatedNumbers.push(element)
		}
	}

	return duplicatedNumbers.sort();

}
