import React from 'react';
import Icon from'react-native-vector-icons/FontAwesome';
import { StyleSheet, View, Text } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.footer1}>
          <Text style={styles.footerText}>Copyright © 2023 Joulestowatts Business Solutions Pvt. Ltd. </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text style={styles.footerText}>Follow us on:</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name='facebook-official' size={25} color='#4267B2' style={{ marginRight: 10 }} />
                        <Icon name='instagram' size={25} color='#4267B2' style={{ marginRight: 10 }} />
                        <Icon name='twitter' size={25} color='#4267B2' />
                  </View>
          </View>
        </View>
    );
}


const styles=StyleSheet.create({
    footer1: {
        marginBottom : 10,
        backgroundColor :'#5f9ea0',
        fontWeight: 'bold',
        textAlign : 'center',
        alignItems: 'center',
        flex :0.1,
      
      },
      footerText : {
        marginVertical : 8,
        color:'white',
        fontSize : 18,
        fontWeight:'bold',
        marginRight: '7%',
        marginLeft : '7%',
      },
})

export default Footer;
