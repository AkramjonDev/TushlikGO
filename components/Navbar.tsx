import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Navbar: React.FC = () => {
  return (
    <View className="flex-row justify-between items-center p-4 bg-blue-600">
      <Text className="text-white text-lg font-bold">MyApp</Text>
      <View className="flex-row">
        <TouchableOpacity className="px-3">
          <Text className="text-white">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity className="px-3">
          <Text className="text-white">About</Text>
        </TouchableOpacity>
        <TouchableOpacity className="px-3">
          <Text className="text-white">Contact</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Navbar;
