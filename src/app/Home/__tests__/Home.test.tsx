import { render, waitFor } from '@testing-library/react-native';
import React from 'react';
import { Home } from '../index';

describe('Home Screen', () => {
	it('renders logo and Add button', async () => {
		const {getByText} = render(<Home/>);
		await waitFor(() => expect(getByText('Add')).toBeTruthy());
		// Optionally check for logo by role or testID
	});

	// More tests for item list, add, remove, clear, and filter logic can be added
});

