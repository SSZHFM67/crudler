import React from 'react';
import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import Screen from './layout/Screen';
import Button from './components/UI/Button';
import API from './components/API/API';

const ModuleViewScreen = ({ route, navigation }) => {
  const { module, onDelete, onUpdate } = route.params;

  const confirmDelete = async () => {
    const response = await API.delete(`/modules/${module.ModuleID}`);

    if (response.isSuccess) {
      // Refresh list 
      if (onDelete) {
        onDelete();
      }
      navigation.goBack();
    } else {
      Alert.alert(
        'Delete failed',
        response.message || 'Could not delete this module. Please try again.'
      );
    }
  };

  const handleDelete = () => {
    Alert.alert(
      'Delete module',
      `Are you sure you want to delete ${module.ModuleCode}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: confirmDelete },
      ]
    );
  };

  const handleModify = () => {
    navigation.navigate('ModuleModify', {
      module,
      onUpdate, 
    });
  };

  return (
    <Screen>
      <ModuleView
      module={module}
      onModify={handleModify}
      onDelete={onDelete}
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
