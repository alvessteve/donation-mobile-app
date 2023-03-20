import React from 'react';
import { View } from 'react-native';
import Input from '../../design-system/input/Input';

export default function LoginScreen() {
  return (
    <View style={{ backgroundColor: 'white', flex: 1, padding: 30 }}>
      <Input />
    </View>
  );
}
