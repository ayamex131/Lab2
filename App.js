// App.js
import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import ProfileView from './components/ProfileView';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <ProfileView 
        avatar={require('./bocchi.jpg')}
        firstName="Bocchi"
        lastName="DRock"
        joinDate="1 year ago"
      />

      <Text style={styles.sectionHeader}>Profile</Text>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Manage user</Text>
      </TouchableOpacity>

      <Text style={styles.sectionHeader}>Settings</Text>

      <View style={styles.settingsSection}>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Notifications</Text>
          <Switch />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Dark Mode</Text>
          <Switch />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.signOutButton}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
    marginTop: 40,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  settingsSection: {
    marginTop: 20,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 20,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  signOutButton: {
    alignItems: 'center',
    marginTop: 30,
  },
  signOutText: {
    fontSize: 16,
    color: '#d9534f',
  },
});
