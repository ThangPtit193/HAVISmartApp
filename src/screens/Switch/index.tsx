import React from "react";

import {View, Text, StyleSheet, FlatList} from "react-native";

import SwitchCenterView from "./SwitchCenterView";

const SwitchScreen = () => {

    const numberOfSwitches = 6;
  
    return (
      <FlatList

        data={Array.from({ length: numberOfSwitches })}

        renderItem={({ index }) => (

          <View
            style={styles.container1}
          >
            <SwitchCenterView />

            <Text
              style ={styles.switchText}
            >
              Công tắc {index + 1}
            </Text>

          </View>
        )}

        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.container}

      />
    );
  };
  
  const switchWidth = 142;

  const switchHeight = 234;
  
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingBottom: 20,
    },
    container1: {
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      backgroundColor: '#DDDDDD',
      height: switchHeight,
      width: switchWidth,
      margin: 5,
      position: 'relative'
    },
    switchText: {
        position: 'absolute',
        fontFamily: 'SF Pro Text',
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 18,
        letterSpacing: 0,
        textAlign: 'center',
        color: '#252525',
        bottom: 50, 
        left: 0,
        right: 0,
    },
  });
  
export  default SwitchScreen;