import React from 'react';
import { Translations, Zustand } from '@/screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Trans, Translation } from 'react-i18next';

const Tab = createBottomTabNavigator();

export const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName="Translations"
      screenOptions={{
        headerShown: true,
        headerTitleAlign: 'left',
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Translations"
        component={Translations}
        options={{
          tabBarLabel: 'Translations',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="translate"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Zustand"
        component={Zustand}
        options={{
          tabBarLabel: 'Zustand',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="teddy-bear"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
