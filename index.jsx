import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Button} from 'react-native';
import SimpleCircleButton from './SimpleCircleButton.jsx';

type Props = {};
export default class MyApp extends Component<Props> {
  
  doSomething(e) {
    alert('Boom!');
  }
  
  render() {
    return (
      <View style={styles.container}>
        <SimpleCircleButton 
          circleDiameter = {300}
          onPress = {this.doSomething}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2A2734',
  },
  button: {
    backgroundColor: 'red'
  },
  instructions: {
    textAlign: 'center',
    color: '#B0B0B0',
    marginBottom: 5,
  },
});

// You must register the main component
// with the same name as the project
AppRegistry.registerComponent(
  'big-red-button', () => MyApp
);
