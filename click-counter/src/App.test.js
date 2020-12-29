import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

import App from './App';

// setup enzyme and enzyme adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without error", () => {
  const wrapper = shallow( <App /> )
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

test("renders a button", () => {

});

test("display the counter", () => {

});

test("counter starts at 0", () => {
  
});

test("clicking increment increases count displayed", () => {

});