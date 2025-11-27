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
         <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

//reusable ButtonTray side by side 

const ButtonTray = ({ children }) => {
  return <View style={styles.tray}>{children}</View>;
};

const styles = StyleSheet.create({
  tray: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginTop: 16,
    paddingHorizontal: 16,
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 6,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  buttonPressed: {
    opacity: 0.7,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
});
export { Button, ButtonTray };