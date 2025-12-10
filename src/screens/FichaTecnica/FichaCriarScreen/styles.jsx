import { COLOR, FONT_SIZE } from "@/constants/constantsStyles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: COLOR.branco,
    },
    backPressable: {
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: COLOR.branco,
        alignItems: "center",
        gap: 40,
        paddingHorizontal: 20,
    },
    field: {
        width: "100%",
    },
    addDescriptionField: {
        width: "100%",
        flexDirection: "row",
    },
    label: {
        fontSize: FONT_SIZE.large,
        marginBottom: 8,
        fontWeight: "bold",
    },
    info: {
        fontSize: FONT_SIZE.md,
        color: COLOR.info,
        fontWeight: "600",
    },
    input: {
        borderWidth: 1,
        borderColor: COLOR.softtGray,
        borderRadius: 8,
        padding: 10,
        backgroundColor: COLOR.softtGray,
        fontWeight: 200,
    },
    multiline: {
        height: 80,
        textAlignVertical: "top",
    },
    pickerWrapper: {
        borderWidth: 1,
        borderColor: "COLOR.softtGray",
        borderRadius: 8,
        backgroundColor: "COLOR.branco",
    },
    picker: {
        height: 50,
        width: "100%",
        backgroundColor: COLOR.softtGray,
        fontSize: FONT_SIZE.md,

    },

    unitsRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        margin: 10,
    },
    unitPressable: {
        width: 44,
        height: 44,
        borderRadius: 40,
        backgroundColor: COLOR.branco,
        borderWidth: 1.5,
        marginHorizontal: 8,
        borderColor: COLOR.softtGray,
        alignItems: "center",
        justifyContent: "center",
    },
    unitPressableSelected: {
        backgroundColor: COLOR.info,
        borderColor: COLOR.blue,
        elevation: 2,
    },
    unitText: {
        fontSize: 16,
        fontWeight: "700",
        color: COLOR.preto,
    },
    unitTextSelected: {
        color: COLOR.branco,
    },

    helperText: {
        marginTop: 8,
        fontSize: 12,
        color: COLOR.gray,
    },
    helperBold: {
        fontWeight: "700",
        color: COLOR.preto,
    },
    footerPressables: {
        alignContent: "flex-end",
        flexDirection: "row",
        justifyContent: "space-between",

        gap: 8,
    },
    actionPressable: {
        flex: 1,
        height: 48,
        width: 80,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    cancelPressable: {
        backgroundColor: COLOR.branco,
        borderWidth: 1,
        borderColor: "#E53935",
    },
    okPressable: {
        backgroundColor: "#1976D2",
    },
    cancelText: {
        color: COLOR.danger,
        fontWeight: "700",
    },
    okText: {
        color: COLOR.preto,
        fontWeight: "700",
    },
    box: {
        margin: 2,
        borderWidth: 2,
        borderColor: COLOR.softtGray,
        borderRadius: 8,
        padding: 10,
        backgroundColor: COLOR.branco,
        width: '95%',
        height: 120,
    },
    // modal
    modalView: {
        margin: 2,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 8,
        alignItems: "center",
        shadowColor: COLOR.preto,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    cancelButton: {
        backgroundColor: COLOR.branco,
        borderWidth: 1,
        borderColor: COLOR.danger,
    },
    clearButton: {
        flexDirection: "row",
        gap: 12,
        marginTop: 20,
        alignItems: "flex-start",
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