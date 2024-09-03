import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Navbar from './Navbar';

const HomeScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignIn = () => {
    // Handle sign-in logic here
    console.log('Sign In:', { email, password });
  };

  return (
    <View className="flex-1 bg-white">
      <Navbar />
      <View className="flex-1 justify-center items-center p-4">
        <Text className="text-2xl font-bold mb-6">Sign In</Text>
        <TextInput
          className="w-full p-3 border border-gray-300 rounded mb-4"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          className="w-full p-3 border border-gray-300 rounded mb-4"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity
          className="w-full bg-blue-600 p-3 rounded"
          onPress={handleSignIn}
        >
          <Text className="text-white text-center">Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
