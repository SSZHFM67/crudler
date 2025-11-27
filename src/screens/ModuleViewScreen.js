import { StyleSheet, Text } from 'react-native';
import React from 'react';
import Screen from './layout/Screen';
import ModuleView from './components/entity/modules/ModuleView';

const ModuleViewScreen = ({ route }) => {
   const { module } = route.params;

  return (
    <Screen>
      <ModuleView module={module} />
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
