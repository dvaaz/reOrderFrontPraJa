import { COLOR } from "@/constants/constantsStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { DishCard } from "../DishCard";


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
              <Ionicons nome="alert-circle" size={16} color={COLOR.branco} />
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
            <DishCard nome={item.nome} quantity={item.quantity} />
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

export const styles = StyleSheet.create({
  groupContainer: {
    marginBottom: 16,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: COLOR.card,
    borderWidth: 1,
    borderColor: COLOR.softtGray,
    shadowColor: COLOR.primaryDark,
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  groupHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  groupTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: COLOR.preto,
  },
  groupSubtitle: {
    fontSize: 12,
    color: COLOR.gray,
  },
  colorSquare: {
    width: 18,
    height: 18,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "rgba(0,0,0,0.08)",
  },
  listContent: {
    paddingVertical: 10,
    paddingHorizontal: 6,
    gap: 8,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: COLOR.danger,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },
  badgeText: {
    color: COLOR.branco,
    fontWeight: "700",
    fontSize: 12,
  },
  emptyState: {
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderTopWidth: 1,
    borderColor: COLOR.softtGray,
  },
  emptyText: {
    color: COLOR.gray,
    fontSize: 13,
  },
});
