import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Story from './Story';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Story />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;