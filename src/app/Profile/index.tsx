import { Button } from "@/components/Button";
import { View } from 'react-native';
import { styles } from "./styles";

export function Profile() {
	return (
		<View style={styles.container}>
			<Button title={'Edit'} onPress={() => console.log("Edit")}/>
		</View>
	);
}
