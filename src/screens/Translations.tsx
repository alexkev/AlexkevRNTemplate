import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useTranslation } from 'react-i18next';
import Config from 'react-native-ultimate-config';

export const Translations = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n?.language === 'en' ? 'es' : 'en');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('Welcome to the Home screen!')}</Text>
      <Text>
        {t('current language')}: {i18n?.language}
      </Text>
      <Button title={t('Change Language')} onPress={changeLanguage} />
      <Text style={styles.absoluteBottomRight}>{Config.ENV}</Text>
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
  absoluteBottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: 16,
  },
});
