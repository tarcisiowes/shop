import { FilterStatus } from "@/types/FilterStatus";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ITEMS_STORAGE_KEY = '@buy:items';

export type ItemStorage = {
	id: string;
	description: string;
	status: FilterStatus;
}

async function saveItems(items: ItemStorage[]) {
	try {
		await AsyncStorage.setItem(ITEMS_STORAGE_KEY, JSON.stringify(items));
	} catch (error) {
		throw new Error('saveItems >>> ' + error);
	}
}

async function getItems(): Promise<ItemStorage[]> {
	try {
		const storedItems = await AsyncStorage.getItem(ITEMS_STORAGE_KEY);

		return storedItems ? JSON.parse(storedItems) : [];
	} catch (error) {
		throw new Error('getItems >>> ' + error);
	}
}

async function getItemByStatus(status: FilterStatus): Promise<ItemStorage[]> {
	try {
		const items = await getItems();
		return items.filter(item => item.status === status);
	} catch (error) {
		throw new Error('getItemByStatus >>> ' + error);
	}
}

async function deleteItem(id: string): Promise<void> {
	try {
		const items = await getItems();
		const newItems = items.filter(item => item.id !== id);
		await saveItems(newItems);
	} catch (error) {
		throw new Error('deleteItem >>> ' + error);
	}
}

export const ItemStorage = {
	saveItems,
	getItems,
	getItemByStatus,
	deleteItem
};