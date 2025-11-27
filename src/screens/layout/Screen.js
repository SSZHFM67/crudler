import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

const Screen = ({ children }) => {
  // Initialisations 
  // State 
  // Handlers 
  // View 
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',   // dark background
    padding: 16,
  },
});

export default Screen;