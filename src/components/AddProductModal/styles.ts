import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	overlay: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.4)',
		justifyContent: 'center',
		alignItems: 'center',
	},
	container: {
		backgroundColor: '#fff',
		borderRadius: 12,
		padding: 24,
		width: '90%',
		alignItems: 'stretch',
		alignSelf: 'center',
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#2c46b1',
		marginBottom: 16,
		textAlign: 'center',
	},
	textArea: {
		minHeight: 80,
		textAlignVertical: 'top',
		marginBottom: 16,
		borderWidth: 1,
		borderColor: '#c3c5cb',
		borderRadius: 8,
		paddingHorizontal: 12,
		paddingVertical: 8,
		backgroundColor: '#f7f7fa',
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 12,
	},
	dateInput: {
		marginLeft: 8,
		flex: 1,
		borderWidth: 1,
		borderColor: '#c3c5cb',
		borderRadius: 8,
		paddingHorizontal: 12,
		paddingVertical: 8,
		backgroundColor: '#f7f7fa',
	},
	dateText: {
		color: '#2c46b1',
		fontSize: 15,
	},
	buttonRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 20,
	},
	cancelButton: {
		backgroundColor: '#c3c5cb',
		borderRadius: 8,
		paddingVertical: 12,
		paddingHorizontal: 24,
	},
	cancelText: {
		color: '#fff',
		fontWeight: 'bold',
	},
	addButton: {
		backgroundColor: '#2c46b1',
		borderRadius: 8,
		paddingVertical: 12,
		paddingHorizontal: 24,
	},
	addText: {
		color: '#fff',
		fontWeight: 'bold',
	},
});
