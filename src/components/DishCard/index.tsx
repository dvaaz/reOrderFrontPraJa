import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

type DishCardProps = {
  name: string;
  quantity: number;
};

export const DishCard: React.FC<DishCardProps> = ({ name, quantity }) => {
  const borderColor = quantity >= 5 ? "#909793ff" : "#FF5252";

  return (
    <View style={[styles.card, { borderColor }]}>
      <Text style={styles.dishName}>{name}</Text>
      <Text style={styles.dishQty}>Qtd: {quantity}</Text>
    </View>
  );
};