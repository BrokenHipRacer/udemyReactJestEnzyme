import React from 'react';
import { shallow } from 'enzyme';
import { findByAttr} from "./test/testUtils";

import App from './App';

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => shallow( <App /> );

test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});