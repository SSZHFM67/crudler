import { ScrollView, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { LogBox, StyleSheet, Text, View } from 'react-native';

import Screen from './layout/Screen';
//import initialModules from './data/modules';
import Button from './components/UI/Button';
import Icons from './components/UI/Icons';
import API from './components/API/API';
import ModuleList from './components/entity/modules/ModuleList';
//import { Button, ButtonTray } from './components/UI/Button';

//warning about function
LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);

const modulesEndpoint = '/modules';

const ModuleListScreen = ({ navigation }) => {
  //State 
  const [modules, setModules] = useState([]);   
  const [isLoading, setIsLoading] = useState(true);

  //CRUDL handlers
  const handleDelete = (moduleToDelete) => {
    setModules((current) =>
      current.filter((m) => m.ModuleID !== moduleToDelete.ModuleID)
    );
  };

  const handleModify = (modifiedModule) => {
    setModules((current) =>
      current.map((m) =>
        m.ModuleID === modifiedModule.ModuleID ? modifiedModule : m
      )
    );
  };

  const handleAdd = (newmodule) => {
    setModules((current) => [...current, module]);
  };

  const onDelete = (module) => {
    handleDelete(module);
    navigation.goBack();
  };

  const onModify = (module) => {
    handleModify(module);
    navigation.goBack();
  };

  const onAdd = (module) => {
    handleAdd(module);
    navigation.goBack();
  };

  /*const onAdd = (module) => {
    handleAdd(module);
    navigation.goBack();
  };

  const gotoAddScreen = () => {
    navigation.navigate('ModuleAdd', { onAdd });
  };

  const handleUpdate = (updatedModule) => {
    setModules((current) =>
      current.map((m) =>
        m.ModuleID === updatedModule.ModuleID ? updatedModule : m
      )
    );
  };

  const onUpdate = (updatedModule) => {
    handleUpdate(updatedModule);
  };*/

   const gotoViewScreen = (module) => {
    navigation.navigate('ModuleView', {
      module,
      onDelete,
      onModify,
    });
  };

  const gotoAddScreen = () => {
    navigation.navigate('ModuleAdd', { onAdd });
  };

  //loadin API
  const loadModules = async (endpoint) => {
    setIsLoading(true);

    const response = await API.get(endpoint);

    setIsLoading(false);

    if (response.isSuccess) {
      setModules(response.result);
    } else {
      console.log('Error loading modules:', response.status);
    }
  };

  //run if screen mount 
  useEffect(() => {
    loadModules(modulesEndpoint);
  }, []);

    // test
    //alert(`${module.ModuleCode} - ${module.ModuleName}`);

  // View -----------

  /*return (
    <Screen>
      <ScrollView contentContainerStyle={styles.listContainer}>
        {modules.map((module) => (
          <Pressable
            key={module.ModuleID}
            style={styles.item}
            onPress={() => handleSelect(module)}
          >
            <Text style={styles.code}>{module.ModuleCode}</Text>
            <Text style={styles.name}>{module.ModuleName}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 16,
  },
  item: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  code: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  name: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 2,
  },
});*/

/*return (
    <Screen>
      <ButtonTray>
        <Button label="Add" onPress={gotoAddScreen} />
      </ButtonTray>

      <ModuleList modules={modules} onSelect={gotoViewScreen} />
    </Screen>
  );
};

export default ModuleListScreen;*/

 return (
    <Screen>
      <View style={styles.actionsRow}>
        <Button
          icon={Icons.add}
          title="Add"
          onClick={gotoAddScreen}
        />
      </View>

      {isLoading && (
        <Text style={styles.loadingText}>Loading records...</Text>
      )}

      <ModuleList modules={modules} onSelect={gotoViewScreen} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  actionsRow: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  loadingText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 16,
  },
});

export default ModuleListScreen;
