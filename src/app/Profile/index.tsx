import { Button } from "@/components/Button";
import { View } from 'react-native';
import { styles } from "./styles";

export function Home() {
	return (
		<View style={styles.container}>
			<Button title={'Edit'} onPress={() => console.log("Edit")}/>
		</View>
	);
}
