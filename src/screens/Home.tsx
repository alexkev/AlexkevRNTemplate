import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useStore } from '../store';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('Welcome to the Home screen!')}</Text>
      <MaterialIcons name="home" size={30} color="#900" />
      <MaterialCommunityIcons name="home" size={30} color="#900" />
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
