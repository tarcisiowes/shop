import { Button } from "@/components/Button";
import { Filter } from "@/components/Filter";
import { Input } from "@/components/Input";
import { FilterStatus } from "@/Types/FilterStatus";
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
				<Filter status={FilterStatus.DONE} isActive={true}/>
				<Filter status={FilterStatus.PENDING} isActive={false}/>
			</View>
		</View>
	);
}
