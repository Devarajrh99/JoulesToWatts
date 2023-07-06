import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Image, StyleSheet } from 'react-native';

const YourComponent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from an API and update the products state
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.example.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  const renderProductItem = ({ item }) => (
    <View style={styles.productItem}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F5F5F5',
  },
  productList: {
    justifyContent: 'space-between',
  },
  productItem: {
    flex: 0.5,
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 4,
    padding: 10,
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 4,
    marginBottom: 5,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: 'gray',
  },
});

export default YourComponent;
