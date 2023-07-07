import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
// import { AntDesign } from '@expo/vector-icons';

const Filter = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState('');
  const [selectedSalary, setSelectedSalary] = useState('');
  const [location, setLocation] = useState('');

  const [number, setNumber] = useState(0);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const resetFilter = () => {
    setSelectedExperience('');
    setSelectedSalary('');
    setLocation('');
  };

  const handleApplyFilter = () => {
    // Apply the filter based on the selected values
    console.log('Selected Experience:', selectedExperience);
    console.log('Selected Salary:', selectedSalary);
    console.log('Location:', location);

    // Close the modal
    toggleModal();
  };

  const handleIncrement = () => {
    setNumber(number + 1);
  };

  const handleDecrement = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  const handleTextChange = (text) => {
    // Ensure only numeric input is allowed
    if (/^\d*$/.test(text)) {
      setNumber(parseInt(text));
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.filterButton} onPress={toggleModal}>
        <Text style={styles.filterButtonText}>Filter</Text>
      </TouchableOpacity>

      <Modal visible={isModalVisible} transparent animationType="fade">
        <View style={styles.modalBackdrop}>
          <View style={styles.modalContent}>
            <View style={{ flexDirection : 'row', justifyContent : 'space-between', width : '100%' }}>
              <Text style={styles.texthead01}>FilterBy</Text>
              <TouchableOpacity onPress={resetFilter}>
                <Text style={styles.reset}>Reset</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.texthead}>Experience</Text>

            {/* <TouchableOpacity style={styles.button} onPress={handleDecrement}>
        <AntDesign name="caretleft" size={20} color="black" />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        value={number.toString()}
        onChangeText={handleTextChange}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handleIncrement}>
        <AntDesign name="caretright" size={20} color="black" />
      </TouchableOpacity> */}
            <Picker
              selectedValue={selectedExperience}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedExperience(itemValue)}
            >
              <Picker.Item label="Select experience" value="" />
              <Picker.Item label="1-2 years" value="1-2 years" />
              <Picker.Item label="2-5 years" value="2-5 years" />
              <Picker.Item label="5-10 years" value="5-10 years" />
              <Picker.Item label="10+ years" value="10+ years" />
            </Picker>

            <Text style={styles.texthead}>Salary</Text>
            <Picker
              selectedValue={selectedSalary}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedSalary(itemValue)}
            >
              <Picker.Item label="Select salary" value="" />
              <Picker.Item label='>3 LPA' value='>3 LPA' />
              <Picker.Item label="3-5 LPA" value="3-5 LPA" />
              <Picker.Item label="5-8 LPA" value="5-8 LPA" />
              <Picker.Item label="8-10 LPA" value="8-10 LPA" />
              <Picker.Item label="10-12 LPA" value="10-12 LPA" />
              <Picker.Item label="12-15 LPA" value="12-15 LPA" />
              <Picker.Item label="15+ LPA" value="15+ LPA" />
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
    // backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  filterButtonText: {
    color: 'green',
    // fontSize: 16,
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '70%',
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
    backgroundColor : '#DCDCDC',
  },
  text : {
    color : 'black'
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
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#808080',
    justifyContent: 'center',
    alignItems: 'center',
    color : 'black',
  },
  input: {
    // flex: 1,
    height: '10%',
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#808080',
    borderRadius: 5,
    paddingHorizontal: 10,
    color : 'black',
  },
})

export default Filter;
