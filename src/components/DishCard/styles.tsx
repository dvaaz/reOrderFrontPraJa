import { StyleSheet } from "react-native";
import { COLOR } from "@/constants/constantsStyles";

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
