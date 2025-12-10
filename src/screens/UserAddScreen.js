import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Screen from './layout/Screen';
import { Button, ButtonTray } from './components/UI/Button';

const UserAddScreen = ({ route, navigation }) => {
  const { onAdd, nextId } = route.params;

  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  const handleAdd = () => {
    if (!onAdd) return;

    const newUser = {
      UserID: nextId,
      UserName: name || 'Unnamed User',
      UserRole: role || 'Student',
    };

    onAdd(newUser);
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <Screen>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#666"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Role (e.g. Staff / Student)"
          placeholderTextColor="#666"
          value={role}
          onChangeText={setRole}
        />
      </View>

      <ButtonTray>
        <Button label="Add" onPress={handleAdd} />
        <Button label="Cancel" onPress={handleCancel} />
      </ButtonTray>
    </Screen>
  );
};

const styles = StyleSheet.create({
  form: {
    padding: 16,
  },
  input: {
    backgroundColor: '#111',
    color: '#fff',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 12,
  },
});

export default UserAddScreen;