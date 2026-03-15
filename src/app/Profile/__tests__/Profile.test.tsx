import { render } from '@testing-library/react-native';
import React from 'react';
import { Profile } from '../index';

describe('Profile Screen', () => {
	it('renders without crashing', () => {
		const {toJSON} = render(<Profile/>);
		expect(toJSON()).toBeTruthy();
	});
});

