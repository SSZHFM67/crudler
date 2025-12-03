import { StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Screen from './layout/Screen';
import { Button, ButtonTray } from './components/UI/Button';

const ModuleModifyScreen = ({ navigation, route }) => {
  const { module, onUpdate } = route.params;

const [editedModule, setEditedModule] = useState(module);

  const handleChange = (field, value) => {
    setEditedModule((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSave = () => {
    onUpdate(editedModule);
     navigation.navigate('ModuleList');
  };

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
