import { StyleSheet, Text } from 'react-native';
import Screen from './Screen';

const ModuleAddScreen = () => {
  return (
    <Screen>
      <Text style={styles.text}>Add</Text>
    </Screen>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 40,
  },
});

export default ModuleAddScreen;
