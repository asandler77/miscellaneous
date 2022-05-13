import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ColorContext from './ColorContext';

export const Footer = () => {
  const contextValue = useContext(ColorContext);
  console.log('contextValue...', contextValue);
  return (
    <View style={[{backgroundColor: 'red'}, styles.container]}>
      <Text>Footer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
