import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from '../styles/styles';

export default class ButtonItems extends Component {
    render() {
        return(
            <View style={styles.buttonsContainer}>
                <Text>Hi I am a text inside display</Text>
            </View>
        );
    }
}