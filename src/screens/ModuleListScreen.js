import { ScrollView, Pressable, StyleSheet, Text, View } from 'react-native';
/*import Screen from './Screen';
import initialModules from '../data/modules';
*/
import React, { useState } from 'react';
import { LogBox } from 'react-native';
import Screen from './layout/Screen';
import initialModules from './data/modules';
import ModuleList from './components/entity/modules/ModuleList';
//import { Alert } from 'react-native';

//no navigation warning about function
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const ModuleListScreen = ({ navigation }) => {
  // Initialisations 
  const [modules, setModules] = useState(initialModules);

  // State 
  // (none yet)

  // Handlers 
  const handleDelete = (moduleToDelete) => {
    setModules((current) =>
      current.filter((m) => m.ModuleID !== moduleToDelete.ModuleID)
    );
  };

  const onDelete = (module) => {
    handleDelete(module);
    navigation.goBack();
  };

   const gotoViewScreen = (module) => {
    navigation.navigate('ModuleView', { module, onDelete });
  };
    
    // test
    //alert(`${module.ModuleCode} - ${module.ModuleName}`);

  // View 

  /*return (
    <Screen>
      <ScrollView contentContainerStyle={styles.listContainer}>
        {modules.map((module) => (
          <Pressable
            key={module.ModuleID}
            style={styles.item}
            onPress={() => handleSelect(module)}
          >
            <Text style={styles.code}>{module.ModuleCode}</Text>
            <Text style={styles.name}>{module.ModuleName}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 16,
  },
  item: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
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
});*/

return (
    <Screen>
      <ModuleList modules={modules} onSelect={gotoViewScreen} />
    </Screen>
  );
};
export default ModuleListScreen;
