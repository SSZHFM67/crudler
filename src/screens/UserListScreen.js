import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Screen from './layout/Screen';
import { Button, ButtonTray } from './components/UI/Button';
import Selector from './components/UI/Selector';
import initialUsers from './data/users';

const UserItem = ({ user, onSelect }) => {
  return (
    <Selector
      onPress={() => onSelect(user)}
      style={styles.item}
      pressedStyle={styles.pressedItem}
      useLongPress={false}
    >
      <View>
        <Text style={styles.name}>{user.UserName}</Text>
        <Text style={styles.role}>{user.UserRole}</Text>
      </View>
    </Selector>
  );
};

const UserListScreen = ({ navigation }) => {
  const [users, setUsers] = React.useState(initialUsers);

  const gotoViewUser = (user) => {
    navigation.navigate('UserView', {
      user,
      onDelete: (id) => {
        // temporaryy delete 
        setUsers((prev) => prev.filter((u) => u.UserID !== id));
        navigation.goBack();
      },
      onUpdate: (updatedUser) => {
        setUsers((prev) =>
          prev.map((u) => (u.UserID === updatedUser.UserID ? updatedUser : u)),
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
        <Button label="Add user" onPress={gotoAddUser} />
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