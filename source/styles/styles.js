import { StyleSheet, Platform, StatusBar } from "react-native";
import Colors from "./colors";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
    displayContainer: {
        flex: 2,
        backgroundColor: Colors.GREY,
    },
    displayText: {
        flex: 1,
        bottom: 0,
        alignSelf: "flex-end",
        alignContent: "center",
        textAlign: "right",
        textAlignVertical: "bottom",
        marginTop: Platform.OS === "ios" ? 40 : 0,
        marginBottom: 20
    },
    buttonsContainer: {
        flex: 8,
        backgroundColor: Colors.BLACK
    }
});

export default styles;