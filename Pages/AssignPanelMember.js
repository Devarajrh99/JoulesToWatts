import React, { useState } from 'react';
import { View, Button, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

const YourComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedFromDate, setSelectedFromDate] = useState('');
  const [selectedFromTime, setSelectedFromTime] = useState('');
  const [selectedToDate, setSelectedToDate] = useState('');
  const [selectedToTime, setSelectedToTime] = useState('');

  const showPicker = () => {
    setIsModalVisible(true);
  };

  const hidePicker = () => {
    setIsModalVisible(false);
  };

  const handleFromTimeConfirm = (date) => {
    setSelectedFromTime(moment(date).format('hh:mm A'));
    hidePicker();
  };

  const handleToTimeConfirm = (date) => {
    setSelectedToTime(moment(date).format('hh:mm A'));
    hidePicker();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={showPicker}>
        <Text style={styles.buttonText}>Select Dates and Times</Text>
      </TouchableOpacity>

      <Modal isVisible={isModalVisible} onBackdropPress={hidePicker}>
        <View style={styles.modalContainer}>
          <Text>Select From Date</Text>
          <DateTimePickerModal
            isVisible={isModalVisible}
            mode="date"
            onConfirm={(date) => setSelectedFromDate(moment(date).format('YYYY-MM-DD'))}
            onCancel={hidePicker}
          />

          <Text>Select From Time</Text>
          <DateTimePickerModal
            isVisible={isModalVisible}
            mode="time"
            onConfirm={handleFromTimeConfirm}
            onCancel={hidePicker}
          />

          <Text>Select To Date</Text>
          <DateTimePickerModal
            isVisible={isModalVisible}
            mode="date"
            onConfirm={(date) => setSelectedToDate(moment(date).format('YYYY-MM-DD'))}
            onCancel={hidePicker}
          />

          <Text>Select To Time</Text>
          <DateTimePickerModal
            isVisible={isModalVisible}
            mode="time"
            onConfirm={handleToTimeConfirm}
            onCancel={hidePicker}
          />
        </View>
      </Modal>

      {selectedFromDate !== '' && selectedFromTime !== '' && (
        <Text>Selected From: {selectedFromDate} {selectedFromTime}</Text>
      )}

      {selectedToDate !== '' && selectedToTime !== '' && (
        <Text>Selected To: {selectedToDate} {selectedToTime}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
});

export default YourComponent;
