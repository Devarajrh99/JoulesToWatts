import * as React from 'react';
import {StyleSheet, ImageBackground, Alert, Dimensions, Text, View, Button, TextInput, Image, TouchableOpacity, KeyboardAvoidingView,ScrollView, keyboardVerticalOffset} from 'react-native';

const Sparsh = ({ navigation }) => {
return (
     
      
    <View style={styles.container}>
    <ScrollView>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('./Images/logo.png')} />
        <View style={styles.profileContainer}>
          <Image style={styles.profileImage} source={require('./Images/profile.png')} />
          <Text style={styles.profileName}>John Doe</Text>
        </View>
      </View>
         {/* <Image style={styles.image1} source={require('./Images/profile.png')} /> */}
          
         <ImageBackground
          source={require('./Images/background.png')} 
          style={styles.backgroundImage}>
          <Text style={styles.texthead02}>Sparsh</Text>
            <Text style={styles.texthead05}>
              Say Hello to Hassle-Free HR Query Resolution with sparsh : Your On-Stop Tcking Raising Platform
            </Text>
          </ImageBackground>
          <View style={styles.view}>
          <Button style={styles.button2} title="Create New Ticket"/>
          </View>
            </ScrollView>
            
       </View>
      
  );
}


const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#ffffff',
  },
  view : {
    height : 30,
    width : 100,
  },
  texthead02 : {
    marginLeft : 10,
    color:'black',
    fontSize :18 ,
    fontWeight : '800',
    marginBottom: 5,
    
  },

  texthead05 : {
    marginLeft : 10,
    color:'black',
    fontSize : 16,
    fontWeight:10,
    marginBottom : 20,
    
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  logo: {
    width: 100,
    height: 100,
  },

  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image1: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 5,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 20,
    marginRight: 5,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  button2 : {
    color : 'green',
    borderRadius : 10,
    marginLeft : 20,
    // textAlign : 'center',
  },
  image : {
    height : 100,
    width : 100,
    marginRight : 15,
    marginBottom : 12,
    // alignSelf:"center"
    // alignSelf : 'left',
  },
  backgroundImage : {
    width : Dimensions.get('window').width,
    marginBottom : 12,
  },
  image1 : {
    height : 20,
    width : 20,
    // marginBottom : 12,
    marginLeft : 200,
    flexDirection: 'row',
    
    
    // alignSelf:"center"
    // alignSelf : 'left',
  },
  //   textinput02 : {
 //     width : 20,
 //     height : 20,
 //     marginLeft : 30,

  
})

export default Sparsh;