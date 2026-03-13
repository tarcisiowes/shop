import { FilterStatus } from '@/types/FilterStatus';
import { itemStorage } from '../itemStorage';

describe('itemStorage', () => {
	it('should add and retrieve an item', async () => {
		const item = {id: '1', description: 'Test', status: FilterStatus.PENDING, date: '', time: ''};
		await itemStorage.addItem(item);
		const items = await itemStorage.getItemByStatus(FilterStatus.PENDING);
		expect(items.some(i => i.id === '1')).toBe(true);
	});

	// More tests for delete, clear, and toggle status can be added
});
