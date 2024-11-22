import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import colors from '../constant/ColorConstant';

const CustomDropdown = ({options, placeholder, containerStyle}) => {
  const [selected, setSelected] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = option => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        onPress={() => setIsOpen(!isOpen)}
        style={styles.dropdownButton}>
        <Text style={styles.text}>{selected || placeholder}</Text>
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.dropdown}>
          <FlatList
            data={options}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.option}
                onPress={() => handleSelect(item)}>
                <Text style={styles.optionText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: 8,
    backgroundColor: colors.white,
    marginBottom: 8,
    zIndex: 1, 
  },
  dropdownButton: {
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  text: {
    fontSize: 16,
    color: colors.darkText,
  },
  dropdown: {
    borderTopWidth: 1,
    borderColor: colors.lightGray,
    backgroundColor: colors.white,
    maxHeight: 120, 
    zIndex: 2,
    elevation: 3,
    position: 'absolute', 
    width: '100%', 
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  optionText: {
    fontSize: 16,
    color: colors.darkText,
  },
});
export default CustomDropdown;
