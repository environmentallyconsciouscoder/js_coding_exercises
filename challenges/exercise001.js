// 👉 	Each function below has some test cases in `exercise001.test.js`
// 		You can run these tests with `npm test`.
//  	All the test cases must pass for each function.

// Note: Be sure to read the corresponding .md file for each exercise, in the docs folder. 📘 👍

export function capitalize(word) {
	if (word === undefined) throw new Error('word is required');
	// Add your code here!
	return word[0].toUpperCase() + word.slice(1);
}

export function generateInitials(firstName, lastName) {
	if (firstName === undefined) throw new Error('firstName is required');
	if (lastName === undefined) throw new Error('lastName is required');
	// Add your code here!
	return firstName[0] + "." + lastName[0];
}

export function addVAT(originalPrice, vatRate) {
	if (originalPrice === undefined)
		throw new Error('originalPrice is requied');
	if (vatRate === undefined) throw new Error('vatRate is required');
	const totalAmount = (vatRate / 100 * originalPrice) + originalPrice;
	return Number.isInteger(totalAmount) ? totalAmount : parseFloat(totalAmount.toFixed(2));
	// Add your code here!
}

export function getSalePrice(originalPrice, reduction) {
	if (originalPrice === undefined)
		throw new Error('originalPrice is required');
	if (reduction === undefined) throw new Error('reduction is required');
	// Add your code here!
	const salePrice = originalPrice - ((reduction / 100) * originalPrice);
	if (!Number.isInteger(salePrice)) {
		return salePrice.toString().split('.')[1].length > 2 ? parseFloat(salePrice.toFixed(2)) : salePrice;
	}
	return salePrice
}

export function getMiddleCharacter(str) {
	if (str === undefined) throw new Error('str is required');
	// Add your code here!
	const middleIndex = Math.floor(str.length / 2);
	if (str.length % 2 == 0) {
		return str[middleIndex - 1] + str[middleIndex]
	} else {
		return str[middleIndex]
	}
}

export function reverseWord(word) {
	if (word === undefined) throw new Error('word is required');
	// Add your code here!
	return word.split("").reverse().join("");
}

export function reverseAllWords(words) {
	if (words === undefined) throw new Error('words is required');
	// Add your code here!
	const wordsList = words.map((word) => {
		return word.split("").reverse().join("");
	})
	return wordsList;
}

export function countLinuxUsers(users) {
	if (users === undefined) throw new Error('users is required');
	// Add your code here!
	const linuxUsers = users.filter((user) => { return user.type == "Linux" })
	return linuxUsers.length;
}

export function getMeanScore(scores) {
	if (scores === undefined) throw new Error('scores is required');
	// Add your code here!
	const sum = scores.reduce(function (a, b) {
		return a + b;
	}, 0);
	return parseFloat((sum / scores.length).toFixed(2));
}

export function simpleFizzBuzz(n) {
	if (n === undefined) throw new Error('n is required');
	// Add your code here!
	if (n % 3 === 0 && n % 5 === 0) {
		console.log(n);
		return "fizzbuzz";
	} else if (n % 3 === 0) {
		return "fizz";
	} else if (n % 5 === 0) {
		return "buzz";
	} else {
		return n;
	}
}
