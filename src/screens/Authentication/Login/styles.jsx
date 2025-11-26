import { COLOR, FONT_SIZE } from "@/constants/constantsStyles";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container:{ 
        flex: 1, 
        alignItems: "center", 
        justifyContent: "center", 
        backgroundColor: COLOR.background 
    },
    input: {
        height:50,
        width: '60%',
        borderColor: COLOR.gray,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: FONT_SIZE.md,
        backgroundColor: COLOR.softtGray,
        marginBottom:20,
    },

    box: {
        height: "60%",
        width: "60%",
        backgroundColor: COLOR.branco,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    boxTitle: {
        fontSize: FONT_SIZE.xxlarge,
        fontWeight: "bold",
        marginBottom: 20,
    },
    newAccountText: {
        fontSize: FONT_SIZE.md,
        color: COLOR.blue,
        textAlign: "center",
        marginTop: 10,
    },   
     okButton: {
            backgroundColor: COLOR.blue,
        },
          actionButton: {
        flex: 1,
        height: 48,
        width: 80,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
      },
})