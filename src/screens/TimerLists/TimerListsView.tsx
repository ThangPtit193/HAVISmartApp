import React, { useState, useEffect }from 'react'

import {View, StyleSheet, Text, TouchableOpacity, Alert, TextInput} from 'react-native'

import { TimerListsImage2 } from 'src/assets/svgImages';

import TimerComponent1 from 'src/components/switch/TimerComponent1';

import TimerComponent2 from 'src/components/switch/TimerComponent2';

const TimerListsScreen: React.FC = () => {
    const [isOff, setIsOff] = useState<boolean[]>([false, false, false, false, false]);

    const [isOk, setIsOk] = useState(false); 

    const handlePress = () => {
        Alert.alert('ok');
    };

    const handlePress2 = (index: number) => {
        setIsOff((prevState) => {
          const updatedState = [...prevState];
          updatedState[index] = !updatedState[index];
          return updatedState;
        });
      };
    
      useEffect(() => {
        if (isOff.every((state) => !state)) {
            Alert.alert('not ok');
        } else {
            Alert.alert('ok');
        }
    }, [isOff]);
      const timeList = [
        { time: '08:30' },
        { time: '12:00' },
        { time: '17:00' },
        { time: '21:30' },
        { time: '23:00' },
      ];

    return (
        <View
        >
            <Text
                style={styles.ofText}
            >
                Danh sách hẹn giờ
            </Text>

            <View 
                style={styles.input2}
            >
                <TouchableOpacity
                    onPress = {handlePress}
                >
                    <TimerListsImage2
                        style={styles.timerListsImage2}
                    />
                </TouchableOpacity>
                   
                <TextInput
                    style = { styles.placeholderText2 }
                    placeholder="Thêm giờ hẹn"
                    placeholderTextColor="#ccc"
                />
            </View>
            {isOff.map((state, index) => (
                <View 
                    style={styles.input2} 
                    key={index}
                >
                    <TouchableOpacity 
                        onPress={() => handlePress2(index)}
                    >
                        {state ? (
                        <TimerComponent1/>
                        ) : (
                        <TimerComponent2/>
                )}
                    </TouchableOpacity>

                    <Text
                        style={styles.ofText2}
                    >
                        {timeList[index].time}
                    </Text>
                </View>
        ))}
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
    input2: {
        backgroundColor: 'white',
        paddingHorizontal: 16,
        marginBottom: 2,
        width: '100%',
        height: 61,
        top: 20,
        position: 'relative'
    },
    placeholderText2: {
        top:-26,
        marginLeft: -5,
        justifyContent: 'space-between', // Đặt justify thành space-between
        position: 'relative',
        width:'90%',
        backgroundColor: 'white',
    },
    timerListsImage2: {
        top: 13,
        left: 345,
        backgroundColor:'white',
        width:'10%',
        position:'relative',
    },
    ofText2: {
        top:-30,
        marginLeft: -5,
        justifyContent: 'space-between', // Đặt justify thành space-between
        position: 'relative',
        width:'85%',
        backgroundColor: 'white',
        fontFamily: 'SF Pro Text',
        fontSize: 25,
        fontWeight: 'bold',
        color: '#252525',
    },
})
export default TimerListsScreen;
