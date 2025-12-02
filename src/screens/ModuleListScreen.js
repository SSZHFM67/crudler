//import { ScrollView, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import Screen from './layout/Screen';
import ModuleList from './components/entity/modules/ModuleList'; 
import { Button, ButtonTray } from './components/UI/Button';
import useLoad from './components/API/useLoad';
//import Icons from './components/UI/Icons';
//import API from './components/API/API';


//import { Button, ButtonTray } from './components/UI/Button';

//warning about function
//LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);

const modulesEndpoint = '/modules';

const ModuleListScreen = ({ navigation }) => {
  //api hook data loading
  const { records, isLoading } = useLoad(modulesEndpoint);
  //State 

 const [modules, setModules] = useState([]);   
 // const [isLoading, setIsLoading] = useState(true);

 //load api changes 
  useEffect(() => {
    const mapped = records.map((m) => ({
      ModuleID: m.ModuleID,
      ModuleCode: m.ModuleCode,
      ModuleName: m.ModuleName,
      ModuleLevel: m.ModuleLevel,
      ModuleLeaderID: m.ModuleLeaderID,
      ModuleLeaderName: m.ModuleLeaderName,
      ModuleImageURL: m.ModuleImageURL,
    }));
    setModules(mapped);
  }, [records]);


  //CRUDL handlers
  const handleDelete = (moduleToDelete) => {
    setModules((current) =>
      current.filter((m) => m.ModuleID !== moduleToDelete.ModuleID)
    );
  };

 /* const handleModify = (modifiedModule) => {
    setModules((current) =>
      current.map((m) =>
        m.ModuleID === modifiedModule.ModuleID ? modifiedModule : m
      )
    );
  }; */

  const handleAdd = (newmodule) => {
    setModules((current) => [...current, module]);
  };

  const handleUpdate = (updatedModule) => {
    setModules((current) =>
      current.map((m) =>
        m.ModuleID === updatedModule.ModuleID ? updatedModule : m
      )
    );
  };

  const onDelete = (module) => {
    handleDelete(module);
    navigation.goBack();
  };

 /* const onModify = (module) => {
    handleModify(module);
    navigation.goBack();
  }; */

  const onAdd = (module) => {
    handleAdd(module);
    navigation.goBack();
  };

  const onUpdate = (updatedModule) => {
    handleUpdate(updatedModule);
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
      onUpdate,
    });
  };

  const gotoAddScreen = () => {
    navigation.navigate('ModuleAdd', { onAdd });
  };

  //loadin API
  /*const loadModules = async () => {
    setIsLoading(true);

    const response = await API.get(modulesEndpoint);

    if (response.isSuccess) {
      // Map API fields to the shape our components expect
      const apiModules = response.result.map((m) => ({
        ModuleID: m.ModuleID,
        ModuleCode: m.ModuleCode,
        ModuleName: m.ModuleName,
        ModuleLevel: m.ModuleLevel,
        ModuleLeaderID: m.ModuleLeaderID,
        ModuleLeaderName: m.ModuleLeaderName,
        // API uses ModuleImageURL; ModuleView expects ModuleImageURL too
        ModuleImageURL: m.ModuleImageURL,
      }));

      setModules(apiModules);
    } else {
      console.log('Error loading modules:', response.status);
    }
    setIsLoading(false);
  };

  //run if screen mount 
  useEffect(() => {
    loadModules();
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
      <ButtonTray>
        <Button label="Add" onPress={gotoAddScreen} />
      </ButtonTray>

      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color="#ffffff" />
          <Text style={styles.loadingText}>Loading records...</Text>
        </View>
      )}

      <ModuleList modules={modules} onSelect={gotoViewScreen} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  loadingText: {
    color: '#ffffff',
    marginLeft: 8,
  },
});

export default ModuleListScreen;