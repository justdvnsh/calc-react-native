import { StyleSheet } from "react-native";
import Colors from "./colors";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    displayContainer: {
        flex: 2,
        backgroundColor: Colors.GREY
    },
    buttonsContainer: {
        flex: 8,
        backgroundColor: Colors.BLACK
    }
});

export default styles;