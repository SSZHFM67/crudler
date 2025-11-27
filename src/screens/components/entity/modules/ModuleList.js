import { ScrollView, StyleSheet, View } from 'react-native';
import ModuleItem from './ModuleItem';

const ModuleList = ({ modules, onSelect }) => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      {modules.map((module) => (
        <ModuleItem
          key={module.ModuleID}
          module={module}
          onSelect={onSelect}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 16,
  },
});

export default ModuleList;