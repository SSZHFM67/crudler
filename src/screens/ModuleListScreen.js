import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
  alert,
} from 'react-native';

import Screen from './layout/Screen';
import API from './components/API/API';

import ModuleItem from './components/entity/modules/ModuleItem';
import { Button, ButtonTray } from './components/UI/Button';
import useStore from './components/store/useStore';
// API base for modules
const modulesEndpoint = 'https://softwarehub.uk/unibase/api/modules';
const favouritesKey = 'ModuleFavourites';

//force loading screen 
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const ModuleListScreen = ({ navigation }) => {
  // State
  const [modules, setModules] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [favourites, saveFavourites] = useStore(favouritesKey, []);


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

   const augmentModulesWithFavourites = () => {
    const augmentedModules = modules.map((module) => ({
      ...module,
      ModuleFavourite: favourites.includes(module.ModuleID),
    }));

    setModules(augmentedModules);
  };

  // Run once on mount to load modules
  useEffect(() => {
    loadModules();
  }, []);

  // Re-augment modules whenever loading finishes or favourites change
  useEffect(() => {
    if (!isLoading) {
      augmentModulesWithFavourites();
    }
  }, [isLoading, favourites]);

  // Toggle favourite for a single module + persist to AsyncStorage
  const handleFavourite = (module) => {
    // New value for this module
    const isFavourite = !module.ModuleFavourite;

    // Update modules list with toggled ModuleFavourite
    const updatedModules = modules.map((item) =>
      item.ModuleID === module.ModuleID
        ? { ...item, ModuleFavourite: isFavourite }
        : item
    );

    setModules(updatedModules);

    // Derive updated favourites list (just the IDs) and persist it
    const updatedFavouritesList = updatedModules
      .filter((item) => item.ModuleFavourite)
      .map((item) => item.ModuleID);

    saveFavourites(updatedFavouritesList);
  };

  // Navigation helpers
  const gotoViewScreen = (module) => {
    navigation.navigate('ModuleView', {
      module,
      
      onDelete: async (id) => {
        const deleteEndpoint = `${modulesEndpoint}/${id}`;
         const response = await API.delete('/modules/${id}');
        
         if (response.isSuccess) {
          await loadModules();
          navigation.goBack();
        } else {
          console.warn('Delete failed:', response.message);
          Alert.alert(
            'Delete failed',
            response.message || 'something went wrong whilst deleting the module.'
          );
        }
      },

      onUpdate: async (updatedModule) => {
        const response = await API.put(
          `/modules/${updatedModule.ModuleID}`,
          updatedModule
        );

         if (response.isSuccess) {
          await loadModules();
          navigation.navigate('ModuleView', {
            module: updatedModule,
            // pass the handlers again so the view still works
            onDelete: async (id) => {
              const delResponse = await API.delete(`/modules/${id}`);
              if (delResponse.isSuccess) {
                await loadModules();
                navigation.goBack();
              } else {
                Alert.alert(
                  'Delete failed',
                  delResponse.message ||
                    'Something went wrong while deleting the module.'
                );
              }
            },
            onUpdate: arguments.callee, // reuse same modify behaviour
          });
        } else {
          console.warn('Update failed:', response.message);
          Alert.alert(
            'Modify failed',
            response.message || 'Something went wrong while modifying the module.'
          );
        }
      },
    });
  };


  const gotoAddScreen = () => {
    const template = modules[0] || {};

    navigation.navigate('ModuleAdd', {
      defaultYearID: template.ModuleYearID ?? 1,
      defaultLeaderID: template.ModuleLeaderID ?? 1,

      onAdd: async (newModule) => {
        const response = await API.post('/modules', newModule);

        if (response.isSuccess) {
          await loadModules();
          navigation.goBack(); // back to list to see the new item
        } else {
          console.warn('Add failed:', response.message);
          Alert.alert(
            'Error',
            response.message || 'Something went wrong while adding the module.'
          );
        }
      },
    });
  };

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