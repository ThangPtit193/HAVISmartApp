import React from "react";

import { View, TouchableOpacity, StyleSheet, Alert } from "react-native";

import { Rectangle, Rectangle2, Rectangle3 } from "src/assets/svgImages";

const CenterView = () => {

    const onPress = () => {
        Alert.alert("OK");
    }

    return (
        <View 
            style={styles.centerView}
        >
            <TouchableOpacity
                onPress={onPress}
            >
                <Rectangle style={{
                    justifyContent: 'space-around',
                }}/>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={onPress}
            >
                <Rectangle2 style={{
                    justifyContent: 'space-around',
            
                }}/>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={onPress}
            >
                <Rectangle3 style={{
                    justifyContent: 'space-around',
                }}/>
            </TouchableOpacity>

        </View>
    )
}

const CENTER_VIEW_SIZE = 327;

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: '#F6F7FB',
        justifyContent:'center',
        alignItems: 'center',
    },
    centerView: {
        borderRadius: CENTER_VIEW_SIZE / 2,
        backgroundColor: '#FFF',
        width: CENTER_VIEW_SIZE,
        height: CENTER_VIEW_SIZE,
        justifyContent:'space-around',
        alignItems: 'center',
    },
});

export default CenterView;