import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ELFBranding from './ELFBranding';

describe('ELFBranding Component', () => {
	it('renders without crashing the app', () => {
		shallow(<ELFBranding />);
	});
});
