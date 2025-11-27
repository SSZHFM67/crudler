import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const ModuleView = ({ module }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Full-width image */}
      <Image source={{ uri: module.ModuleImage }} style={styles.image} />

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
      </View>
    </ScrollView>
  );
};