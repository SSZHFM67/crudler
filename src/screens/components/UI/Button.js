import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

//reusable button 
const Button = ({ label, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed,
      ]}
    >
      <View style={styles.content}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </Pressable>
  );
};
//reusable ButtonTray side by side 

const ButtonTray = ({ children }) => {
  return <View style={styles.tray}>{children}</View>;
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ffffff',
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
  },
  buttonPressed: {
    opacity: 0.7,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: '#000000',
    fontWeight: 'bold',
  },
  tray: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
    marginTop: 12,
    marginBottom: 12,
    gap: 12,
  },
});

export { Button, ButtonTray };
export default Button;
