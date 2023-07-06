import React from 'react';
import { useState } from 'react';
import { StyleSheet, TextInput, Text, TouchableOpacity, View, Alert, ScrollView } from 'react-native';


const OtpScreen = ({ navigation }) => {

    const [otp, setOTP] = useState('');

    const handleOTPChange = (value) => {
      setOTP(value);
    };
  
    const handleSubmit = () => {
      // Verify the OTP here
      if (otp === '1234') {
        Alert.alert('Success', 'OTP verification successful!');
        navigation.navigate('Job_Portal');
      } else {
        Alert.alert('Error', 'Invalid OTP!');
      }
    };


    const [isModalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };



    return (
        <View style={styles.container}>
          <ScrollView>
                <TextInput style={styles.input} onChangeText={handleOTPChange} value={otp} keyboardType="numeric" 
                    maxLength={4} placeholder="Enter your OTP" placeholderTextColor={'gray'} />
                <View style={{ flexDirection : 'row', justifyContent : 'center', width : '80%'}} >

                <TouchableOpacity style={styles.button01} onPress={handleSubmit} >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button01} onPress={() => navigation.navigate('login')}>
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
                
                </View>

                <TouchableOpacity style={styles.button01} onPress={() => navigation.navigate('InterviewPanel')}>
                  <Text style={styles.buttonText}>InterView Panel</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button01} onPress={() => navigation.navigate('AssignPanelMember')}>
                  <Text style={styles.buttonText}>AssignPanelMember</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button01} onPress={() => navigation.navigate('DateTime')}>
                  <Text style={styles.buttonText}>DateTime</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button01} onPress={() => navigation.navigate('HomeScreen')}>
                  <Text style={styles.buttonText}>HomeScreen</Text>
                </TouchableOpacity>
    
                </ScrollView>
        </View> 
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        backgroundColor : 'white',
    },
    text : {
      color : 'black',
    },
    input: {
        width: 300,
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        color : 'black',
        marginTop : 200,
        marginLeft : 30,
        marginRight : 30,
        borderRadius : 5,
        marginBottom : 30,
      },
      submitbutton : {
        alignItems : 'center',
        justifyContent : 'center',
        marginLeft : 30,
        width : 100,
        height : 30,
        backgroundColor : '#75C597',
      },
      button01: {
        marginLeft: 40,
        padding: 10,
        width : 120,
        backgroundColor: '#75C597',
        borderRadius: 5,
        marginBottom : 20,
      },
      menuContainer: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 10,
        backgroundColor: 'white',
      }
})

export default OtpScreen;