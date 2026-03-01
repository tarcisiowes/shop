import { styles } from "@/components/Filter/styles";
import { FilterStatus } from "@/Types/FilterStatus";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
	status: FilterStatus
	isActive: boolean
}

export function Filter({status, isActive, ...rest}: Props) {
	return (
		<TouchableOpacity style={styles.container} {...rest}>
			<Text style={styles.title}>{status === FilterStatus.DONE ? 'Bought' : 'Pending'}</Text>
		</TouchableOpacity>
	);
}