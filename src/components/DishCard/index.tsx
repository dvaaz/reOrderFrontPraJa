import { COLOR } from "@/constants/constantsStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";


type DishCardProps = {
  nome: string;
  quantity?: number;
};
// cria uma funcao para criar numeros elementos aleatorios de 1 a 6 para testar o componente
const getRandomQuantity = () => {
  return Math.floor(Math.random() * 7) + 1;
};

export const DishCard: React.FC<DishCardProps> = ({ nome, quantity }) => {
  const isLow = (quantity || getRandomQuantity()) <= 5;
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
      <Text style={styles.dishName}>{nome}</Text>
      <View style={styles.footer}>
        <Ionicons name="cube-outline" size={14} color={COLOR.gray} />
        <Text style={styles.dishQty}>Qtd: {quantity}</Text>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  card: {
    width: 180,
    minHeight: 120,
    marginHorizontal: 8,
    borderRadius: 14,
    justifyContent: "space-between",
    backgroundColor: COLOR.card,
    padding: 12,
    borderWidth: 1,
    borderColor: COLOR.softtGray,
    shadowColor: COLOR.primaryDark,
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
    gap: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },
  badgeText: {
    color: COLOR.branco,
    fontSize: 12,
    fontWeight: "700",
  },
  dishName:{
    fontSize: 15,
    fontWeight: "700",
    color: COLOR.preto,
  },
  footer:{
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  dishQty:{
    fontSize: 13,
    color: COLOR.gray,
    fontWeight: "600",
  }
});

