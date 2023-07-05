import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Button, StyleSheet, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';


const Filter = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  // const [selectedExperience, setSelectedExperience] = useState('');
  // const [selectedSalary, setSelectedSalary] = useState('');
  // const [location, setLocation] = useState('');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // const resetFilter = () => {
  //   setSelectedExperience('');
  //   setSelectedSalary('');
  //   setLocation('');
  // };

  const handleApplyFilter = () => {
    // Apply the filter based on the selected values
    // console.log('Selected Experience:', selectedExperience);
    // console.log('Selected Salary:', selectedSalary);
    // console.log('Location:', location);

    // Close the modal
    toggleModal();
  };
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [isFromTimePickerVisible, setFromTimePickerVisible] = useState(false);
  const [isToTimePickerVisible, setToTimePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedFromTime, setSelectedFromTime] = useState(null);
  const [selectedToTime, setSelectedToTime] = useState(null);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleDateConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  const showFromTimePicker = () => {
    setFromTimePickerVisible(true);
  };

  const hideFromTimePicker = () => {
    setFromTimePickerVisible(false);
  };

  const handleFromTimeConfirm = (time) => {
    setSelectedFromTime(time);
    hideFromTimePicker();
  };

  const showToTimePicker = () => {
    setToTimePickerVisible(true);
  };

  const hideToTimePicker = () => {
    setToTimePickerVisible(false);
  };

  const handleToTimeConfirm = (time) => {
    setSelectedToTime(time);
    hideToTimePicker();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.filterButton} onPress={toggleModal}>
        <Text style={styles.filterButtonText}>Assign As Panel Member</Text>
      </TouchableOpacity>

      <Modal visible={isModalVisible} transparent animationType="fade">
        <View style={styles.modalBackdrop}>
          <View style={styles.modalContent}>
            {/* <View style={{ flexDirection : 'row', justifyContent : 'space-between', width : '100%' }}>
              <Text style={styles.texthead01}>FilterBy</Text>
              <TouchableOpacity onPress={resetFilter}>
                <Text style={styles.reset}>Reset</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.texthead}>Experience</Text>
            <Picker
              selectedValue={selectedExperience}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedExperience(itemValue)}
            >
              <Picker.Item label="Select experience" value="" />
              <Picker.Item label="1-2 years" value="1-2 years" />
              <Picker.Item label="3-5 years" value="3-5 years" />
              <Picker.Item label="6-10 years" value="6-10 years" />
            </Picker>

            <Text style={styles.texthead}>Salary</Text>
            <Picker
              selectedValue={selectedSalary}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedSalary(itemValue)}
            >
              <Picker.Item label="Select salary" value="" />
              <Picker.Item label="< $5000" value="< $5000" />
              <Picker.Item label="$5000 - $10000" value="$5000 - $10000" />
              <Picker.Item label="> $10000" value="> $10000" />
            </Picker>

            <Text style={styles.texthead}>Location</Text>
            <TextInput
              style={styles.textinput}
              placeholder="Enter location"
              placeholderTextColor='gray'
              value={location}
              onChangeText={setLocation}
            />

            <TouchableOpacity style={styles.filterbutton} onPress={handleApplyFilter}>
              <Text style={styles.text}>Apply Filter</Text>
            </TouchableOpacity> */}

{/* <Button title="Select Date" onPress={showDatePicker} /> */}
<TouchableOpacity style={styles.datebutton} onPress={showDatePicker}><Text style={styles.text}>Choose Date</Text></TouchableOpacity>
{selectedDate && <Text style={styles.datetext}>Selected Date: {moment(selectedDate).format('YYYY-MM-DD')}</Text>}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />


      <View style={{ flexDirection : 'row', width : '100%', justifyContent : 'space-between' }}>
      {/* <Button title="Select From Time" onPress={showFromTimePicker} /> */}
      <View style={{ flexDirection : 'column' }}>
      <TouchableOpacity style={styles.frombutton} onPress={showFromTimePicker}><Text style={styles.text}>From Time</Text></TouchableOpacity>
      {selectedFromTime && <Text style={styles.timetext}>From Time: {moment(selectedFromTime).format('HH:mm')}</Text>}
      <DateTimePickerModal
        isVisible={isFromTimePickerVisible}
        mode="time"
        onConfirm={handleFromTimeConfirm}
        onCancel={hideFromTimePicker}
      />
      </View>

      {/* <Button title="Select To Time" onPress={showToTimePicker} /> */}
      <View style={{ flexDirection : 'column' }}>
      <TouchableOpacity style={styles.tobutton} onPress={showToTimePicker}><Text style={styles.text}>To Time</Text></TouchableOpacity>
      {selectedToTime && <Text style={styles.timetext}>To Time: {moment(selectedToTime).format('HH:mm')}</Text>}
      <DateTimePickerModal
        isVisible={isToTimePickerVisible}
        mode="time"
        onConfirm={handleToTimeConfirm}
        onCancel={hideToTimePicker}
      />
      </View>
      </View>

            <TouchableOpacity style={styles.filterbutton} onPress={handleApplyFilter}>
              <Text style={styles.text}>Apply Filter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterButton: {
    backgroundColor: '#5F9EA0',
    padding: 10,
    borderRadius: 5,
  },
  filterButtonText: {
    color: '#fff',
    // fontSize: 16,
  },
  datebutton : {
    backgroundColor : '#5F9EA0',
    width : '80%',
    alignSelf : 'center',
    marginTop : '10%',
    borderRadius : 5,
  },
  frombutton : {
    backgroundColor : '#5F9EA0',
    width : '80%',
    alignSelf : 'center',
    borderRadius : 5
  },
  tobutton : {
    backgroundColor : '#5F9EA0',
    width : '80%',
    alignSelf : 'center',
    borderRadius : 5
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '70%',
    height : '40%',
  },
  texthead : {
    color : 'black',
    fontWeight : 'bold',
    fontSize : 18
  },
  texthead01 : {
    color : 'black',
    fontWeight : 'bold',
    fontSize : 20
  },
  picker : {
    color : 'black',
    backgroundColor : '#C0C0C0',
  },
  text : {
    color : 'black',
  },
  datetext : {
    color : 'black',
    marginLeft : '10%',
    marginBottom : '10%',
  },
  timetext : {
    color : 'black',
    marginLeft : '10%',
    alignSelf : 'center',
    marginBottom : '10%'
  },
  textinput : {
    borderWidth : 1,
    borderRadius : 10,
    borderColor : 'gray',
    color : 'black'
  },
  filterbutton : {
    backgroundColor : '#5F9EA0',
    color : 'black',
    width : '30%',
    alignSelf : 'center',
    marginTop : '5%',
    borderRadius : 5,
    height : 30,
  },
  reset : {
    color : 'red'
  },
})

export default Filter;
