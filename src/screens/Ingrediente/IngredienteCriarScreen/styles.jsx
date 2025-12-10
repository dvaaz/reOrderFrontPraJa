import { StyleSheet } from "react-native";
import { COLOR } from "@/constants/constantsStyles";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLOR.background,
  },
  container: { 
    flex: 1,
  },
  content: { 
    padding: 18, 
    paddingBottom: 32,
    gap: 12,
  },
  header: {
    gap: 6,
  },
  title: { 
    fontSize: 24, 
    fontWeight: "800", 
    color: COLOR.preto,
  },
  subtitle: { 
    fontSize: 14, 
    color: COLOR.gray,
    lineHeight: 20,
  },
  card: {
    backgroundColor: COLOR.card,
    borderRadius: 16,
    padding: 16,
    gap: 16,
    borderWidth: 1,
    borderColor: COLOR.softtGray,
    shadowColor: COLOR.primaryDark,
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  field: { 
    gap: 8,
  },
  label: { 
    fontSize: 14, 
    fontWeight: "700", 
    color: COLOR.preto,
  },
  input: { 
    borderWidth: 1, 
    borderColor: COLOR.softtGray, 
    borderRadius: 12, 
    padding: 12, 
    fontSize: 15,
    backgroundColor: COLOR.branco,
    color: COLOR.preto,
  },
  multiline: { 
    height: 100, 
    textAlignVertical: "top",
  },
  unitsRow: { 
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  fieldButton: {
    gap: 8,
  },
  unitButton: { 
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderWidth: 1, 
    borderColor: COLOR.softtGray, 
    borderRadius: 14, 
    minWidth: 60, 
    alignItems: "center",
    backgroundColor: COLOR.branco,
  },
  unitButtonSelected: { 
    backgroundColor: COLOR.primarySoft, 
    borderColor: COLOR.primary, 
  },
  unitText: { 
    color: COLOR.preto,
    fontWeight: "700",
  },
  unitTextSelected: { 
    color: COLOR.primaryDark,
  },
  pickerWrapper: { 
    borderWidth: 1, 
    borderColor: COLOR.softtGray, 
    borderRadius: 12, 
    overflow: "hidden", 
    justifyContent: "center",
    backgroundColor: COLOR.branco,
  },
  picker: { 
    height: 55, 
    width: "100%",
  },
  loadingContainer: { 
    flexDirection: "row", 
    alignItems: "center", 
    padding: 15,
    gap: 10,
  },
  loadingText: {
    color: COLOR.gray,
  },
  helperText: { 
    fontSize: 12, 
    color: COLOR.gray, 
  },
  actions: { 
    flexDirection: "row", 
    gap: 10,
    justifyContent: "space-between", 
    alignItems: "center", 
    marginTop: 4, 
    marginBottom: 10,
  },
  actionItem: {
    flex: 1,
  },
});
