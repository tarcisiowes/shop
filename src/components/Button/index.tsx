import { styles } from "@/components/Button/styles";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
	title: string;
}

export function Button({title, ...rest}: ButtonProps) {
	return (
		<TouchableOpacity {...rest} style={styles.container} activeOpacity={0.8}>
			<Text style={styles.title}>{title}</Text>
		</TouchableOpacity>
	);
}