import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SimpleCircleButton from './SimpleCircleButton.jsx';

const doSomething = (e) => {
  return fetch('http://192.168.86.181:1880/hello')
    .then((response) => response.json())
    .then((json) => {
      alert(JSON.stringify(json));
    })
    .catch((error) => {
      console.error(error);
      alert("doh");
    });
};

export default function App() {

  return (
    <View style={styles.container}>
      <SimpleCircleButton 
        circleDiameter = {300}
        onPress = {doSomething}
      > 
        <Text style={styles.buttonText}>Press Me</Text>
      </SimpleCircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2A2734',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
  instructions: {
    textAlign: 'center',
    color: '#B0B0B0',
    marginBottom: 5,
  },
});
