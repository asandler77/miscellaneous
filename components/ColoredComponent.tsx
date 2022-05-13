import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from './Header';
import {Footer} from "./Footer";

export const ColoredComponent = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Footer/>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});
