import React from 'react';

import { View, StyleSheet, Alert, TouchableOpacity} from "react-native"

import LinearGradient from 'react-native-linear-gradient';

import { SwitchImage } from "src/assets/svgImages";

const SwitchScreen: React.FC = () => {

    const onPress = () => {
        Alert.alert("OK");
    }

    return (
        <View style = {styles.third}
        >
            <LinearGradient
                colors={['#FFFFFF', '#CCCCCC']}
                style = {styles.second}
            />
            <View
                style ={ styles.viewSecond }
            >
            </View>
            <TouchableOpacity
                onPress={onPress}
             >
                <SwitchImage
                    style ={styles.switchImageS}
                />
             </TouchableOpacity>
    
        </View>
    )
}
const switchWidth = 142;

const switchHeight = 234;

const styles = StyleSheet.create({
second: {
    position: 'absolute',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: 0.97* 0.95*switchHeight,
    width: switchWidth*0.96,
},
third: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#FFFFFF',
    height: 0.95* switchHeight,
    width: switchWidth,
    justifyContent:'center',
    alignItems:'center'
},
switchText: {
    fontFamily: 'SF Pro Text',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#252525',
    position: 'absolute',
    bottom: 40,
},
viewSecond: {
    backgroundColor: '#FFFFFF',
    width: 26,
    height: 6,
    borderRadius: 8,
    alignItems: 'center',
    position: 'absolute',
    bottom: 18,
},
switchImageS: {
    position: 'absolute',
    top:-90,
    right: -55,
    borderRadius: 8,
    height: 32,
    width: 32
},
});

export default SwitchScreen;