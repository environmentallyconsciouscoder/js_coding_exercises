export function getFillings(sandwich) {
	if (sandwich === undefined) throw new Error('ingredients is required');
	// Your code here!
	return sandwich.fillings;
}

export function isFromManchester(person) {
	if (person === undefined) throw new Error('person is required');
	// Your code here!
	return person.city == 'Manchester' ? true : false;
}

export function getBusNumbers(people) {
	if (people === undefined) throw new Error('people is required');
	// Your code here!
	return Math.ceil(people / 40)
}

export function countSheep(arr) {
	if (arr === undefined) throw new Error('arr is required');
	// Your code here!
	const listOfSheeps = arr.filter((data) => {
		return data == "sheep"
	});
	return listOfSheeps.length;
}

export function hasMPostCode(person) {
	if (person === undefined) throw new Error('person is required');
	// Your code here!
	if (person.address.city == "Manchester") {
		return person.address.postCode[0] == "M";
	} else {
		return false;
	}
}
