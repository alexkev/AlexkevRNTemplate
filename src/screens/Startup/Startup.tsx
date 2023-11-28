import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { ApplicationScreenProps } from 'types/navigation';

export const Startup = ({ navigation }: ApplicationScreenProps) => {
  const init = async () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Main' }],
    });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <View>
      <ActivityIndicator size={'large'} />
    </View>
  );
};
