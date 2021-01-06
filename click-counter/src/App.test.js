import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

import App from './App';

// setup enzyme and enzyme adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => shallow( <App /> );

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
}

test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("renders a button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increment-button");
  expect(button.length).toBe(1);
});

test("display the counter", () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

test("counter starts at 0", () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("0");
});

test("clicking increment increases count displayed", () => {
  const wrapper = setup();
  // find the button
  const button = findByTestAttr(wrapper, "increment-button");
  // click the button
  button.simulate('click');
  // find the display and test that the number has been incremented
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("1");
});

test("renders a decrement button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "decrement-button");
  expect(button.length).toBe(1);
});

test("clicking the decrement decreases count displayed", () => {
  const wrapper = setup();
  const incrementButton = findByTestAttr(wrapper, "increment-button");
  incrementButton.simulate('click');
  const decrementButton = findByTestAttr(wrapper, "decrement-button");
  decrementButton.simulate('click');
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("0");
});

test("count doesn't go below 0", () => {
  const wrapper = setup();
  const decrementButton = findByTestAttr(wrapper, "decrement-button");
  decrementButton.simulate('click');
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("0");
});

test("error message not visible at start", () => {
  const wrapper = setup();
  const countZeroError = findByTestAttr(wrapper, "count-zero-error");
  expect(countZeroError.length).toBe(0);
});

test("zero error message appears when decrement on zero count", () => {
  const wrapper = setup();
  const decrementButton = findByTestAttr(wrapper, "decrement-button");
  decrementButton.simulate('click');
  const countZeroError = findByTestAttr(wrapper, "count-zero-error");
  expect(countZeroError.length).toBe(1);
});

test("increment off of zero clears zero error message", () => {
  const wrapper = setup();
  const decrementButton = findByTestAttr(wrapper, "decrement-button");
  decrementButton.simulate('click');
  const incrementButton = findByTestAttr(wrapper, "increment-button");
  incrementButton.simulate('click');
  const countZeroError = findByTestAttr(wrapper, "count-zero-error");
  expect(countZeroError.length).toBe(0);
});