import { Button } from "@/components/Button";
import { Image, View } from 'react-native';
import { styles } from "./styles";

export function Menu() {
	return (
		<View style={styles.container}>
			<Image source={require('@/assets/logo.png')} style={styles.Logo}/>
			<Button title={'Save'} onPress={() => console.log("Saved")}/>
		</View>
	);
}
