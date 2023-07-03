import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList, StyleSheet } from 'react-native';

const MultilevelDropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [options, setOptions] = useState([
    {
      label: 'Option 1',
      children: [
        { label: 'Child Option 1' },
        { label: 'Child Option 2' },
      ],
    },
    {
      label: 'Option 2',
      children: [
        { label: 'Child Option 3' },
        { label: 'Child Option 4' },
      ],
    },
  ]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSearchTextChange = (text) => {
    setSearchText(text);
    // Filter and update the options based on the search text
    const filteredOptions = options.filter((option) =>
      option.label.toLowerCase().includes(text.toLowerCase())
    );
    setOptions(filteredOptions);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option.label);
    setIsDropdownOpen(false);
    // Handle the selected option
    console.log('Selected Option:', option.label);
  };

  const renderOption = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleOptionSelect(item)} style={styles.optionItem}>
        <Text>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownButton}>
        <Text style={styles.text}>Open Dropdown</Text>
      </TouchableOpacity>

      {isDropdownOpen && (
        <View style={styles.dropdownContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search"
            value={searchText}
            onChangeText={handleSearchTextChange}
          />

          <FlatList
            data={options}
            renderItem={renderOption}
            keyExtractor={(item) => item.label}
          />
        </View>
      )}

      {/* Rest of the content of your screen */}
      <Text style={styles.text}>Selected Option: {selectedOption}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f0f0f0',
  },
  dropdownContainer: {
    position: 'absolute',
    top: 60,
    right: 10,
    width: 200,
    backgroundColor: '#ffffff',
    borderRadius: 4,
    elevation: 3,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  searchBar: {
    height: 40,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  optionItem: {
    paddingVertical: 10,
  },
  text : {
    color : 'black',
  }
});

export default MultilevelDropdown;
