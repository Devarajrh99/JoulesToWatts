import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Modal, TouchableWithoutFeedback, Animated } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';


const SideMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const animatedValue = new Animated.Value(0);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    useEffect(() => {
      Animated.timing(animatedValue, {
        toValue: isMenuOpen ? 1 : 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }, [isMenuOpen]);
  
    const opacity = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 0.5],
    });
  
    const menuTranslateX = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-300, 0],
    });

  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [manualDate, setManualDate] = useState('');

  const [isFromTimePickerVisible, setFromTimePickerVisible] = useState(false);
  const [selectedFromTime, setSelectedFromTime] = useState(null);
  const [manualFromTime, setManualFromTime] = useState('');

  const showFromTimePicker = () => {
    setFromTimePickerVisible(true);
  };

  const hideFromTimePicker = () => {
    setFromTimePickerVisible(false);
  };

  const handleFromTimeConfirm = (time) => {
    setSelectedFromTime(time);
    setManualFromTime(time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    hideFromTimePicker();
  };

  const handleManualFromTimeInput = () => {
    const timeParts = manualFromTime.split(':');
    const hours = parseInt(timeParts[0]);
    const minutes = parseInt(timeParts[1]);

    const time = new Date();
    time.setHours(hours);
    time.setMinutes(minutes);

    if (!isNaN(time.getTime())) {
      setSelectedFromTime(time);
    }
  };


  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleDateConfirm = (date) => {
    setSelectedDate(date);
    setManualDate(date.toISOString().split('T')[0]);
    hideDatePicker();
  };

  const handleManualDateInput = () => {
    const dateParts = manualDate.split('-');
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]) - 1;
    const day = parseInt(dateParts[2]);

    const date = new Date(year, month, day);

    if (!isNaN(date.getTime())) {
      setSelectedDate(date);
    }
  };


  const [isToTimePickerVisible, setToTimePickerVisible] = useState(false);
  const [selectedToTime, setSelectedToTime] = useState(null);
  const [manualToTime, setManualToTime] = useState('');

  const showToTimePicker = () => {
    setToTimePickerVisible(true);
  };

  const hideToTimePicker = () => {
    setToTimePickerVisible(false);
  };

  const handleToTimeConfirm = (time) => {
    setSelectedToTime(time);
    setManualToTime(time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    hideToTimePicker();
  };

  const handleManualToTimeInput = () => {
    const timeParts = manualToTime.split(':');
    const hours = parseInt(timeParts[0]);
    const minutes = parseInt(timeParts[1]);

    const time = new Date();
    time.setHours(hours);
    time.setMinutes(minutes);

    if (!isNaN(time.getTime())) {
      setSelectedToTime(time);
    }
  };

  
    return (
      <View style={styles.container}>
        
        <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
          <Text style = {styles.text}>Menu</Text>
        </TouchableOpacity>
  
        <Modal visible={isMenuOpen} transparent animationType="fade">
          <TouchableWithoutFeedback onPress={toggleMenu}>
            <Animated.View style={[styles.overlay, { opacity }]} />
          </TouchableWithoutFeedback>
  
          <Animated.View style={[styles.sideMenu, { transform: [{ translateX: menuTranslateX }] }]}>
            <TouchableOpacity onPress={toggleMenu} style={styles.closeButton}>
              <Text style = {styles.text}>Close Menu</Text>
            </TouchableOpacity>

            <View style={styles.inputContainer}>
            <View style={{flexDirection : 'column'}}>
              <View style={{flexDirection : 'row'}}>
        <TextInput
          style={styles.manualInput}
          placeholder="Enter date manually (YYYY-MM-DD)"
          placeholderTextColor={'gray'}
          value={manualDate}
          onChangeText={setManualDate}
          onBlur={handleManualDateInput}
        />

        <TouchableOpacity style={styles.pickButton} onPress={showDatePicker}>
          <Text style={styles.pickButtonText}>Pick</Text>
        </TouchableOpacity>
        </View>

        <View style={{flexDirection : 'row'}}>
        <TextInput
          style={styles.manualInput}
          placeholder="Enter From time manually (HH:MM)"
          placeholderTextColor={'black'}
          value={manualFromTime}
          onChangeText={setManualFromTime}
          onBlur={handleManualFromTimeInput}
        />

        <TouchableOpacity style={styles.pickButton} onPress={showFromTimePicker}>
          <Text style={styles.pickButtonText}>Pick</Text>
        </TouchableOpacity>
        </View>

        <View style={{flexDirection : 'row'}}>
        <TextInput
          style={styles.manualInput}
          placeholder="Enter To time manually (HH:MM)"
          placeholderTextColor={'black'}
          value={manualToTime}
          onChangeText={setManualToTime}
          onBlur={handleManualToTimeInput}
        />

        <TouchableOpacity style={styles.pickButton} onPress={showToTimePicker}>
          <Text style={styles.pickButtonText}>Pick</Text>
        </TouchableOpacity>
        </View>
        </View>
      </View>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />

<DateTimePickerModal
        isVisible={isFromTimePickerVisible}
        mode="time"
        onConfirm={handleFromTimeConfirm}
        onCancel={hideFromTimePicker}
      />

<DateTimePickerModal
        isVisible={isToTimePickerVisible}
        mode="time"
        onConfirm={handleToTimeConfirm}
        onCancel={hideToTimePicker}
      />

            
          </Animated.View>
        </Modal>
  
        {/* Rest of the content of your Home Screen */}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    menuButton: {
    //   paddingHorizontal: 16,
      paddingVertical: 8,
      backgroundColor: 'white',
    },
    overlay: {
      flex: 1,
      backgroundColor: '#000000',
    },
    sideMenu: {
      position: 'absolute',
      top: '30%',
      // left: 0,
      width: '50%',
      height: '50%',
      backgroundColor: '#ffffff',
      padding: 16,
      borderRadius : 5,
      alignSelf : 'center',
      // alignContent : 'center',
      // alignItems : 'center',
    },
    closeButton: {
      marginBottom: 16,
      padding: 8,
      backgroundColor: 'white',
    },
    text : {
        color : 'black',
        alignContent : 'center',
    },
    sidetext : {
      color : 'black',
      alignContent : 'center',
      marginBottom : 20,
      marginLeft : '8%',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    manualInput: {
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      padding: 10,
      flex: 1,
      marginRight: 10,
      color : 'black',
    },
    pickButton: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 4,
    },
    pickButtonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    selectedDateText: {
      marginTop: 10,
      fontSize: 18,
      fontWeight: 'bold',
      color: 'black',
    },
      selectedTimeText: {
      marginTop: 10,
      fontSize: 18,
      fontWeight: 'bold',
      color : 'black',
    },
  });
  
  export default SideMenu;
  