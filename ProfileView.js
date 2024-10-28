import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProfileView({ avatar, firstName, lastName, joinDate }) {
  return (
    <View style={styles.profileSection}>
      <View style={styles.avatarContainer}>
        <Image source={avatar} style={styles.profileImage} />
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{firstName}</Text>
        <Text style={styles.userSurname}>{lastName}</Text>
        <Text style={styles.joinDate}>Joined {joinDate}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userInfo: {
    alignItems: 'center',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000', 
  },
  userSurname: {
    fontSize: 24,
    fontWeight: '300',
    color: '#888', 
  },
  joinDate: {
    fontSize: 14,
    color: '#888',
  },
});
