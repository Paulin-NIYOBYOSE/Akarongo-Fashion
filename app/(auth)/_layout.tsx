import { AuthProvider } from '@/contexts/AuthContext';
import { Stack } from 'expo-router';
import React from 'react';

export default function AuthLayout() {
  return (
   <AuthProvider>
     <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" />
      <Stack.Screen name="register" />
    </Stack>
   </AuthProvider>
  );
}