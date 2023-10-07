import {
    printColours,
    shoppingList,
    highestNumber,
    splitThatString,
    addressLookUp,
} from '../challenges/exercise008-optional';

describe('colours', () => {
    test.skip('returns a list of colours', () => {
        const colours = ['red', 'orange', 'green'];
        expect(printColours(colours)).toEqual(colours);
    });
});

describe('shoppingList', () => {
    test.skip('returns a list with an extra item', () => {
        const list = [
            'one apple',
            'two dozen organic eggs',
            'cucumber',
            'bread',
        ];
        const newItem = ['earl grey tea'];
        expect(shoppingList(list, newItem)).toEqual([
            'one apple',
            'two dozen organic eggs',
            'cucumber',
            'bread',
            'earl grey tea',
        ]);
    });

    test.skip('returns an empty list with new items added to it', () => {
        const list = [];
        const newItem = ['jelly', 'melon', 'pear'];
        expect(shoppingList(list, newItem)).toEqual(['jelly', 'melon', 'pear']);
    });
});

describe('highestNumber', () => {
    test.skip('returns the highest number', () => {
        const numbers = [12, 20, 18];
        expect(highestNumber(numbers)).toEqual(20);
    });
});

describe('splitThatString', () => {
    test.skip('returns a string split up', () => {
        const string = 'USA';
        expect(splitThatString(string)).toEqual(['U', 'S', 'A']);
    });
    test.skip('returns a string split up', () => {
        const string = '123';
        expect(splitThatString(string)).toEqual(['1', '2', '3']);
    });
});

// Optional Chaining

describe('addressLookUp', () => {
    test.skip('returns a users postcode', () => {
        const user = {
            name: 'JimBob Eggs',
            telephone: 666,
            likes: 'cheese',
            dislikes: 'dirty socks',
            address: {
                houseNumber: 'The Number of the Beast',
                postcode: 'H12 333',
            },
        };
        expect(addressLookUp(user)).toEqual('H12 333');
    });
    test.skip("returns undefined if address isn't provided", () => {
        const user = {
            name: 'JimBob Eggs',
            telephone: 666,
            likes: 'cheese',
            dislikes: 'dirty socks',
        };
        expect(addressLookUp(user)).toEqual(undefined);
    });
});
