import { StatusIcon } from "@/components/StatusIcon";
import { FilterStatus } from "@/Types/FilterStatus";
import { Trash2 } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type ItemData = {
	description: string;
	status: FilterStatus;
}

type Props = {
	data: ItemData;
	onStatusChange: () => void;
	onDelete: () => void;
}

export function Item({data, onStatusChange, onDelete}: Props) {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				activeOpacity={0.8}
				onPress={onStatusChange}>
				<StatusIcon status={data.status}/>
			</TouchableOpacity>
			<Text style={styles.description}>
				{data.description}
			</Text>
			<TouchableOpacity
				activeOpacity={0.8}
				onPress={onDelete}>
				<Trash2 size={18} color={'#ca0000'}/>
			</TouchableOpacity>
		</View>
	);
}