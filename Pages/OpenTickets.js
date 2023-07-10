import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable, Modal, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MultipleSelectList } from 'react-native-dropdown-select-list';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';


const OpenTicket = () => {

    const [modalVisible, setModalVisible] = useState(false);

    const [activeTab, setActiveTab] = useState('Tab1');
    
    const handleTabPress = (tabName) => {
    setActiveTab(tabName);
    };

    const data = [
        {key:'1', value:'name1'},
        {key:'2', value:'name2'},
        {key:'3', value:'name3'},
        {key:'4', value:'name4'},
        {key:'5', value:'name5'},
    ]

    const [value, onChange] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleSelect = (values) => {
    setSelected(values);
  };

    return (
        <View style={styles.container}>
        <ScrollView>
        <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === 'Tab1' && styles.activeTab]}
          onPress={() => handleTabPress('Tab1')}
        >
          <Text style={styles.tabText}>Open Ticket</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === 'Tab2' && styles.activeTab]}
          onPress={() => handleTabPress('Tab2')}
        >
          <Text style={styles.tabText}>Close Ticket</Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'Tab1' && (
        <View>
          <Modal animationType="slide" transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView} >
              <Pressable style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Filter</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
          <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)} >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={[styles.textStyle, { marginRight: 150 }]}>Ticket Priority</Text>
                <Icon name='chevron-down' size={15} color='#000' />
              </View>
              </Pressable>
              <MultipleSelectList 
                onSelect={() => alert(selected)}
                setSelected={(val) => setSelected(val)} 
                label="Tickets assigned to" 
                data={data}  
                arrowicon={<MaterialIcons name="keyboard-arrow-down" size={24} color="black" />}
                searchicon={<MaterialIcons name="search" size={24} color="black" />} 
                search={true} 
                boxStyles={{borderRadius:0, width: 300, height: 45, borderRadius: 20,paddingHorizontal:20, marginLeft:10}}
              />
                          
              <View><TouchableOpacity style={styles.button3} onPress={showDatePicker}>
              <Text style={[styles.buttonText3, { marginRight: 100 } ] }>Select Date and Time</Text>
              <Icon name='chevron-down' size={15} color='#000' />
              </TouchableOpacity>

              <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="datetime"
              onConfirm={handleDateConfirm}
              onCancel={hideDatePicker}
              />
              </View>
                          
                           

            <TextInput
              style={styles.textinput}
              placeholder='search with ticket number here..'
              keyboardType='numeric'
              maxLength={10}
              placeholderTextColor='gray'
            />
            <View style={[styles.card, styles.elevation]}>
          <View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.texthead5}>
                High
              </Text>
              <Text style={styles.texthead06}>
                Created on 4 Apirl 2023
              </Text>
            </View>
            <Text style={styles.heading01}>Testing</Text>
            <Text style={styles.heading02}>Testing</Text>
            <Text style={styles.heading03}>Assigned on 10 Apirl 2023</Text>
            <View style={{ flexDirection: 'row', width: '80%', justifyContent: 'space-around' }}>
            </View>
          </View>
        </View>
        </View>
      )}
      {activeTab === 'Tab2' && (
        <View>
          <Text style={styles.text}>Content for Tab 2</Text>
        </View>
      )}
      </ScrollView>
      </View>
    )
}

const styles = StyleSheet.create({

})

export default OpenTicket;