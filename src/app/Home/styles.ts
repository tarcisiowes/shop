import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#d0d2d8',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 62,
	},
	Logo: {
		height: 34,
		width: 134,
	},
	form: {
		width: '100%',
		marginTop: 42,
		gap: 7,
		paddingHorizontal: 16,
	},
	content: {
		flex: 1,
		width: '100%',
		marginTop: 24,
		backgroundColor: '#ffffff',
		borderTopLeftRadius: 24,
		borderTopRightRadius: 24,
		padding: 24,
	},
	header: {
		width: '100%',
		flexDirection: 'row',
		gap: 12,
		borderBottomWidth: 1,
		borderBottomColor: '#e4e6ec',
		paddingBottom: 16
	},
	clearButton: {
		marginLeft: 'auto',
	},
	clearText: {
		fontSize: 12,
		fontWeight: '600',
		color: '#2c46b1',
	},
	separator: {
		height: 1,
		width: '100%',
		backgroundColor: '#e4e6ec',
		marginVertical: 8,
	},
	listContent: {
		paddingTop: 24,
		paddingBottom: 62,
	},
	emptyList: {
		fontSize: 14,
		color: '#808080',
		textAlign: 'center',
	},
});