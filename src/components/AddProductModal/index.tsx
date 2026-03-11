import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Modal, Platform, Text, TouchableOpacity, View } from 'react-native';
import { Input } from '../Input';
import { styles } from './styles';

interface AddProductModalProps {
	visible: boolean;
	onClose: () => void;
	onAdd: (description: string, date: Date, time: Date) => void;
}

export function AddProductModal({visible, onClose, onAdd}: AddProductModalProps) {
	const [description, setDescription] = useState('');
	const [date, setDate] = useState<Date | null>(null);
	const [showDatePicker, setShowDatePicker] = useState(false);
	const [time, setTime] = useState<Date | null>(null);
	const [showTimePicker, setShowTimePicker] = useState(false);

	const handleDateChange = (_: any, selectedDate?: Date) => {
		setShowDatePicker(Platform.OS === 'ios');
		if (selectedDate) setDate(selectedDate);
	};

	const handleTimeChange = (_: any, selectedTime?: Date) => {
		setShowTimePicker(Platform.OS === 'ios');
		if (selectedTime) setTime(selectedTime);
	};

	const handleAdd = () => {
		const trimmed = description.trim();
		if (!trimmed) return;
		onAdd(trimmed, date!, time!);
		setDescription('');
		setDate(null);
		setTime(null);
		onClose();
	};

	return (
		<Modal visible={visible} transparent animationType="slide">
			<View style={styles.overlay}>
				<KeyboardAvoidingView
					behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
					keyboardVerticalOffset={20}
					style={{width: '100%'}}
				>
					<View style={styles.container}>
						<Text style={styles.title}>Product Description</Text>
						<Input
							multiline
							placeholder="Product description"
							value={description}
							onChangeText={setDescription}
							style={styles.textArea}
						/>
						<View style={styles.row}>
							<TouchableOpacity onPress={() => setShowDatePicker(true)}>
								<Ionicons name="calendar-outline" size={24} color="#2c46b1"/>
							</TouchableOpacity>
							{date && (
								<View style={styles.dateInput}><Text style={styles.dateText}>{date.toLocaleDateString()}</Text></View>
							)}
							{showDatePicker && (
								<DateTimePicker
									value={date || new Date()}
									mode="date"
									display="default"
									onChange={handleDateChange}
								/>
							)}
						</View>
						<View style={styles.row}>
							<TouchableOpacity onPress={() => setShowTimePicker(true)}>
								<Ionicons name="time-outline" size={24} color="#2c46b1"/>
							</TouchableOpacity>
							{time && (
								<View style={styles.dateInput}><Text style={styles.dateText}>{time.toLocaleTimeString([], {
									hour: '2-digit',
									minute: '2-digit'
								})}</Text></View>
							)}
							{showTimePicker && (
								<DateTimePicker
									value={time || new Date()}
									mode="time"
									display="default"
									onChange={handleTimeChange}
								/>
							)}
						</View>
						<View style={styles.buttonRow}>
							<TouchableOpacity onPress={onClose} style={styles.cancelButton}>
								<Text style={styles.cancelText}>Cancel</Text>
							</TouchableOpacity>
							<TouchableOpacity onPress={handleAdd} style={styles.addButton} disabled={!date || !time || !description.trim()}>
								<Text style={styles.addText}>Add</Text>
							</TouchableOpacity>
						</View>
					</View>
				</KeyboardAvoidingView>
			</View>
		</Modal>
	);
}
