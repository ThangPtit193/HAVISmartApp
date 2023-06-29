import React from 'react';

import { TimerListsImage4 } from 'src/assets/svgImages';

import {StyleSheet, View} from 'react-native';

const TimerComponent2 = () => {
    return (
        <View
        >
            <TimerListsImage4
                width={Timer_Lists_Width}
                height={Timer_Lists_Height}
                style={styles.timerListsImage3}
            />
        </View>
    )
}

const Timer_Lists_Height = 40;

const Timer_Lists_Width = 40;

const styles = StyleSheet.create({
    timerListsImage3: {
        top: 0,
        left: 345,
        backgroundColor:'white',
        width:'10%',
        position:'relative',
    },
})

export default TimerComponent2;