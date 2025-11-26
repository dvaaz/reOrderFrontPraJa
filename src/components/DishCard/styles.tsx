import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        width: 160,
        height: 100,
        marginHorizontal: 8,
        borderWidth: 2,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    dishName:{
        fontSize: 14,
        fontWeight: '600',
        textAlign: "center",
    },
    dishQty:{
        fontSize: 12,
        marginTop: 4,
        color: "#555",
    }
});