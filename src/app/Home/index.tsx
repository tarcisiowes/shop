import { Button } from "@/components/Button";
import { Image, View } from 'react-native';
import { styles } from "./styles";

export function Home() {
	return (
		<View style={styles.container}>
			<Image source={require('@/assets/logo.png')} style={styles.Logo}/>
			<Button title={'Add'} onPress={() => console.log("Add")}/>
		</View>
	);
}
