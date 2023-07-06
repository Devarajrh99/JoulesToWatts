import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ProductListingScreen = ({ navigation }) => {
  const [products, setProducts] = useState([
    { id: 1, title: 'Interactive Developer', description: 'Interactive Developer', skill01 : 'JavaScript', skill02 : 'node.js', experience : '4 Years', location : 'Delhi', salary : '4 to 6', eligibility : 'Interactive developer' },
    { id: 2, title: 'Technical Support Engineer', description: 'bpo', skill01 : 'Excellent Communication Skill Working with US Client', experience : 'Fresher/ Experience Years', location : 'Bangalore', salary : '1.5 to 2.3', eligibility : 'bpo' },
    { id: 3, title: 'Technical Support Engineer', description: 'Excellent understanding of the technical fundamentals of the Internet. You should have a solid knowledge of internet protocols such as SSH, FTP, SFTP & HTTP,The ability to be a good listener, and to really understand a customer problem or question and help them solve it. Excellent writing skills. Most of your work will be written (email, documentation, etc.). Excellent telephone mannerisms. Some support will be provided over the phone (via our VoIP system) 2-3 years previous experience in a technical support role', skill01 : 'Should have  above 65% in acadamic', skill02 : 'Good programming language', experience : 'Fresher / 2 Years', },
  ]);

  const handleProductPress = (product) => {
    navigation.navigate('ProductDetail', { product });
  };

  const renderProductItem = ({ item }) => (
    <View style={[styles.card, styles.elevation]}>
    <TouchableOpacity
      style={styles.productItem}
      onPress={() => handleProductPress(item)}
    >
      <Text style={styles.heading01}>{item.title}</Text>
      <Text style={styles.heading02}>{item.description}</Text>
      <View style={{flexDirection : 'row', width : '80%', justifyContent : 'space-around'}}>
      <Text style={styles.button01}><Text style={styles.text}>{item.skill01}</Text></Text>
      <Text style={styles.button01}><Text style={styles.text}>{item.skill02}</Text></Text>
      </View>
    </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
        
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  productItem: {
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 4,
    padding: 10,
    color : 'black',
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color : 'black'
  },
  card: {  
    backgroundColor: 'white',  
    borderRadius: 10,
    borderColor : 'black', 
    paddingVertical: 10,  
    paddingHorizontal: 10,  
    marginLeft : '8%',
    marginRight : '8%',
    marginBottom : '8%',
},  
elevation: {  
    shadowColor: 'black',  
    elevation: 10,  
},
heading01 : {  
    fontSize: 18,  
    fontWeight: '600', 
    marginLeft : '8%', 
    marginBottom: '4%', 
    color : 'black',
},
heading02 : {  
    fontSize: 15,  
    fontWeight: '600',  
    marginBottom: '5%', 
    marginLeft : '8%', 
    color : 'gray',
},
button01 : {
    backgroundColor : 'lightblue',
    marginLeft : '10%',
    borderRadius : 20,
    padding : 5,
},
text : {
    color : 'green',
},
});

export default ProductListingScreen;
