import { Button } from "@/components/Button";
import { Filter } from "@/components/Filter";
import { Input } from "@/components/Input";
import { Item } from "@/components/Item";
import { FilterStatus } from "@/Types/FilterStatus";
import { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from "./styles";

const FILTERS_STATUS: FilterStatus[] = [
	FilterStatus.DONE,
	FilterStatus.PENDING
];

const ITEMS = [
	{id: '1', description: 'Coffee', status: FilterStatus.DONE},
	{id: '2', description: 'Milk', status: FilterStatus.PENDING},
	{id: '3', description: 'Bread', status: FilterStatus.DONE},
	{id: '4', description: 'Eggs', status: FilterStatus.PENDING},
	{id: '5', description: 'Butter', status: FilterStatus.DONE},
	{id: '6', description: 'Cheese', status: FilterStatus.PENDING},
	{id: '7', description: 'Fruits', status: FilterStatus.DONE},
	{id: '8', description: 'Vegetables', status: FilterStatus.PENDING},
	{id: '9', description: 'Meat', status: FilterStatus.DONE},
	{id: '10', description: 'Fish', status: FilterStatus.PENDING},
]

export function Home() {
	const [filter, setFilter] = useState<FilterStatus>(FilterStatus.PENDING);

	return (
		<View style={styles.container}>
			<Image source={require('@/assets/logo.png')} style={styles.Logo}/>
			<View style={styles.form}>
				<Input placeholder={'What do you need to buy?'}/>
				<Button title={'Add'} onPress={() => console.log("Add")}/>
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
					<TouchableOpacity style={styles.clearButton} onPress={() => console.log("Clear")}>
						<Text style={styles.clearText}>Clear</Text>
					</TouchableOpacity>
				</View>
				<FlatList
					data={ITEMS}
					keyExtractor={(item) => item.id}
					ItemSeparatorComponent={() => <View style={styles.separator}/>}
					contentContainerStyle={styles.listContent}
					ListEmptyComponent={() => <Text style={styles.emptyList}>No items here.</Text>}
					renderItem={({item}) => (
						<Item
							data={item}
							onStatusChange={() => console.log("Status change")}
							onDelete={() => console.log("Delete")}
						/>)}/>
			</View>
		</View>
	);
}
