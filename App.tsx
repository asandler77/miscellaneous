import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ColoredComponent} from './components/ColoredComponent';

const App = () => {
  return (
    <View style={styles.container}>
      <ColoredComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
