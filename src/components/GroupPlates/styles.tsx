import { StyleSheet } from "react-native";
import { COLOR } from "@/constants/constantsStyles";

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
