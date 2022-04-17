import React from 'react';
import { mount } from '@cypress/react';
import LoginForm from "./loginform";

it('renders without crashing', () => {
  mount(<LoginForm />);
});