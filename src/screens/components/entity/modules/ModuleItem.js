import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Selector from '../../UI/Selector';

const ModuleItem = ({ module, onPress }) => {
  //const handlePress = () => {
    //onSelect(module);
  //};

  return (
    <Selector
      onPress={onPress}
      style={styles.item}
      pressedStyle={styles.pressedItem}
      //long press to avoid accidents
      useLongPress={true}
    >
      <View>
        <Text style={styles.code}>{module.ModuleCode}</Text>
        <Text style={styles.name}>{module.ModuleName}</Text>
      </View>
    </Selector>

    /*<Pressable style={styles.item} onPress={handlePress}>
      <Text style={styles.code}>{module.ModuleCode}</Text>
      <Text style={styles.name}>{module.ModuleName}</Text>
    </Pressable>*/
  );
};

const styles = StyleSheet.create({
  item: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
   },
  pressedItem: {
    backgroundColor: 'azure',
  },
  code: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  name: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 2,
  },
});

export default ModuleItem;
