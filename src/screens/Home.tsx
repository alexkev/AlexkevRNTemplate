import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useStore } from '../store';

const Counter = () => {
  const counter = useStore(state => state.bears);
  const increment = useStore(state => state.increasePopulation);
  const decrement = useStore(state => state.decreasePopulation);

  return (
    <View>
      <Text>Counter: {counter}</Text>
      <Button title="Increment" onPress={increment} />
      <Button title="Decrement" onPress={decrement} />
    </View>
  );
};

export const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Home screen!</Text>
      <Counter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
