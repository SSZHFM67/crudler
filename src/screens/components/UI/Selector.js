// src/screens/components/UI/Selector.js
import React from 'react';
import {
  Pressable,
  StyleSheet,
  View,
  Vibration,
} from 'react-native';

const Selector = ({
  children,
  onPress,
  style,
  pressedStyle,
  useLongPress = false, // true = use onLongPress, false = normal onPress
}) => {
  const handlePress = () => {
    // tiny haptic “tick”
    Vibration.vibrate(5);
    if (onPress) {
      onPress();
    }
  };

  const pressHandlers = useLongPress
    ? { onLongPress: handlePress }
    : { onPress: handlePress };

    return (
    <Pressable
      {...pressHandlers}
      style={({ pressed }) => [
        style,
        pressed && pressedStyle,
      ]}
    >
      <View>{children}</View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    
});

export default Selector;