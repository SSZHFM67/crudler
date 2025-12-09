import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Selector from '../../UI/Selector';
import Favourite from '../../UI/Favourite';

const ModuleItem = ({ module, onSelect  }) => {
  const handlePress = () => {
  onSelect(module);
  };

  const handleFavouritePress = () => {
    console.log('Favourite pressed for', module.ModuleCode);
  };

  const isFavourite = !!module.ModuleFavourite; 

  return (
    <Selector
      onPress={handlePress}
      style={styles.item}
      pressedStyle={styles.pressedItem}
      //long press to avoid accidents
      useLongPress={false}
    >
      <View style={styles.row}>
        <Favourite
        isFavourite={isFavourite}
          onPress={handleFavouritePress}
          style={styles.favourite}
        />

         <View>
          <Text style={styles.code}>{module.ModuleCode}</Text>
          <Text style={styles.name}>{module.ModuleName}</Text>
        </View>
      </View>
    </Selector>
  );
};
  
const styles = StyleSheet.create({
  item: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
   },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  favourite: {
    marginRight: 8,
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
