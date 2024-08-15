import React from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';

const App = () => {
  const showAlert = () => {
    Alert.alert("hello");
  };

  return (
    <View style={styles.container}>
      <Button title="Press Me" onPress={showAlert} />
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

export default App;