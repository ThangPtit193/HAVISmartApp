import React from "react";

import { View, StyleSheet } from "react-native";

import CenterView from "./CenterView";

import ClockView  from "./ClockView";

const DripScreen = () => {

    return (
        <View 
            style={styles.container}
        >
            <CenterView/>
            <ClockView/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: '#F6F7FB',
        justifyContent:'center',
        alignItems: 'center',
    },
});

export default DripScreen;