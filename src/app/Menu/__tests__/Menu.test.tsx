import { render } from '@testing-library/react-native';
import React from 'react';
import { Menu } from '../index';

describe('Menu Screen', () => {
	it('renders without crashing', () => {
		const {toJSON} = render(<Menu/>);
		expect(toJSON()).toBeTruthy();
	});
});

