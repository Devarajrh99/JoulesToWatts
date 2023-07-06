import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, TouchableWithoutFeedback, Animated } from 'react-native';


const SideMenu = ({ interviewpanel, home, sparsh }) => {
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
  
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
          <Text style = {styles.text}>Menu</Text>
          {/* <FontAwesomeIcon icon={faBars} style={styles.icon} /> */}
        </TouchableOpacity>
  
        <Modal visible={isMenuOpen} transparent animationType="fade">
          <TouchableWithoutFeedback onPress={toggleMenu}>
            <Animated.View style={[styles.overlay, { opacity }]} />
          </TouchableWithoutFeedback>
  
          <Animated.View style={[styles.sideMenu, { transform: [{ translateX: menuTranslateX }] }]}>
            <TouchableOpacity onPress={toggleMenu} style={styles.closeButton}>
              <Text style = {styles.text}>Close Menu</Text>
            </TouchableOpacity>

            <Text style = {styles.sidetext}>Home</Text>  
            <TouchableOpacity onPress={home}>
            <Text style = {styles.sidetext}>Job Portal</Text>
              </TouchableOpacity>
            <TouchableOpacity onPress={interviewpanel}>
            <Text style = {styles.sidetext}>Interview Panel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={sparsh}>
            <Text style = {styles.sidetext}>Sparsh</Text>
            </TouchableOpacity>
            {/* Add more menu items as needed */}
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
      top: 0,
      left: 0,
      width: '60%',
      height: '100%',
      backgroundColor: '#ffffff',
      padding: 16,
      borderRadius : 5,
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
    }
  });
  
  export default SideMenu;
  