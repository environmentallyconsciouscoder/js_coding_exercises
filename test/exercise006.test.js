import {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered,
} from "../challenges/exercise006";

describe("sumMultiples", () => {
    test("returns the sum of all multiples of 3 and 5", () => {
        expect(sumMultiples([15, 30, 45, 1, 2, 4])).toBe(90);
    });

    test("returns zero if there are no multiples of 3 and 5", () => {
        expect(sumMultiples([1, 2, 4])).toBe(0);
    });
});

describe("isValidDNA", () => {
    test("returns true if it is valid DNA", () => {
        expect(isValidDNA('C')).toBe(true);
    });

    test("returns false if it's not valid DNA", () => {
        expect(isValidDNA('Z')).toBe(false);
    });
});

describe("getComplementaryDNA", () => {
    test("returns complementary DNA", () => {
        expect(getComplementaryDNA("ACTG")).toBe("TGAC");
    });

    test("returns complementary DNA", () => {
        expect(getComplementaryDNA("TT")).toBe("AA");
    });
});

describe("isItPrime", () => {
    test("returns true if it is prime number", () => {
        expect(isItPrime(29)).toBe(true);
    });

    test("returns false if it's not prime number", () => {
        expect(isItPrime(24)).toBe(false);
    });
});

describe("createMatrix", () => {
    test("should receive a number and return an array of n arrays", () => {
        expect(createMatrix("foo", 3)).toStrictEqual([["foo", "foo", "foo"], ["foo", "foo", "foo"], ["foo", "foo", "foo"]]);
    });
});

describe("areWeCovered", () => {

    const list = [
        { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
        { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
        { name: "josh", rota: ["Monday", "Tuesday", "Friday"] },
    ]

    test("should true if there are 3 or more staff working", () => {
        expect(areWeCovered(list, "Tuesday")).toStrictEqual(true);
    });

    test("should false if there are less than 3 staffs working", () => {
        expect(areWeCovered(list, "Monday")).toStrictEqual(false);
    });
});