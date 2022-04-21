import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from '../../styles/styles';


const inputButtons = [
    [9,8,7, "/"],
    [6,5,4, "*"],
    [3,2,1, "-"],
    [".",0,"=", "+"],
]


export default class ButtonContainer extends Component {

    render() {
        return(
            <View style={styles.buttonsContainer}>
            </View>
        );
    }
}