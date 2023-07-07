import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const orders = [
  { id: 1, date: '2023-07-01', customer: 'John Doe', total: 100 },
  { id: 2, date: '2023-07-02', customer: 'Jane Smith', total: 150 },
  { id: 3, date: '2023-07-03', customer: 'Mike Johnson', total: 200 },
  { id: 4, date: '2023-07-01', customer: 'John Doe', total: 100 },
  { id: 5, date: '2023-07-02', customer: 'Jane Smith', total: 150 },
  { id: 6, date: '2023-07-03', customer: 'Mike Johnson', total: 200 },
  { id: 7, date: '2023-07-01', customer: 'John Doe', total: 100 },
  { id: 8, date: '2023-07-02', customer: 'Jane Smith', total: 150 },
  { id: 9, date: '2023-07-03', customer: 'Mike Johnson', total: 200 },
  { id: 10, date: '2023-07-01', customer: 'John Doe', total: 100 },
  { id: 12, date: '2023-07-02', customer: 'Jane Smith', total: 150 },
  { id: 13, date: '2023-07-03', customer: 'Mike Johnson', total: 200 },
  // Add more order data here...
];

const OrderHistory = () => {
  const renderOrderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.id}</Text>
      <Text style={styles.cell}>{item.date}</Text>
      <Text style={styles.cell}>{item.customer}</Text>
      <Text style={styles.cell}>{item.total}</Text>
    </View>
  );

  const renderCellContent = (value) => {
    if (value.length > 10) {
      return <Text>{value.substring(0, 10)}...</Text>;
    }
    return <Text>{value}</Text>;
  };

  return (
    <View style={styles.container}>
      {/* Table Header */}
      <View style={styles.headerRow}>
        <Text style={styles.headerCell}>Order ID</Text>
        <Text style={styles.headerCell}>Date</Text>
        <Text style={styles.headerCell}>Customer</Text>
        <Text style={styles.headerCell}>Total</Text>
      </View>

      {/* Order List */}
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{renderCellContent(item.id.toString())}</Text>
            <Text style={styles.cell}>{renderCellContent(item.date)}</Text>
            <Text style={styles.cell}>{renderCellContent(item.customer)}</Text>
            <Text style={styles.cell}>{renderCellContent(item.total.toString())}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    color : 'black',
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    color : 'black'
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    color : 'black',
  },
  cell: {
    flex: 1,
    color : 'black'
  },
});

export default OrderHistory;
