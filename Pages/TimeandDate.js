import React, { useState } from 'react';
import { View, Button, Text, TouchableOpacity, StyleSheet, Modal, Dimensions } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

const YourComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedFromTime, setSelectedFromTime] = useState('');
  const [selectedToTime, setSelectedToTime] = useState('');

  const showFromTimePicker = () => {
    setIsModalVisible(true);
    setSelectedFromTime('');
  };

  const showToTimePicker = () => {
    setIsModalVisible(true);
    setSelectedToTime('');
  };

  const hideTimePicker = () => {
    setIsModalVisible(false);
  };

  const handleFromTimeConfirm = (date) => {
    const selectedTime = moment(date).format('HH:mm');
    setSelectedFromTime(selectedTime);
    setIsModalVisible(false);
  };

  const handleToTimeConfirm = (date) => {
    const selectedTime = moment(date).format('HH:mm');
    setSelectedToTime(selectedTime);
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={showFromTimePicker}>
        <Text style={styles.buttonText}>Select From Time</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={showToTimePicker}>
        <Text style={styles.buttonText}>Select To Time</Text>
      </TouchableOpacity>

      {selectedFromTime !== '' && (
        <Text style={styles.text}>Selected From Time: {selectedFromTime}</Text>
      )}

      {selectedToTime !== '' && (
        <Text style={styles.text}>Selected To Time: {selectedToTime}</Text>
      )}

      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={hideTimePicker}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedFromTime === '' && (
              <DateTimePickerModal
                isVisible={true}
                mode="time"
                onConfirm={handleFromTimeConfirm}
                onCancel={hideTimePicker}
                headerTextIOS="Select From Time"
              />
            )}

            {selectedToTime === '' && (
              <DateTimePickerModal
                isVisible={true}
                mode="time"
                onConfirm={handleToTimeConfirm}
                onCancel={hideTimePicker}
                headerTextIOS="Select To Time"
              />
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: windowWidth * 0.5,
    height: windowHeight * 0.5,
  },
  text : {
    color: 'black'
  }
});

export default YourComponent;