import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screen from './layout/Screen';
import { Button, ButtonTray } from './components/UI/Button';

const UserViewScreen = ({ route, navigation }) => {
  const { user, onDelete, onUpdate } = route.params;

  const displayName =
    user.UserName ||
    `${user.UserFirstname ?? ''} ${user.UserLastname ?? ''}`.trim() ||
    user.UserEmail ||
    `User ${user.UserID}`;

  let displayRole =
    user.UserUsertypeName || user.UserRole || '';

  if (!displayRole) {
    const typeId = user.UserUsertypeID;
    if (typeId === 1 || typeId === '1') {
      displayRole = 'Staff';
    } else if (typeId === 2 || typeId === '2') {
      displayRole = 'Student';
    }
  }
  const gotoModify = () => {
    navigation.navigate('UserModify', {
      user,
      onSave: onUpdate,
    });
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(user.UserID);
    }
  };

   return (
    <Screen>
      <View style={styles.content}>
        <Text style={styles.name}>{user.UserName}</Text>
        <Text style={styles.role}>{user.UserRole}</Text>
        <Text style={styles.id}>ID: {user.UserID}</Text>
      </View>

      <ButtonTray>
        <Button label="Modify" onPress={gotoModify} />
        <Button label="Delete" onPress={handleDelete} />
      </ButtonTray>
    </Screen>
     
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 16,
  },
  name: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  role: {
    color: '#ccc',
    fontSize: 16,
    marginBottom: 8,
  },
  id: {
    color: '#aaa',
    fontSize: 14,
  },
});

export default UserViewScreen;