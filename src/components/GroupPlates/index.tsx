
import React, { useState } from "react";
import { LuBellRing } from "react-icons/lu";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { DishCard } from "../DishCard";
import { styles } from "./styles";

// Tipo para prato que pode ou nao ser utilizado
type Dish = {
  name: string;
  quantity: number;
};
// Tipo para as props do componente GroupPlates
type GroupPlatesProps = {
  groupName: string;
  groupColor: string;
  dishes: Dish[];
};

export const GroupPlates = ({ groupName, groupColor, dishes }: GroupPlatesProps) => {
  const [expanded, setExpanded] = useState(false);

  // Exibe notificação se algum prato tiver quantidade >= 5
  const showNotification = dishes.some((dish) => dish.quantity <= 5);

  return (
    <View style={styles.groupContainer}>
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.groupHeader}
        onPress={() => setExpanded((prev) => !prev)}
      >
        <View style={styles.headerLeft}>
          <View style={[styles.colorSquare, { backgroundColor: groupColor }]} />
          <Text style={styles.groupTitle}>{groupName}</Text>
        </View>
        {showNotification && (
            <LuBellRing name="bell" size={20} color="#d61002ff" />

        )}
      </TouchableOpacity>

      {expanded && (
        <FlatList
          horizontal
          data={dishes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <DishCard name={item.name} quantity={item.quantity} />
          )}
          contentContainerStyle={{ paddingVertical: 10 }}
        />
      )}
    </View>
  );
};