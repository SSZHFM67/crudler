import React from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, ButtonTray } from '../../UI/Button';

const ModuleView = ({
  module,
  onModify = () => {},
  onDelete = () => {},
}) => {
  //confirm delete
   const requestDelete = () => {
    Alert.alert(
      'Delete module',
      `Are you sure you want to delete ${module.ModuleCode}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => onDelete(module),
        },
      ]
    );
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Full-width image */}
      <Image source={{ uri: module.ModuleImageURL }} style={styles.image} />

      {/* Info tray */}
      <View style={styles.infoTray}>
        <Text style={styles.code}>{module.ModuleCode}</Text>
        <Text style={styles.name}>{module.ModuleName}</Text>

        <View style={styles.metaRow}>
          <Text style={styles.metaLabel}>Level:</Text>
          <Text style={styles.metaValue}>{module.ModuleLevel}</Text>
        </View>

        <View style={styles.metaRow}>
          <Text style={styles.metaLabel}>Leader:</Text>
          <Text style={styles.metaValue}>{module.ModuleLeaderName}</Text>
        </View>

        <View style={styles.metaRow}>
          <Text style={styles.metaLabel}>ID:</Text>
          <Text style={styles.metaValue}>{module.ModuleID}</Text>
        </View>
     
      {/* Button tray – side-by-side buttons */}
        <ButtonTray>
          <Button label="Modify" onPress={() => onModify(module)} />
          <Button label="Delete" onPress={requestDelete} />
        </ButtonTray>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 24,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  infoTray: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  code: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 4,
  },
  name: {
    fontSize: 18,
    color: '#ccc',
    marginBottom: 16,
  },
  metaRow: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  metaLabel: {
    fontSize: 14,
    color: '#888',
    marginRight: 8,
  },
  metaValue: {
    fontSize: 14,
    color: '#fff',
  },
});

export default ModuleView;