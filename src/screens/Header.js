import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return <Text style={styles.title}>DocMz</Text>;
};
const styles = StyleSheet.create({
  title: {
    color: 'rgba(250,250,250, 0.8)',
    fontWeight: 'bold',
  },
});

export default Header;
