//import { StyleSheet, Text } from 'react-native';
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

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Code */}
        <View style={styles.formItem}>
          <Text style={styles.label}>Code</Text>
          <TextInput
            style={styles.input}
            value={editedModule.ModuleCode ?? ''}
            onChangeText={(text) => handleChange('ModuleCode', text)}
            placeholder="e.g. CI6330"
            placeholderTextColor="#777"
          />
        </View>

        {/* Name */}
        <View style={styles.formItem}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={editedModule.ModuleName ?? ''}
            onChangeText={(text) => handleChange('ModuleName', text)}
            placeholder="Module name"
            placeholderTextColor="#777"
          />
        </View>

        {/* Level */}
        <View style={styles.formItem}>
          <Text style={styles.label}>Level</Text>
          <TextInput
            style={styles.input}
            value={editedModule.ModuleLevel ?? ''}
            onChangeText={(text) => handleChange('ModuleLevel', text)}
            placeholder="e.g. 5"
            placeholderTextColor="#777"
            keyboardType="numeric"
          />
        </View>

        {/* Leader */}
        <View style={styles.formItem}>
          <Text style={styles.label}>Leader</Text>
          <TextInput
            style={styles.input}
            value={editedModule.ModuleLeader ?? ''}
            onChangeText={(text) => handleChange('ModuleLeader', text)}
            placeholder="Module leader"
            placeholderTextColor="#777"
          />
        </View>

        {/* Image URL */}
        <View style={styles.formItem}>
          <Text style={styles.label}>Image URL</Text>
          <TextInput
            style={styles.input}
            value={editedModule.ModuleImage ?? ''}
            onChangeText={(text) => handleChange('ModuleImage', text)}
            placeholder="Image URL"
            placeholderTextColor="#777"
          />
        </View>

        <ButtonTray>
          <Button label="Save" onPress={handleSave} />
          <Button label="Cancel" onPress={handleCancel} />
        </ButtonTray>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 40,
  },
  formItem: {
    marginBottom: 16,
  },
  label: {
    color: '#ffffff',
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#111111',
    borderColor: '#333333',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: '#ffffff',
  },
});

export default ModuleModifyScreen;