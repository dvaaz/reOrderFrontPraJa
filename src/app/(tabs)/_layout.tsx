import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { COLOR } from '@/constants/constantsStyles';
import { Tabs } from 'expo-router';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom']}>
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
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontWeight: "700",
          fontSize: 12,
        },
        // 👇 esta linha é a chave para evitar sobreposição
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Serviço do Dia',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={26} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ingrediente"
        options={{
          title: 'Ingredientes',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={26} name="leaf.fill" color={color} />
          ),
        }}
      />
      {/* tabs  */}
    </Tabs>
    </SafeAreaView>
  );
}
