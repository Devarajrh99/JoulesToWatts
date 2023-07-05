import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const YourComponent = () => {
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
      <View style={{ flexDirection : 'column' }}>
      <View style={styles.inputContainer}>
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
      

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />

      {/* {selectedDate && (
        <Text style={styles.selectedDateText}>
          Selected Date: {selectedDate.toISOString().split('T')[0]}
        </Text>
      )} */}

      
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

      {/* {selectedTime && (
        <Text style={styles.selectedTimeText}>
          Selected Time: {selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </Text>
      )} */}

      
</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  text : {
    color : 'black',
  }
});

export default YourComponent;











// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';

// const YourComponent = () => {
//   const [isTimePickerVisible, setTimePickerVisible] = useState(false);
//   const [selectedTime, setSelectedTime] = useState(null);
//   const [manualTime, setManualTime] = useState('');

//   const showTimePicker = () => {
//     setTimePickerVisible(true);
//   };

//   const hideTimePicker = () => {
//     setTimePickerVisible(false);
//   };

//   const handleTimeConfirm = (time) => {
//     setSelectedTime(time);
//     setManualTime(time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
//     hideTimePicker();
//   };

//   const handleManualTimeInput = () => {
//     const timeParts = manualTime.split(':');
//     const hours = parseInt(timeParts[0]);
//     const minutes = parseInt(timeParts[1]);

//     const time = new Date();
//     time.setHours(hours);
//     time.setMinutes(minutes);

//     if (!isNaN(time.getTime())) {
//       setSelectedTime(time);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.manualInput}
//           placeholder="Enter time manually (HH:MM)"
//           placeholderTextColor={'black'}
//           value={manualTime}
//           onChangeText={setManualTime}
//           onBlur={handleManualTimeInput}
//         />

//         <TouchableOpacity style={styles.pickButton} onPress={showTimePicker}>
//           <Text style={styles.pickButtonText}>Pick</Text>
//         </TouchableOpacity>
//       </View>

//       <DateTimePickerModal
//         isVisible={isTimePickerVisible}
//         mode="time"
//         onConfirm={handleTimeConfirm}
//         onCancel={hideTimePicker}
//       />

//       {selectedTime && (
//         <Text style={styles.selectedTimeText}>
//           Selected Time: {selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//         </Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   manualInput: {
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 4,
//     padding: 10,
//     flex: 1,
//     marginRight: 10,
//     color : 'black',
//   },
//   pickButton: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 4,
//   },
//   pickButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   selectedTimeText: {
//     marginTop: 10,
//     fontSize: 18,
//     fontWeight: 'bold',
//     color : 'black',
//   },
//   text : {
//     color : 'black',
//   }
// });

// export default YourComponent;
