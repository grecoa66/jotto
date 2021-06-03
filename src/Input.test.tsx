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

const setup = () => {
  return shallow(<Input secretWord="hockey" />);
};

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-input");
  expect(component.length).toBe(1);
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
