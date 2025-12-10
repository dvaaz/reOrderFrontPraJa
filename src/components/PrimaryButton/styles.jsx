import { StyleSheet } from "react-native";
import { COLOR } from "@/constants/constantsStyles";

export const styles = StyleSheet.create({
  categoryButton: {
    alignSelf: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    marginTop: 8,
    borderWidth: 1.5,
    shadowColor: COLOR.primaryDark,
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 12,
    elevation: 5,
  },
  outlined: {
    shadowOpacity: 0,
    elevation: 0,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  icon: {
    marginRight: 4,
  },
  buttonText: {
    fontWeight: "700",
    textAlign: "center",
  },
});
