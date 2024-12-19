import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles';

export function MetricsReport() {
  return (
    <View style={styles.metricsContainer}>
      <Text style={styles.label}>Today Metrics</Text>
      <Text>Jobs confirmed today: 0</Text>
      <Text>Jobs scheduled today: 0</Text>

      <Text style={styles.label}>Tomorrow Metrics</Text>
      <Text>Jobs confirmed tomorrow: 0</Text>
      <Text>Jobs scheduled tomorrow: 0</Text>

      <Text style={styles.label}>Basic Count Reports</Text>
      <Text>Photographer: John Doe</Text>
      <Text>Week Count: 1</Text>
      <Text>Month Count: 1</Text>
    </View>
  );
}
