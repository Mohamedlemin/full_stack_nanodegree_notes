"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const arrays_1 = __importDefault(require("../utilities/arrays"));
const numbers_1 = __importDefault(require("../utilities/numbers"));
const strings_1 = __importDefault(require("../utilities/strings"));
const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];
describe('Main part', () => {
    describe('first part', () => {
        it('should capitalize a string', () => {
            expect(strings_1.default.capitalize('a sentence')).toEqual('A Sentence');
        });
        it('should be a sum greater than 10', () => {
            expect(numbers_1.default.sum(3, 10)).toBeGreaterThan(10);
        });
    });
    describe('second part', () => {
        it('multiply 3 by 5 and be 15', () => {
            expect(numbers_1.default.multiply(3, 5)).toEqual(15);
        });
        it('should add numbers in array and be truthy', () => {
            expect(arrays_1.default.addArr(numArr)).toBeTruthy();
        });
        it('should concatenate 2 arrays to not equal just 1', () => {
            expect(arrays_1.default.concatArr(numArr, wordArr)).not.toEqual(numArr);
        });
        it('should not contain the third index', () => {
            expect(arrays_1.default.cut3(wordArr)).not.toContain('rabbit');
        });
        it('should not have a large number and be falsy', () => {
            expect(arrays_1.default.lgNum(wordArr)).toBeFalsy();
        });
    });
});
