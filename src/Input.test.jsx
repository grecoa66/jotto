import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { findByTestAttr } from "../test/testUtils";
import Input from "./Input";

const mockSetCurrentGuess = jest.fn();

// Mock out react
jest.mock("react", () => ({
  // add all the contents of react back to module
  ...jest.requireActual("react"),
  // mock the useState function for testing mock
  useState: (initialState: object) => [initialState, mockSetCurrentGuess],
}));

const setup = (success = false, secretWord = "hockey") => {
  return shallow(<Input success={success} secretWord={secretWord} />);
};

describe("render", () => {
  describe("success is true", () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
      wrapper = setup(true);
    });

    test("renders without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });

    test("input field is not shown", () => {
      const component = findByTestAttr(wrapper, "input-field");
      expect(component.exists()).toBe(false);
    });

    test("submit button is not shown", () => {
      const component = findByTestAttr(wrapper, "input-submit-button");
      expect(component.exists()).toBe(false);
    });
  });

  describe("success is false", () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
      wrapper = setup(false);
    });

    test("renders without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });

    test("input field is shown", () => {
      const component = findByTestAttr(wrapper, "input-field");
      expect(component.exists()).toBe(true);
    });

    test("submit button is shown", () => {
      const component = findByTestAttr(wrapper, "input-submit-button");
      expect(component.exists()).toBe(true);
    });
  });
});

describe("state controlled input field", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    wrapper = setup();
  });

  test("state updates with value of input box upon change", () => {
    const inputField = findByTestAttr(wrapper, "input-field");

    const mockEvent = { target: { value: "hockey" } };

    inputField.simulate("change", mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("hockey");
  });

  test("setCurrentGuess is called with an empty string", () => {
    const submitButton = findByTestAttr(wrapper, "input-submit-button");

    const mockEvent = { preventDefault() {} };
    submitButton.simulate("click", mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });
});
