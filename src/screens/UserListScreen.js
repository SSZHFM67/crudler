import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';

import Screen from './layout/Screen';
import { Button, ButtonTray } from './components/UI/Button';
import Selector from './components/UI/Selector';
import initialUsers from './data/users';
import API from './components/API/API';

const UserItem = ({ user, onSelect }) => {
  // try to fix name problem not showing normaliseign 
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

  return (
    <Selector
      onPress={() => onSelect(user)}
      style={styles.item}
      pressedStyle={styles.pressedItem}
      useLongPress={false}
    >
      <View>
        <Text style={styles.name}>{displayName}</Text>
        <Text style={styles.role}>{displayRole}</Text>
      </View>
    </Selector>
  );
};

const UserListScreen = ({ navigation }) => {
  const [users, setUsers] = useState(initialUsers);
  const [isLoading, setIsLoading] = useState(false);

  // Load users from the API
  const loadUsers = async () => {
    try {
      setIsLoading(true);

      const response = await API.get('/users');

      if (response.isSuccess && Array.isArray(response.result)) {
        setUsers(response.result);
      } else {
        console.warn('Failed to load users from API:', response.message);
        Alert.alert(
          'Users',
          'Could not load users from the server, showing local list instead.'
        );
        setUsers(initialUsers);
      }
    } catch (error) {
      console.warn('Error loading users from API:', error);
      Alert.alert(
        'Users',
        'An error occurred while loading users. Showing local list instead.'
      );
      setUsers(initialUsers);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const gotoViewUser = (user) => {
    navigation.navigate('UserView', {
      user,
      onDelete: (id) => {
        setUsers((prev) => prev.filter((u) => u.UserID !== id));
        navigation.goBack();
      },
      onUpdate: (updatedUser) => {
        setUsers((prev) =>
          prev.map((u) =>
            u.UserID === updatedUser.UserID ? updatedUser : u
          )
        );
        navigation.goBack();
      },
    });
  };

  const gotoAddUser = () => {
    navigation.navigate('UserAdd', {
      onAdd: (newUser) => {
        setUsers((prev) => [...prev, newUser]);
        navigation.goBack();
      },
      nextId:
        users.length > 0
          ? Math.max(...users.map((u) => u.UserID)) + 1
          : 1,
    });
  };

  return (
    <Screen>
      <ButtonTray>
        <Button
          label={isLoading ? 'Loading users…' : 'Add user'}
          onPress={gotoAddUser}
          disabled={isLoading}
        />
      </ButtonTray>

      <ScrollView contentContainerStyle={styles.listContainer}>
        {users.map((user) => (
          <UserItem key={user.UserID} user={user} onSelect={gotoViewUser} />
        ))}
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 16,
  },
  item: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  pressedItem: {
    backgroundColor: '#222',
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  role: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 2,
  },
});

export default UserListScreen;
