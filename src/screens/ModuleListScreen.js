import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Screen from './layout/Screen';
import API from './components/API/API';

import ModuleItem from './components/entity/modules/ModuleItem';
import { Button, ButtonTray } from './components/UI/Button';

//force loading screen 
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const ModuleListScreen = ({ navigation }) => {
  // State
  const [modules, setModules] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Helpers
  const loadModules = async () => {
    try {
      setIsLoading(true);

      const response = await API.get('/modules');

      // tiny delay so the spinner is longeer
      await sleep(400);

      if (response.isSuccess) {
        setModules(response.result);
      } else {
        console.warn('Failed to load modules:', response.message);
      }
    } catch (error) {
      console.warn('Error loading modules:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Navigation helpers
  const gotoViewScreen = (module) => {
    navigation.navigate('ModuleView', {
      module,
      onDelete: async (id) => {
        const response = await API.delete(`/modules/${id}`);
        if (response.isSuccess) {
          await loadModules();
        } else {
          console.warn('Delete failed:', response.message);
        }
      },
      onModify: async (updatedModule) => {
        const response = await API.put(
          `/modules/${updatedModule.ModuleID}`,
          updatedModule
        );
        if (response.isSuccess) {
          await loadModules();
        } else {
          console.warn('Update failed:', response.message);
        }
      },
    });
  };

  const gotoAddScreen = () => {
    navigation.navigate('ModuleAdd', {
      onAdd: async (newModule) => {
        const response = await API.post('/modules', newModule);
        if (response.isSuccess) {
          await loadModules();
        } else {
          console.warn('Add failed:', response.message);
        }
      },
    });
  };

  // Effects
  useEffect(() => {
    loadModules();
  }, []);

  // View
  return (
    <Screen>
      {/* Add button at the top */}
      <ButtonTray>
        <Button label="Add" onPress={gotoAddScreen} />
      </ButtonTray>

      {/* Module list */}
      <ScrollView contentContainerStyle={styles.listContainer}>
        {modules.map((module) => (
          <ModuleItem
            key={module.ModuleID}
            module={module}
            onSelect={gotoViewScreen}
          />
        ))}
      </ScrollView>

      {/* Loading overlay on top of everything */}
      {isLoading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#ffffff" />
          <Text style={styles.loadingText}>Loading modules…</Text>
        </View>
      )}
    </Screen>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 16,
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    marginTop: 12,
    color: '#ffffff',
    fontSize: 16,
  },
});

export default ModuleListScreen;
