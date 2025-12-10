import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { COLOR } from '@/constants/constantsStyles';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarActiveTintColor: COLOR.primary,
        tabBarInactiveTintColor: COLOR.gray,
        tabBarStyle: {
          backgroundColor: COLOR.card,
          borderTopColor: COLOR.softtGray,
          height: 64,
          paddingBottom: 10,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontWeight: "700",
          fontSize: 12,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Serviço do Dia',
          tabBarIcon: ({ color }) => <IconSymbol size={26} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="ingrediente"
        options={{
          title: 'Ingredientes',
          tabBarIcon: ({ color }) => <IconSymbol size={26} name="leaf.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
