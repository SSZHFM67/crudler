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