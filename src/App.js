import React, { useState } from 'react';
import { LoginScreen, RegistrationScreen, DashboardScreen } from '..';


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(true);

  if (isLoggedIn) {
    return <DashboardScreen onLogout={() => setIsLoggedIn(false)} />;
  }

  return isRegistered ? (
    <LoginScreen
      onRegisterPress={() => setIsRegistered(false)}
      onLogin={() => setIsLoggedIn(true)}
    />
  ) : (
    <RegistrationScreen onLoginPress={() => setIsRegistered(true)} />
  );
}
