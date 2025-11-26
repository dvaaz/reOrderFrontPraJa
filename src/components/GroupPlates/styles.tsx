import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
groupContainer: {
    marginBottom: 20,
    borderRadius: 8,
    overflow: "hidden",
    elevation: 2,
    backgroundColor: "#fff",
  },
  groupHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
  },
  groupTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    alignSelf: "center",
  },
    colorSquare: {
    width: 18,
    height: 18,
    borderRadius: 4,
    marginRight: 8,
    borderWidth: 2,
    borderColor: "rgba(0,0,0,0.1)",
  },
    headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
});