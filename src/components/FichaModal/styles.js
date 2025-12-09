import { COLOR as c, FONT_SIZE as fs } from "@/constants/constantsStyles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
backdrop: {
    flex: 1,
    backgroundColor: c.preto,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  modalBox: {
    width: "100%",
    maxHeight: "85%",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 18,
    paddingHorizontal: 16,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 8,
  },
  loadingBox: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
  },
  loadingText: {
    marginTop: 8,
    color: c.pretoSecundario,
  },
  title: {
    textAlign: "center",
    fontSize: fs.xlarge,
    fontWeight: "700",
    marginBottom: 8,
    color: c.preto,
  },
  description: {
    textAlign: "center",
    fontSize: fs.md,
    color: c.pretoSecundario,
    marginBottom: 12,
  },
  listContent: {
    paddingBottom: 12,
  },
  ingredienteContainer: {
    paddingVertical: 10,
    paddingHorizontal: 4,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nomeIngrediente: {
    flex: 1,
    fontSize: fs.large,
    color: c.preto,
  },
  quantidadeWrapper: {
    marginLeft: 12,
    minWidth: 80,
    alignItems: "flex-end",
  },
  quantidadeText: {
    fontSize: fs.md,
    color: c.preto,
    fontWeight: "600",
  },
  detalheText: {
    marginTop: 6,
    color: c.pretoSecundario,
    fontSize: fs.md,
  },
  detalheTextPlaceholder: {
    marginTop: 6,
    color: c.gray,
    fontSize: fs.md,
    fontStyle: "italic",
  },
  separator: {
    height: 1,
    backgroundColor: c.background,
    marginVertical: 6,
  },
  footer: {
    marginTop: 8,
    alignItems: "center",
  },
  okButton: {
    backgroundColor: c.info,
    paddingVertical: 10,
    paddingHorizontal: 28,
    borderRadius: 8,
  },
  okButtonText: {
    color: c.branco,
    fontWeight: "700",
  },
  emptyBox: {
    alignItems: "center",
    paddingVertical: 24,
  },
  emptyText: {
    color: "#666",
    marginBottom: 12,
  },
});