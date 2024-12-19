import React from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../styles/styles';

export function NavigationBar() {
  return (
    <ScrollView horizontal style={styles.menuContainer}>
      <TouchableOpacity style={styles.menuItem}>
        <FontAwesome name="dashboard" size={20} color="black" />
        <Text>Dashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <FontAwesome name="shopping-cart" size={20} color="black" />
        <Text>Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <FontAwesome name="cogs" size={20} color="black" />
        <Text>Settings</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
