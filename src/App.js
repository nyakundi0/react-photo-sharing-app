import React, { useState } from 'react';
import { LoginScreen, RegistrationScreen, DashboardScreen } from './screens';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(true);

  if (isLoggedIn) {
    return <DashboardScreen onLogout={() => setIsLoggedIn(false)} />;
  }

  return isRegistered ? (
    <LoginScreen
      onRegisterPress={() => setIsRegistered(false)}
      onLoginPress={() => setIsLoggedIn(true)} // Added missing prop for LoginScreen
    />
  ) : (
    <RegistrationScreen onRegisterComplete={() => setIsRegistered(true)} />
  );
}