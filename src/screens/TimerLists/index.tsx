import React from 'react';

import {StyleSheet, View } from 'react-native';

import SwitchNameScreen from './SwitchName';

import TimerListsScreen from './TimerListsView';

import OtherSwitchScreen from './OtherSwitch';


const TimerListsScreen2 = () => {
    
    return (
      <View style={styles.container}>
        <SwitchNameScreen/>
        <TimerListsScreen/>
        <OtherSwitchScreen/>
      </View>
    );

  };
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F7FB',
    },
})
export default TimerListsScreen2;