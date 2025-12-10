import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Text, View } from "react-native";
import { COLOR } from "@/constants/constantsStyles";
import { styles } from "./styles";

type DishCardProps = {
  name: string;
  quantity: number;
};

export const DishCard: React.FC<DishCardProps> = ({ name, quantity }) => {
  const isLow = quantity <= 5;
  const badgeColor = isLow ? COLOR.danger : COLOR.primary;
  const badgeIcon = isLow ? "alert-circle" : "checkmark-circle";

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Ionicons name="restaurant-outline" size={18} color={COLOR.primaryDark} />
        <View style={[styles.badge, { backgroundColor: badgeColor }]}>
          <Ionicons name={badgeIcon as any} size={14} color={COLOR.branco} />
          <Text style={styles.badgeText}>{isLow ? "Reposição" : "OK"}</Text>
        </View>
      </View>
      <Text style={styles.dishName}>{name}</Text>
      <View style={styles.footer}>
        <Ionicons name="cube-outline" size={14} color={COLOR.gray} />
        <Text style={styles.dishQty}>Qtd: {quantity}</Text>
      </View>
    </View>
  );
};
