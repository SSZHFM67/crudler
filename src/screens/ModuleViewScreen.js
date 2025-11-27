import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { Alert } from 'react-native';
import Screen from './layout/Screen';
import ModuleView from './components/entity/modules/ModuleView';

const ModuleViewScreen = ({ route, navigation }) => {
   const { module } = route.params;
   const handleModify = () => {
    Alert.alert('Modify', `Modify ${module.ModuleCode}`);
   };

   const handleDelete = () => {
    Alert.alert('Delete', `Delete ${module.ModuleCode}`);
   };

  return (
    <Screen>
      <ModuleView
      module={module}
      onModify={handleModify}
      onDelete={handleDelete}
      />
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
