import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "../styles/styles";

export default class Display extends Component {
    render() {
        return(
            <View style={styles.displayContainer}>
                <Text>Hi I am a text inside display</Text>
            </View>
        );
    }
}