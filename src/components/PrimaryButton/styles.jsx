import { FONT_SIZE } from "@/constants/constantsStyles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    categoryButton: {
        width: "auto",
        height:"auto",
        alignSelf: "center",
        paddingVertical: 2,
        padding: 4,
        alignItems: "center",
        borderRadius: 20,
        marginTop: 8,
        borderWidth: 0.5
    },
    buttonText: {
        fontSize: FONT_SIZE.sml,
        padding: 5,
        fontWeight: '600',
        textAlign: "center"
    },
});