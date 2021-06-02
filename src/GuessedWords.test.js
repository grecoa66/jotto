import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../test/testUtils";
import GuessedWords from "./GuessedWords";

/**
 * Factory function to create a shallow component wrapper.
 * @param {object} props - component props specific to set up
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<GuessedWords {...props} />);
};

describe("if there are no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });

  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });
  test("renders instructions to guess a words", () => {
    const component = findByTestAttr(wrapper, "component-instructions");
    expect(component.text().length).not.toBe(0);
  });
});

describe("if there are words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      guessedWords: [
        { guessedWord: "coffee", letterMatchCount: 2 },
        { guessedWord: "ginger", letterMatchCount: 1 },
        { guessedWord: "hockey", letterMatchCount: 6 },
      ],
    });
  });

  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });

  test("renders guessed words section", () => {
    const guessedWords = findByTestAttr(wrapper, "guessed-words-list");
    expect(guessedWords.length).toBe(1);
  });

  test("correct number of guessed words", () => {
    const guessedWords = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWords.length).toBe(3);
  });
});
