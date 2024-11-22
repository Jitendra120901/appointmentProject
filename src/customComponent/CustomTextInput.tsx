import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import colors from '../constant/ColorConstant';

const CustomTextInput = ({ placeholder, icon, style }) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput placeholder={placeholder} style={styles.input} />
      {icon && <Text style={styles.icon}>{icon}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: colors.white,
    height: 40,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: colors.darkText,
  },
  icon: {
    marginLeft: 8,
    color: colors.primary,
    fontSize: 16,
  },
});

export default CustomTextInput;
