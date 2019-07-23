import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

describe('App Component', () => {
	it.skip('renders without crashing the app', () => {
		shallow(<App />);
	});
});
