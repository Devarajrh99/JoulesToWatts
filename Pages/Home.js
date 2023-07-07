import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';

import Header from "./Header";
import Footer from "./Footer";
import MenuBar from './SideMenu';

const Home = () => {


    const logout = () =>{
        navigation.navigate('Login')
        }
    
        const interviewpanel = () =>{
            navigation.navigate('InterviewPanel')
        }
    
        const jobportal = () => {
            navigation.navigate('Job_Portal')
        }
    
        const sparsh = () => {
            navigation.navigate('Sparsh')
        }
    return (
        <View style = {styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={{flexDirection : 'row', width : '80%'}}>
                <MenuBar interviewpanel={interviewpanel} home={jobportal} sparsh={sparsh} />
                <Header logout={logout} />
                </View>
                <Text style={styles.texthead01}>Top 6 Frequently Applied Jobs</Text>
                <Text style={styles.texthead02}>If you're looking to apply for a job, it's important to know which jobs are in high demand and frequently applied for. Here are the top 6 frequently applied jobs that you might want to consider:</Text>

                <View style={styles.footer}>
                <Footer />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignContent : 'center',
        backgroundColor : '#fff',
    },
    texthead01 : {
        color : 'black',
        fontSize : 30,
        textAlign : 'left',
        marginLeft : '8%',
        marginTop : 10,
    },
    texthead02 : {
        color : 'black',
        fontSize : 18,
        textAlign : 'left',
        marginLeft : '8%',
        marginRight : '8%',
    },
    footer : {
        position : 'absolute',
        bottom : 0,
        left : 0,
        right : 0,
        justifyContent : 'center',
        alignItems : 'center',
      },
      scrollContainer: {
        flexGrow: 1,
        paddingBottom: 120,
      },
})

export default Home;