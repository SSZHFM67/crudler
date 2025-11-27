import { Pressable, StyleSheet, Text, View } from 'react-native';

const ModuleItem = ({ module, onSelect }) => {
  const handlePress = () => {
    onSelect(module);
  };

  return (
    <Pressable style={styles.item} onPress={handlePress}>
      <Text style={styles.code}>{module.ModuleCode}</Text>
      <Text style={styles.name}>{module.ModuleName}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
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

export default ModuleItem;
