import React, { useState } from "react";

import {View, StyleSheet, Text, TouchableOpacity} from "react-native";

import { HeaterImage1, HeaterImage2, HeaterImage3, HeaterImage4} from "src/assets/svgImages";

const WaterHeaterScreen: React.FC = () => {
    
    const [isOn, setIsOn] = useState<boolean>(false);

    const handlePress = () => {
      setIsOn(!isOn);
    };

    return (

      <TouchableOpacity
        onPress={handlePress}
      >

      <View 
        style={styles.centerView}
      >
        {isOn ? (
          <View
            style={styles.centerView}
          >
            <HeaterImage1 />
            <Text
              style={styles.offText}
            >
              OFF
            </Text>
            <View
              style={styles.centerContent}
            >
              <HeaterImage2 />
            </View>

          </View>
        ) : (
            <View
              style={styles.centerView}
            >
              <HeaterImage4/>
              <Text
                style={styles.offText}
              >
                ON
              </Text>
              <View 
                style={styles.centerContent}
              >
                <HeaterImage3/>
              </View>

            </View>  
        )}
    
      </View>
    </TouchableOpacity>
    )
}
const CENTER_VIEW_SIZE = 327;

const styles = StyleSheet.create({
    centerView: {
        backgroundColor: '#F6F7FB',
        width: CENTER_VIEW_SIZE,
        height: CENTER_VIEW_SIZE,
        justifyContent:'center',
        alignItems: 'center',
    },
    centerContent: {
        position: 'absolute',
        top:'45%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      offText: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
      },
});
export default WaterHeaterScreen;