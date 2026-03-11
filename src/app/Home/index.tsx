import { Button } from "@/components/Button";
import { Filter } from "@/components/Filter";
import { Input } from "@/components/Input";
import { Item } from "@/components/Item";
import { itemStorage, ItemStorage } from "@/storage/itemStorage";
import { FilterStatus } from "@/types/FilterStatus";
import * as Crypto from 'expo-crypto';
import { useEffect, useState } from "react";
import { Alert, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from "./styles";

const FILTERS_STATUS: FilterStatus[] = [
	FilterStatus.DONE,
	FilterStatus.PENDING
];

export function Home() {
	const [filter, setFilter] = useState<FilterStatus>(FilterStatus.PENDING);
	const [description, setDescription] = useState<string>('');
	const [items, setItems] = useState<ItemStorage[]>([]);

	async function loadItems() {
		try {
			const savedItems = await itemStorage.getItemByStatus(filter);
			setItems(savedItems);
		} catch (error) {
			Alert.alert("Error loading items", error instanceof Error ? error.message : String(error));
		}
	};

	useEffect(() => {
		loadItems();
	}, [filter]);

	async function handleAddItem() {
		if (!description.trim()) {
			return Alert.alert("Please enter a description");
		}

		const item = {
			id: Crypto.randomUUID(),
			description,
			status: FilterStatus.PENDING
		}

		await itemStorage.addItem(item);

		filter === FilterStatus.PENDING
			? loadItems()
			: setFilter(FilterStatus.PENDING);
		setDescription('');
		Alert.alert("Successfully added!",
			`"${item.description}" has been added to your list.`
		);
	}

	async function handleRemoveItem(id: string) {
		Alert.alert('Delete Item', 'Are you sure you want to delete this item?', [
			{
				text: 'Cancel',
				style: 'cancel'
			},
			{
				text: 'Delete',
				style: 'destructive',
				onPress: async () => {
					await itemStorage.deleteItem(id);
					loadItems();
					Alert.alert('Item deleted successfully');
				}
			}
		]);
	}

	async function handleClearItems() {
		Alert.alert('Clear Items', 'Are you sure you want to clear all items?', [
			{
				text: 'Cancel',
				style: 'cancel'
			},
			{
				text: 'Clear',
				style: 'destructive',
				onPress: async () => {
					await itemStorage.clearItems();
					setItems([]);
					Alert.alert('All items cleared successfully');
				}
			}
		]);
	}

	async function handleStatusChange(id: string): Promise<void> {
		try {
			await itemStorage.toggleItemStatus(id);
			await loadItems()
		} catch (error) {
			Alert.alert("Error updating item status", error instanceof Error ? error.message : String(error));
			throw error;
		}

	}

	return (
		<View style={styles.container}>
			<Image source={require('@/assets/logo.png')} style={styles.Logo}/>
			<View style={styles.form}>
				<Input
					placeholder={'What do you need to buy?'}
					onChangeText={setDescription}
					value={description}
				/>
				<Button title={'Add'} onPress={handleAddItem}/>
			</View>
			<View style={styles.content}>
				<View style={styles.header}>
					{FILTERS_STATUS.map((status) => (
						<Filter
							key={status}
							status={status}
							isActive={status === filter}
							onPress={() => setFilter(status)}
						/>
					))}
					<TouchableOpacity style={styles.clearButton} onPress={() => handleClearItems()}>
						<Text style={styles.clearText}>Clear</Text>
					</TouchableOpacity>
				</View>
				<FlatList
					data={items}
					keyExtractor={(item) => item.id}
					ItemSeparatorComponent={() => <View style={styles.separator}/>}
					contentContainerStyle={styles.listContent}
					ListEmptyComponent={() => <Text style={styles.emptyList}>No items here.</Text>}
					renderItem={({item}) => (
						<Item
							data={item}
							onStatusChange={() => handleStatusChange(item.id)}
							onDelete={() => handleRemoveItem(item.id)}
						/>)}/>
			</View>
		</View>
	);
}
