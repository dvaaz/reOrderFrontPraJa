
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { COLOR } from '@/constants/constantsStyles';
import { Tabs } from 'expo-router';
import React from 'react';



export default function TabLayout() {
  return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: COLOR.branco,
            tabBarInactiveTintColor: COLOR.preto,
            headerShown: false,
            tabBarButton: HapticTab,
      }}>
    <Tabs.Screen
        name="index"
        options={{
            title: 'Serviço do Dia',
           tabBarIcon: () => <IconSymbol size={28} name="house.fill" color={COLOR.preto} />,
        }}
    />
    <Tabs.Screen
        name="ingrediente"
        options={{
            title: 'Ingrediente',
            tabBarIcon: () => <IconSymbol size={28} name="leaf.fill" color={COLOR.preto} />,
        }}
    />
    </Tabs>
  );
  }
