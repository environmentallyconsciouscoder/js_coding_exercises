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