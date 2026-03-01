import { Button } from "@/components/Button";
import { Filter } from "@/components/Filter";
import { Input } from "@/components/Input";
import { FilterStatus } from "@/Types/FilterStatus";
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from "./styles";

const FILTERS_STATUS: FilterStatus[] = [
	FilterStatus.DONE,
	FilterStatus.PENDING
]

export function Home() {
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
						<Filter key={status} status={status} isActive={status === FilterStatus.DONE}/>
					))}
					<TouchableOpacity style={styles.clearButton} onPress={() => console.log("Clear")}>
						<Text style={styles.clearText}>Clear</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}
