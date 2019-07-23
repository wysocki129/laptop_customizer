import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Options from './Options';

const TESTOPTIONS = {
	Processor: [
		{
			name:
				'17th Generation Intel Core HB (7 Core with donut spare)',
			cost: 700
		},
		{
			name:
				'Professor X AMD Fire Breather with sidewinder technology',
			cost: 1200
		}
	]
};

describe('Options Component', () => {
	it('renders without crassing the app', () => {
		shallow(<Options />);
	});
	it('displays options when given', () => {
		const wrapper = shallow(<Options props={TESTOPTIONS} />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
