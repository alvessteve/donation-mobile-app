import React from 'react';
import { TextInput as RNTextInput } from 'react-native';

export default function Input({ placeholder } : { placeholder: string }) {
  return (
    <RNTextInput placeholder={placeholder} />
  );
}
