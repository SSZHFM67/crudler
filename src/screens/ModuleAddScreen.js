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

const DEFAULT_IMAGE =
  'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg';

const ModuleAddScreen = ({ navigation, route }) => {
  const { onAdd, defaultYearID, defaultLeaderID } = route.params;

  // ModuleYearID, ModuleLeaderID, ModuleImageURL
  const [module, setModule] = useState(() => ({
    ModuleID: null,
    ModuleCode: '',
    ModuleName: '',
    ModuleLevel: '',
    ModuleLeader: '',
    ModuleImage: DEFAULT_IMAGE,
    ModuleYearID: defaultYearID ?? 1,
    ModuleLeaderID: defaultLeaderID ?? 1,
    ModuleImageURL: DEFAULT_IMAGE,
  }));

  const handleChange = (field, value) => {
    setModule((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleAdd = () => {
    // send to the API
    const moduleToSend = {
      ...module,
      ModuleImageURL: module.ModuleImage || DEFAULT_IMAGE,
    };

    onAdd(moduleToSend);
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
            value={module.ModuleCode}
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
            value={module.ModuleName}
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
            value={String(module.ModuleLevel)}
            onChangeText={(text) => handleChange('ModuleLevel', text)}
            placeholder="e.g. 5"
            placeholderTextColor="#777"
            keyboardType="numeric"
          />
        </View>

        {/* Leader (display only – API uses ModuleLeaderID) */}
        <View style={styles.formItem}>
          <Text style={styles.label}>Leader</Text>
          <TextInput
            style={styles.input}
            value={module.ModuleLeader}
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
            value={module.ModuleImage}
            onChangeText={(text) => handleChange('ModuleImage', text)}
            placeholder="Image URL"
            placeholderTextColor="#777"
          />
        </View>

        <View style={styles.formItem}>
          <Text style={styles.label}>Year ID (API)</Text>
          <TextInput
            style={styles.input}
            value={String(module.ModuleYearID)}
            onChangeText={(text) => handleChange('ModuleYearID', text)}
            keyboardType="numeric"
            placeholder="e.g. 2627"
            placeholderTextColor="#777"
          />
        </View>

        <View style={styles.formItem}>
          <Text style={styles.label}>Leader ID (API)</Text>
          <TextInput
            style={styles.input}
            value={String(module.ModuleLeaderID)}
            onChangeText={(text) => handleChange('ModuleLeaderID', text)}
            keyboardType="numeric"
            placeholder="e.g. 1"
            placeholderTextColor="#777"
          />
        </View>

        <ButtonTray>
          <Button label="Add" onPress={handleAdd} />
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

export default ModuleAddScreen;
