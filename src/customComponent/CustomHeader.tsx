import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../constant/ColorConstant';

const CustomHeader = ({title, onBackPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPress} style={styles.backArrowContainer}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center', 
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    width: '100%',
  },
  backArrowContainer: {
    justifyContent: 'center', 
    alignItems: 'center',
  },
  backArrow: {
    fontSize: 30,
    color: colors.darkText,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: '#2E4450',
    flex: 1,
    paddingTop: 10,
  },
});

export default CustomHeader;
