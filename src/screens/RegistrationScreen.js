import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, CheckBox, ScrollView } from 'react-native';
import styles from '../styles/styles';

export function RegistrationScreen({ onLoginPress }) {
  const [formData, setFormData] = useState({
    businessName: '',
    website: '',
    address: '',
    email: '',
    phoneNumber: '',
  });

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <ScrollView style={styles.formContainer}>
      <Text style={styles.headerText}>Sign Up</Text>

      <Text style={styles.label}>Business Information</Text>
      <TextInput
        style={styles.input}
        placeholder="Business Name*"
        value={formData.businessName}
        onChangeText={(value) => handleInputChange('businessName', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Website"
        value={formData.website}
        onChangeText={(value) => handleInputChange('website', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Address*"
        value={formData.address}
        onChangeText={(value) => handleInputChange('address', value)}
      />

      <Text style={styles.label}>Personal Information</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone Number*"
        value={formData.phoneNumber}
        onChangeText={(value) => handleInputChange('phoneNumber', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email*"
        value={formData.email}
        onChangeText={(value) => handleInputChange('email', value)}
      />

      <View style={styles.checkboxContainer}>
        <CheckBox />
        <Text style={styles.checkboxLabel}>Agree to Terms</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onLoginPress}>
        <Text style={styles.link}>Already have an account? Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
