import React from 'react';
import { render } from 'react-dom';
import Root from '../../src';

const props = {
  someProp: 'I am the value for some prop',
  anotherProp: 123456789
};

render(<Root {...props} />, document.getElementById('root'));
