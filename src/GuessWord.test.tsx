import React from "react";
import { mount } from "enzyme";

import App from "./App";
import { findByTestAttr } from "../test/testUtils";

/**
 * Create wrapper with specified initial conditions,
 * then submit a guess word of 'coffee'
 * @param state - mock state of the App component
 * @returns
 */
const setup = (state = {}) => {
  const wrapper = mount(<App guessedWords={state.guessedWords} />);

  // Add  value to input box
  const inputBox = findByTestAttr(wrapper, "input-field");
  inputBox.simulate("change", { target: { value: "coffee" } });

  const submitButton = findByTestAttr(wrapper, "input-submit-button");
  submitButton.simulate("click", { preventDefault() {} });

  return wrapper;
};

describe.skip("no words have been guessed", () => {
  test("creates GuessedWord table with 1 word", () => {
    const wrapper = setup({
      secretWord: "popcorn",
      guessedWords: [],
      success: false,
    });

    const guessedWordRow = findByTestAttr(wrapper, "guessed-word");

    expect(guessedWordRow).toHaveLength(1);
  });
});

describe.skip("some words have been guessed", () => {
  const wrapper = setup({
    secretWord: "popcorn",
    guessedWords: [
      { guessedWord: "poprocks", letterMatchCount: 5 },
      { guessedWord: "zamboni", letterMatchCount: 2 },
    ],
    success: false,
  });

  test("the GuessWord table has 3 entries", () => {
    const guessedWordRows = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordRows).toHaveLength(3);
  });
});

describe.skip("the correct word has been guessed", () => {
  const wrapper = setup({
    secretWord: "popcorn",
    guessedWords: [
      { guessedWord: "poprocks", letterMatchCount: 5 },
      { guessedWord: "zamboni", letterMatchCount: 2 },
    ],
    success: false,
  });

  const inputBox = findByTestAttr(wrapper, "input-field");
  inputBox.simulate("change", { target: { value: "popcorn" } });

  const submitButton = findByTestAttr(wrapper, "input-submit-button");
  submitButton.simulate("click", { preventDefault() {} });

  test("the success banner is shown", () => {
    const successComponent = findByTestAttr(wrapper, "component-congrats");
    expect(successComponent.exists()).toBe(true);
  });

  test("the input box is hidden", () => {
    const inputBox = findByTestAttr(wrapper, "input-field");
    expect(inputBox.exists()).toBe(false);
  });

  test("the guessed words table is hidden", () => {
    const guessedWordsList = findByTestAttr(wrapper, "guessed-words-list");
    expect(guessedWordsList.exists()).toBe(false);
  });
});
