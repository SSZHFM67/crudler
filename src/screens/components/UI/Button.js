import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Selector from './Selector';

//reusable button 
const Button = ({ title, children, onPress, style }) => {
  const label = children || title;

 return (
    <Selector
      onPress={onPress}
      style={[styles.button, style]}
      pressedStyle={styles.pressedButton}
      // use normal tap for buttons
      useLongPress={false}
    >
      <Text style={styles.text}>{label}</Text>
    </Selector>
  );
};
//reusable ButtonTray side by side 

//const ButtonTray = ({ children }) => {
//  return <View style={styles.tray}>{children}</View>;
//};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  pressedButton: {
    backgroundColor: 'azure',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  text: {
    color: '#000',
    fontWeight: '500',
  },
});

export default Button;