import React from 'react';

import {StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

import { TimerListsImage } from 'src/assets/svgImages';

const SwitchNameScreen = () => {

    const handlePress = () => {
        Alert.alert('ok');
    };

    return (
        <View
        >
        <Text
            style={styles.ofText}
        >
            Tên công tắc
        </Text>
  
        <View
            style={styles.input}
        >
            <TouchableOpacity
                onPress = {handlePress}
            >
                <TimerListsImage
                    style={styles.timerListsImage}
                />
            </TouchableOpacity>
                   
            <TextInput
                style = {styles.placeholderText}
                placeholder="Công tắc 1"
                placeholderTextColor="#ccc"
             />

            </View>

        </View>            
    );
};

const styles = StyleSheet.create({
    placeholderText: {
        top:-20,
        marginLeft: -5,
        justifyContent: 'space-between', // Đặt justify thành space-between
        position: 'relative',
        width:'90%',
        backgroundColor: 'white',
    },
    timerListsImage: {
        top: 10,
        left: 363,
        backgroundColor:'white',
        width:'10%',
        position:'relative'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 16,
        marginBottom: 20,
        width: '100%',
        height: 41,
        top: 15,
        position: 'relative'
    },
    ofText: {
        width: '100%',
        height: 18,
        top: 10,
        left: 16,
        fontFamily: 'SF Pro Text',
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 18,
        letterSpacing: 0, // Giá trị của thuộc tính letter-spacing
        textAlign: 'left',
        color: '#252525'
    },
})
export default SwitchNameScreen;