"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const asyncTesting_1 = __importDefault(require("../asyncTesting"));
it("should get basic data on the country canada", () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield asyncTesting_1.default.getCountry('canada');
    expect(data).toEqual({
        capital: 'Ottawa',
        region: 'Americas',
        numericCode: '124'
    });
}));
/** Add test for getRegionCountries function here */
it("should get capitals of NAFTA countries", () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield asyncTesting_1.default.getRegionCapitals('nafta');
    expect(data).toEqual([
        'Ottawa', 'Mexico City', 'Washington, D.C.'
    ]);
}));
it("should get the countries in the region NAFTA", () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield asyncTesting_1.default.getRegionCountries('nafta');
    expect(data).toEqual([
        'Canada', 'Mexico', 'United States of America'
    ]);
}));
