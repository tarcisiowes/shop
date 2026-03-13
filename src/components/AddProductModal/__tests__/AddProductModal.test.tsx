import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { AddProductModal } from '../../AddProductModal';

describe('AddProductModal', () => {
	const onClose = jest.fn();
	const onAdd = jest.fn();

	it('renders when visible', () => {
		const {getByText} = render(
			<AddProductModal visible={true} onClose={onClose} onAdd={onAdd}/>
		);
		console.log('getByText:', getByText);
		expect(getByText('Product Description')).toBeTruthy();
	});

	it('does not render when not visible', () => {
		const {queryByText} = render(
			<AddProductModal visible={false} onClose={onClose} onAdd={onAdd}/>
		);
		console.log('queryByText:', queryByText);
		expect(queryByText('Product Description')).toBeNull();
	});

	it('calls onClose when Cancel is pressed', () => {
		const {getByText} = render(
			<AddProductModal visible={true} onClose={onClose} onAdd={onAdd}/>
		);
		console.log('getByText:', getByText);
		fireEvent.press(getByText('Cancel'));
		console.log('onClose:', onClose);
		expect(onClose).toHaveBeenCalled();
	});

	// More tests can be added for input, pickers, and add logic
});
