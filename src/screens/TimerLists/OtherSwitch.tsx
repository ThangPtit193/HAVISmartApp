import React, { useState, useEffect }from 'react';

import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';

import TimerComponent1 from 'src/components/switch/TimerComponent1';

import TimerComponent2 from 'src/components/switch/TimerComponent2';

const OtherSwitchScreen = () => {

    const [isOff, setIsOff] = useState<boolean[]>([false, false, false]);
    const [isOk, setIsOk] = useState(false); 

    const handlePress3 = (index2: number) => {
        setIsOff((prevState) => {
            const updatedState2 = [...prevState];
            updatedState2[index2] = !updatedState2[index2];
            return updatedState2
        })
    }

    useEffect(() => {
    
        if (isOff.every((state) => !state)) {
          setIsOk(true);
        } else {
          setIsOk(false);
        }
      }, [isOff]);

    useEffect(() => {
        
        if(isOk){
            Alert.alert('ok');
        } else{
            Alert.alert('not ok');
        }
      }, [isOff]);

    return (
        <View
        >
            <Text
                style={[styles.ofText, { marginTop: 20 }]}
            >
                Link công tắc khác
            </Text>
        {isOff.map((state, index2) => (
            <View
                style={styles.input3}
                key={index2}
            >
            <TouchableOpacity
                onPress={() => handlePress3(index2)}
            >
                {state ? (
                <TimerComponent1/>
              ) : (
                <TimerComponent2/>
              )}
            </TouchableOpacity>
            
            <Text
                style={styles.ofText3}
            >
                Công tắc {index2 + 2}
            </Text>

          </View>))}

        </View>
    )
}
const Timer_Lists_Width = 40

const Timer_Lists_Height = 40

const styles = StyleSheet.create({
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
    ofText3: {
        top:-30,
        marginLeft: -5,
        justifyContent: 'space-between', // Đặt justify thành space-between
        position: 'relative',
        width:'85%',
        backgroundColor: 'white',
        fontFamily: 'SF Pro Text',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#252525',
    },
    input3: {
        backgroundColor: 'white',
        paddingHorizontal: 16,
        marginBottom: 2,
        width: '100%',
        height: 41,
        top: 20,
        position: 'relative'
    },
    timerListsImage3: {
        top: 0,
        left: 345,
        backgroundColor:'white',
        width:'10%',
        position:'relative',
    },
})

export default OtherSwitchScreen;