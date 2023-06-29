import React, {useState, useEffect} from 'react';

import { TimerListsImage3, TimerListsImage4 } from 'src/assets/svgImages';

import {StyleSheet, View, Alert, TouchableOpacity} from 'react-native';

interface SwitchProps {
    state: boolean;
    index: number;
    number: number;
    Timer_Lists_Height: number;
    Timer_Lists_Width: number;
  }

const Switch : React.FC<SwitchProps> = ({ state, index, Timer_Lists_Height, Timer_Lists_Width }) => {
  const [isOff, setIsOff] = useState(false);

  const handlePress2 = () => {
    setIsOff((prevState) => !prevState);
  };

  useEffect(() => {
    if (state) {
      Alert.alert('ok');
    } else {
      Alert.alert('not ok');
    }
  }, [state]);

  return (
    <View>
      <TouchableOpacity onPress={handlePress2}>
        {isOff ? (
          <TimerListsImage3
            width={Timer_Lists_Width}
            height={Timer_Lists_Height}
            style={styles.timerListsImage3}
          />
        ) : (
          <TimerListsImage4
            width={Timer_Lists_Width}
            height={Timer_Lists_Height}
            style={styles.timerListsImage3}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

// const Timer_Lists_Height = 40;
// const Timer_Lists_Width = 40;

const styles = StyleSheet.create({
  timerListsImage3: {
    top: 0,
    left: 345,
    backgroundColor: 'white',
    width: '10%',
    position: 'relative',
  },
});



export default Switch;