import { StyleSheet, Text } from 'react-native';
import Screen from './layout/Screen';

const ModuleModifyScreen = () => {
  return (
    <Screen>
      <Text style={styles.text}>Modify</Text>
    </Screen>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 24,
  },
});

export default ModuleModifyScreen;
