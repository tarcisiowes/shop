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

export const ItemStorage = {
	saveItems,
	getItems
};