import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useStore } from '../store';
import { useTranslation } from 'react-i18next';

const Counter = () => {
  const { t } = useTranslation();
  const counter = useStore(state => state.bears);
  const increment = useStore(state => state.increasePopulation);
  const decrement = useStore(state => state.decreasePopulation);

  return (
    <View>
      <Button title="Increment" onPress={increment} color="blue" />
      <Text style={styles.counterText}>
        {t('counter:')} {counter}
      </Text>
      <Button title="Decrement" onPress={decrement} color="red" />
    </View>
  );
};

export const Zustand = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('Zustand demo')}</Text>
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
  counterText: {
    fontSize: 20,
    marginBottom: 10,
  },
});
