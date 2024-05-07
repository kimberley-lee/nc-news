import { expect, test, describe, afterEach, beforeEach, vi } from "vitest";
import { convertToRelativeDate } from "./dates";

describe("convertToRelativeDate", () => {
  // TODO: figure out how to mock the date
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime("2024-01-01");
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  test("it returns a string of a relative date from current date", () => {
    const date = "2024-01-01T00:00:00.000Z";
    expect(convertToRelativeDate(date)).toBe("less than a minute ago");
  });
  test("it returns a string of a relative date from current date", () => {
    const date = "2023-12-31T00:00:00.000Z";
    expect(convertToRelativeDate(date)).toBe("1 day ago");
  });
  test("it returns a string of a relative date from current date", () => {
    const date = "2023-12-01T00:00:00.000Z";
    expect(convertToRelativeDate(date)).toBe("about 1 month ago");
  });
  test("it returns a string of a relative date from current date", () => {
    const date = "2023-01-01T00:00:00.000Z";
    expect(convertToRelativeDate(date)).toBe("about 1 year ago");
  });
  test("it returns a string of a relative date from current date", () => {
    const date = "2020-10-18T01:26:00.000Z";
    expect(convertToRelativeDate(date)).toBe("about 3 years ago");
  });
  test("it returns a string of a relative date from current date", () => {
    const date = "2019-01-31T08:26:00.000Z";
    expect(convertToRelativeDate(date)).toBe("almost 5 years ago");
  });
});
