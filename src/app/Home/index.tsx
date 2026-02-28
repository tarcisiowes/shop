import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Image, View } from 'react-native';
import { styles } from "./styles";

export function Home() {
	return (
		<View style={styles.container}>
			<Image source={require('@/assets/logo.png')} style={styles.Logo}/>
			<View style={styles.form}>
				<Input placeholder={'What do you need to buy?'}/>
				<Button title={'Add'} onPress={() => console.log("Add")}/>
			</View>
			<View style={styles.content}>

			</View>
		</View>
	);
}
