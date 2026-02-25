import { styles } from "@/components/Button/styles";
import { Text, TouchableOpacity } from "react-native";

export function Button(props: {title: string; onPress: () => void}) {
	return (
		<TouchableOpacity onPress={props.onPress} style={styles.container} activeOpacity={0.8}>
			<Text style={styles.title}>{props.title}</Text>
		</TouchableOpacity>
	);
}