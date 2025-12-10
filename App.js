import * as React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ModuleListScreen from './src/screens/ModuleListScreen';
import ModuleAddScreen from './src/screens/ModuleAddScreen';
import ModuleViewScreen from './src/screens/ModuleViewScreen';
import ModuleModifyScreen from './src/screens/ModuleModifyScreen';

import UserListScreen from './src/screens/UserListScreen';
import UserAddScreen from './src/screens/UserAddScreen';
import UserViewScreen from './src/screens/UserViewScreen';
import UserModifyScreen from './src/screens/UserModifyScreen';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function ModulesStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="ModuleList"
      screenOptions={{
        headerStyle: { backgroundColor: '#000' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: '600' },
      }}
    >
      <Stack.Screen
        name="ModuleList"
        component={ModuleListScreen}
        options={{ title: 'Module Crudler' }}
      />
      <Stack.Screen
        name="ModuleAdd"
        component={ModuleAddScreen}
        options={{ title: 'Add Module' }}
      />
      <Stack.Screen
        name="ModuleView"
        component={ModuleViewScreen}
        options={{ title: 'View Module' }}
      />
      <Stack.Screen
        name="ModuleModify"
        component={ModuleModifyScreen}
        options={{ title: 'Modify Module' }}
      />
    </Stack.Navigator>
  );
}

function UsersStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="UserList"
      screenOptions={{
        headerStyle: { backgroundColor: '#000' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: '600' },
      }}
    >
      <Stack.Screen
        name="UserList"
        component={UserListScreen}
        options={{ title: 'User Crudler' }}
      />
      <Stack.Screen
        name="UserAdd"
        component={UserAddScreen}
        options={{ title: 'Add User' }}
      />
      <Stack.Screen
        name="UserView"
        component={UserViewScreen}
        options={{ title: 'View User' }}
      />
      <Stack.Screen
        name="UserModify"
        component={UserModifyScreen}
        options={{ title: 'Modify User' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="ModulesCrudler"
        screenOptions={{
          headerStyle: { backgroundColor: '#000' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: '600' },
        }}
      >
        <Drawer.Screen
          name="ModulesCrudler"
          component={ModulesStackNavigator}
          options={{ title: 'Module Crudler' }}
        />
        <Drawer.Screen
          name="UsersCrudler"
          component={UsersStackNavigator}
          options={{ title: 'User Crudler' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


/*const ModulesStack = createNativeStackNavigator();
function ModulesStackScreen() {
  return (
    <ModulesStack.Navigator
      initialRouteName="ModuleList"
      screenOptions={{
        headerStyle: { backgroundColor: '#000' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: '600' },
      }}
    >
      <ModulesStack.Screen
        name="ModuleList"
        component={ModuleListScreen}
        options={({ navigation }) => ({
          title: 'Module Crudler',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 22,
                  marginRight: 12,
                }}
              >
                ☰
              </Text>
            </TouchableOpacity>
          ),
        })}
      />
      <ModulesStack.Screen
        name="ModuleAdd"
        component={ModuleAddScreen}
        options={{ title: 'Add Module' }}
      />
      <ModulesStack.Screen
        name="ModuleView"
        component={ModuleViewScreen}
        options={{ title: 'View Module' }}
      />
      <ModulesStack.Screen
        name="ModuleModify"
        component={ModuleModifyScreen}
        options={{ title: 'Modify Module' }}
      />
    </ModulesStack.Navigator>
  );
}

// --- Temporary studf
function UserCrudlerPlaceholder() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ color: '#fff', fontSize: 16 }}>
        User CRUDLer coming soon...
      </Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Modules CRUDLer"
        screenOptions={{
          headerStyle: { backgroundColor: '#000' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: '600' },
        }}
      >
        <Drawer.Screen
          name="Modules CRUDLer"
          component={ModulesStackScreen}
          options={{ title: 'Module Crudler' }}
        />
        <Drawer.Screen
          name="User CRUDLer"
          component={UserCrudlerPlaceholder}
          options={{ title: 'User Crudler' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


/*const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ModuleList"
        screenOptions={{
          headerStyle: { backgroundColor: '#000' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: '600' },
        }}
      >
        <Stack.Screen
          name="ModuleList"
          component={ModuleListScreen}
          options={{ title: 'Modules' }}
        />
        <Stack.Screen
          name="ModuleAdd"
          component={ModuleAddScreen}
          options={{ title: 'Add Module' }}
        />
        <Stack.Screen
          name="ModuleView"
          component={ModuleViewScreen}
          options={{ title: 'View Module' }}
        />
        <Stack.Screen
          name="ModuleModify"
          component={ModuleModifyScreen}
          options={{ title: 'Modify Module' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}*/
