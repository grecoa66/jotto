import { mount } from "enzyme";
import { findByTestAttr } from "../test/testUtils";

jest.mock("./actions");

import { getSecretWord as mockGetSecretWord } from "./actions";

import App from "./App";

const setup = () => {
  return mount(<App />);
};

test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");

  expect(appComponent).toHaveLength(1);
});

describe("get secret word", () => {
  beforeEach(() => {
    mockGetSecretWord.mockClear();
  });
  test("get secret word on app mount", () => {
    const wrapper = setup();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });

  test("getSecretWord does not change on component update", () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();

    wrapper.setProps();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  });
});
