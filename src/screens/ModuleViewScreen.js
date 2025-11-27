import { StyleSheet, Text } from 'react-native';
import Screen from './layout/Screen';

const ModuleViewScreen = () => {
  return (
    <Screen>
      <Text style={styles.text}>View</Text>
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

export default ModuleViewScreen;
