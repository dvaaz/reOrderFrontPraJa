import { COLOR } from "@/constants/constantsStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { DishCard } from "../DishCard";
import { styles } from "./styles";

// Tipo para prato que pode ou nao ser utilizado
type Dish = {
  id: number;
  nome: string;
  descricao: string;
  quantity: number;
};
// Tipo para as props do componente GroupPlates
type GroupPlatesProps = {
  groupName: string;
  groupColor: string;
  dishes: Dish[];
};

export const GroupPlates = ({ groupName, groupColor, dishes }: GroupPlatesProps) => {
  const [expanded, setExpanded] = useState(true);

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
          <View>
            <Text style={styles.groupTitle}>{groupName}</Text>
            <Text style={styles.groupSubtitle}>
              {dishes.length} prato{dishes.length === 1 ? "" : "s"} cadastrados
            </Text>
          </View>
        </View>

        <View style={styles.headerActions}>
          {showNotification && (
            <View style={styles.badge}>
              <Ionicons name="alert-circle" size={16} color={COLOR.branco} />
              <Text style={styles.badgeText}>Reposição</Text>
            </View>
          )}
          <Ionicons
            name={expanded ? "chevron-up" : "chevron-down"}
            size={20}
            color={COLOR.preto}
          />
        </View>
      </TouchableOpacity>

      {expanded && dishes.length > 0 ? (
        <FlatList
          horizontal
          data={dishes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <DishCard name={item.name} quantity={item.quantity} />
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
      ) : expanded ? (
        <View style={styles.emptyState}>
          <Ionicons name="leaf-outline" size={18} color={COLOR.gray} />
          <Text style={styles.emptyText}>Nenhum prato cadastrado ainda.</Text>
        </View>
      ) : null}
    </View>
  );
};
