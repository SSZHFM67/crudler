import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
/**
 * hook for persisting some piece of state in AsyncStorage.
 *
 * @param {string} key           Storage key (e.g. "ModuleFavourites")
 * @param {*} initialRecord      Initial value to use before anything is loaded
 *
 * @returns {[any, function]}    [record, saveRecord]
 */
const useStore = (key, initialRecord) => {
  const [record, setRecord] = useState(initialRecord);

  // Load from storage once on mount
  useEffect(() => {
    const loadRecord = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem(key);

        if (jsonValue !== null) {
          const parsed = JSON.parse(jsonValue);
          setRecord(parsed);
        }
      } catch (error) {
        Alert.alert(
          'Error',
          `Error loading record from local storage:\n${String(error)}`
        );
      }
    };

    loadRecord();
  }, [key]);

  // Save to storage and update state
  const saveRecord = async (newRecord) => {
    try {
      const encoded = JSON.stringify(newRecord);
      await AsyncStorage.setItem(key, encoded);
      setRecord(newRecord);
    } catch (error) {
      Alert.alert(
        'Error',
        `Error saving record to local storage:\n${String(error)}`
      );
    }
  };

  return [record, saveRecord];
};

export default useStore;