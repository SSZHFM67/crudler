import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ModuleListScreen from './src/screens/components/ModuleListScreen';
import ModuleAddScreen from './src/screens/components/ModuleAddScreen';
import ModuleViewScreen from './src/screens/components/ModuleViewScreen';
import ModuleModifyScreen from './src/screens/components/ModuleModifyScreen';

const Stack = createNativeStackNavigator();

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
        <Stack.Screen name="ModuleList" component={ModuleListScreen} options={{ title: 'Modules' }} />
        <Stack.Screen name="ModuleAdd" component={ModuleAddScreen} options={{ title: 'Add Module' }} />
        <Stack.Screen name="ModuleView" component={ModuleViewScreen} options={{ title: 'View Module' }} />
        <Stack.Screen name="ModuleModify" component={ModuleModifyScreen} options={{ title: 'Modify Module' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
