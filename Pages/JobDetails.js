import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import Header from './Header';
import Footer from './Footer';

const JobDetailScreen = ({ route, navigation }) => {
  const { jobs } = route.params;

  const [isSwitchOn, setIsSwitchOn] = useState(false);

    const handleSwitchToggle = () => {
        setIsSwitchOn(!isSwitchOn);

        if (isSwitchOn) {
            console.log("Switch is toggled on.");
        }
    };

    const [attachedFile, setAttachedFile] = useState(null);

    const handleFileAttachment = async () => {
      try {
        const res = await DocumentPicker.pick({
          type: [DocumentPicker.types.pdf],
          maxFilesize: 10 * 1024 * 1024, // 10 MB (in bytes)
        });
  
        setAttachedFile(res);
        console.log('Attached file:', res.uri);
      } catch (error) {
        if (DocumentPicker.isCancel(error)) {
          console.log('File attachment cancelled');
        } else {
          console.log('Error attaching file:', error);
        }
      }
    };

  return (
    <View style={styles.container}>
        <ScrollView>
        <Header />
      <Text style={styles.texthead}>{jobs.title}</Text>
      <Text style={styles.text}>Job created on 23 August</Text>
      <Text style={styles.texthead}>Description</Text>
      <Text style={styles.text}>{jobs.description}</Text>
      <View style={styles.line} />
      <Text style={styles.texthead}>Experience</Text>
      <Text style={styles.text}>{jobs.experience}</Text>
      <View style={styles.line} />
      <Text style={styles.texthead}>Location</Text>
      <Text style={styles.text}>{jobs.location}</Text>
      <View style={styles.line} />
      <Text style={styles.texthead}>Salary</Text>
      <Text style={styles.text}>{jobs.salary}</Text>
      <View style={styles.line} />
      <View style={{flexDirection : 'row', width : '70%', justifyContent : 'center', alignSelf : 'center', marginTop : '5%'}}>
      <View style={{flexDirection : 'column', width : '55%', justifyContent : 'space-between'}}>
      <Text style={styles.texthead}>Eligibility</Text>
      <Text style={styles.text}>{`\u25CF ${jobs.eligibility}`}</Text>
      </View>
      <View style={styles.verticleLine}/>
      <View style={{flexDirection : 'column', width : '60%', justifyContent : 'space-between'}}>
      <Text style={styles.texthead}>Skills</Text>
      <View style={{flexDirection : 'row', marginRight : '10%', justifyContent : 'center'}}>
      <Text style={styles.button02}><Text style={styles.skilltext}>{jobs.skill01}</Text></Text>
      <Text style={styles.button02}><Text style={styles.skilltext}>{jobs.skill01}</Text></Text>
      </View>
      </View>
      </View>
      <View style={styles.line} />


      <View style={{flexDirection : 'row', width : '100%', justifyContent : 'space-between'}}>
            <Text style={styles.texthead}>Application</Text>
            <TouchableOpacity style={styles.referbutton} onPress={() => navigation.navigate('myreferral')}>
                <Text style={styles.refertext}>My Referrals</Text>
            </TouchableOpacity>
            </View>
            <Text style={styles.text}>Switch the toggle button, if you wish to apply for this job.</Text>
            <Switch trackColor={{true: '#344953', false: 'grey'}} style={styles.switch} value={isSwitchOn} onValueChange={handleSwitchToggle} />
            {/* </View> */}
            <View style={{flexDirection : 'row', width : '78%', justifyContent : 'center', marginLeft : '10%', marginRight : '10%'}}>
                <View style={{flexDirection : 'column', width : '55%', justifyContent : 'space-between'}}>
                <Text style={styles.text}>Application name<Text style={styles.require}>*</Text></Text>
                <TextInput style={styles.inputtext} />
                </View>
                <View style={{flexDirection : 'column', width : '55%', justifyContent : 'space-between'}}>
                <Text style={styles.text}>Application Email id<Text style={styles.require}>*</Text></Text>
                <TextInput style={styles.inputtext} />
                </View>
            </View>
            <View style={{flexDirection : 'row', width : '78%', justifyContent : 'center', marginLeft : '10%', marginRight : '10%'}}>
                <View style={{flexDirection : 'column', width : '55%', justifyContent : 'space-between'}}>
                <Text style={styles.text}>Applicant Mobile number<Text style={styles.require}>*</Text></Text>
                <TextInput style={styles.inputtext} />
                </View>
                <View style={{flexDirection : 'column', width : '55%', justifyContent : 'space-between'}}>
                <Text style={styles.text}>Applicant total experience<Text style={styles.require}>*</Text></Text>
                <TextInput style={styles.inputtext} />
                </View>
            </View>

            <View style={[styles.card, styles.elevation]}>
                <TouchableOpacity style={styles.attachbutton} onPress={handleFileAttachment}>
                <Text style={styles.attachtext}>File supported (.pdf), file size should not exceed more than 10 MB</Text>
                <Text style={styles.uploadtext}>Upload file</Text>
                </TouchableOpacity>
            </View>    
    

            <TouchableOpacity style={styles.submitbutton}>
                <Text style={styles.submittext}>Apply Now</Text>
            </TouchableOpacity>
            <Footer />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor : '#fff'
  },
  texthead : {
    color : 'black',
    fontWeight : 'bold',
    fontSize : 22,
    marginLeft : '10%',
    marginTop : '5%'
},
text : {
    color : 'black',
    marginLeft : '10%',
    marginRight : '10%',
},
line : {
    borderBottomColor : 'black',
    borderBottomWidth : 1,
    marginLeft : '10%',
    marginRight : '10%',
    marginTop : '5%',
},
verticleLine: {
    height: '100%',
    width: 1,
    backgroundColor: '#909090',
  },
  button02 : {
    backgroundColor : 'lightblue',
    marginLeft : 20,
    marginBottom : 12,
    borderRadius : 10,
    paddingHorizontal : 10,
    paddingVertical : 3,
},
skilltext : {
    color : 'black',
    marginLeft : '10%',
    marginRight : '10%',
},
referbutton : {
    width : '30%',
    alignSelf : 'center',
    marginTop : '10%',
},
refertext : {
    color : 'red',
},
switch : {
    marginRight : '10%',
    borderColor : 'black'
},
require : {
    color : 'red',
},
inputtext : {
    borderWidth : 1,
    borderColor : 'black',
    marginLeft : '10%',
    marginBottom : '10%',
    borderRadius : 4,
},
attachbutton : {
    alignSelf : 'center',
    borderRadius : 5
},
attachtext : {
    color : 'black',
    alignSelf : 'center'
},
uploadtext : {
    color : 'black',
    alignSelf : 'center',
    textDecorationLine : 'underline',
    color : '#5F9EA0',
},
card: {  
    backgroundColor: 'white',  
    borderRadius: 10,
    borderColor : 'black', 
    paddingVertical: 10,  
    paddingHorizontal: 10,  
    marginLeft : '10%',
    marginRight : '10%',
},
elevation: {  
    shadowColor: 'black',  
    elevation: 3,  
},
submitbutton : {
    backgroundColor : '#5F9EA0',
    alignSelf : 'center',
    width : '20%',
    height : '3%',
    borderRadius : 5,
    marginBottom : '8%',
    marginTop : '5%'
},
submittext : {
    color : '#fff',
    alignSelf : 'center',
},
});

export default JobDetailScreen;
