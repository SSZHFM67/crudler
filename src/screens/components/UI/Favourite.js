import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Selector from './Selector';
import Icons from './Icons';

const Favourite = ({ isFavourite, onPress, style }) => {
    const icon = isFavourite ? Icons.Favourite() : Icons.NotFavourite();

  return (
    <Selector
      onPress={onPress}
      style={[styles.container, style]}
      pressedStyle={styles.pressed}
      // tap only 
      useLongPress={false}
    >
      <Text style={styles.icon}>{icon}</Text>
    </Selector>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingRight: 8,
  },
  pressed: {
    opacity: 0.7,
  },
  icon: {
    fontSize: 18,
  },
});

export default Favourite;