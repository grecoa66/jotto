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
  test("renders instructions to guess a word", () => {
    const component = findByTestAttr(wrapper, "component-instructions");
    expect(component.text().length).not.toBe(0);
  });
});

describe("if there are words guessed", () => {});
