import { COLOR } from "@/constants/constantsStyles";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: "PraJa",
        headerTitleAlign: "center",
        headerTintColor: COLOR.primaryDark,
        headerStyle: { backgroundColor: COLOR.background },
        headerTitleStyle: { fontWeight: "800", color: COLOR.preto },
      }}>
    <Stack.Screen name="(tabs)" />
    <Stack.Screen name="index" />
    </Stack>
  );
}
