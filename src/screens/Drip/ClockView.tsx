import React from "react";

import {View, StyleSheet, Alert, TouchableOpacity} from "react-native";

import { ClockImage1 } from "src/assets/svgImages";

const ClockView = () => {

    const onPress = () => {
        Alert.alert("OK");
    }
    
    return (
        <View
            style={ styles.container }
        >
            <TouchableOpacity
                 onPress={onPress}
             >
                <ClockImage1
                    style={ styles.clockview }
                 />
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    clockview: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default ClockView;