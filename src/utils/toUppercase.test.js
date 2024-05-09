import { toUppercase } from "./toUppercase.js";
import { expect, test, describe } from "vitest";

describe("toUppercase", () => {
  test("should return a string with the first letter capitalised", () => {
    const input = "code";
    const expected = "Code";
    expect(toUppercase(input)).toBe(expected);
  });
  test("should return a string with the first letter capitalised", () => {
    const input = "football";
    const expected = "Football";
    expect(toUppercase(input)).toBe(expected);
  });
  test("should return a string with the first letter capitalised", () => {
    const input = "cooking";
    const expected = "Cooking";
    expect(toUppercase(input)).toBe(expected);
  });
});
