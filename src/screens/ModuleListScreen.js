import { ScrollView, Pressable, StyleSheet, Text, View } from 'react-native';
/*import Screen from './Screen';
import initialModules from '../data/modules';
*/
import Screen from './layout/Screen';
import initialModules from './data/modules';
import ModuleList from './components/entity/modules/ModuleList';
import { Alert } from 'react-native';

const ModuleListScreen = () => {
  // Initialisations 
  const modules = initialModules;

  // State 
  // (none yet)

  // Handlers 
  const handleSelect = (module) => {
    // test
    alert(`${module.ModuleCode} - ${module.ModuleName}`);
  };

  // View 
  return (
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
});

export default ModuleListScreen;
