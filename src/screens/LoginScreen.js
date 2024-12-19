import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, CheckBox } from 'react-native';
import styles from '../styles/styles';

export function LoginScreen({ onRegisterPress, onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.formContainer}>
      <Text style={styles.headerText}>Sign In</Text>

      <TextInput
        style={styles.input}
        placeholder="Email Address*"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password*"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <View style={styles.checkboxContainer}>
        <CheckBox />
        <Text style={styles.checkboxLabel}>Remember me</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={onLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onRegisterPress}>
        <Text style={styles.link}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
}
