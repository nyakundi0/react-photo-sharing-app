import React from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { NavigationBar } from '../components/NavigationBar';
import { MetricsReport } from '../components/MetricsReport';
import styles from '../styles/styles';

export function DashboardScreen({ onLogout }) {
  return (
    <ScrollView style={styles.dashboardContainer}>
      <Text style={styles.headerText}>Dashboard</Text>

      {/* Navigation Bar */}
      <NavigationBar />

      {/* Metrics and Reports */}
      <MetricsReport />

      {/* Logout */}
      <TouchableOpacity onPress={onLogout} style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
