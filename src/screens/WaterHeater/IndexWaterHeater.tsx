import React from "react";

import { View, StyleSheet } from "react-native";

import WaterHeaterCenterView from "./WaterHeaterCenterView";

import ClockView from "./ClockView";

const WaterHeaterScreen = () => {

    return (
        <View 
            style={styles.container}
        >
            <ClockView/>

            <WaterHeaterCenterView/>

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

export default WaterHeaterScreen;
