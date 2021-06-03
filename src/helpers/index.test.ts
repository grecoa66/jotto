import { getLetterMatchCount, createWordSet } from "./index";

describe("getLetterMatchCount", () => {
  const secretWord = "hockey";

  test("returns 0 when there are no matching letters", () => {
    const letterMatchCount = getLetterMatchCount("guitar", secretWord);

    expect(letterMatchCount).toBe(0);
  });
  test("returns correct count when there are some matching letters", () => {
    const letterMatchCount = getLetterMatchCount("mocked", secretWord);

    expect(letterMatchCount).toBe(4);
  });
  test("Returns the correct count when there are duplicate letters in the test", () => {
    const letterMatchCount = getLetterMatchCount("cookie", secretWord);

    expect(letterMatchCount).toBe(4);
  });
});
