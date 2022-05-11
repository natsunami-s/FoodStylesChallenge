import {
  StyleProp,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';

import { Colors } from 'constants';
import styles from './styles';

interface Props {
  label?: string;
  value: string;
  fieldName?: string;
  multiline?: boolean;
  secureTextEntry?: boolean;
  placeholder?: string;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  onChangeText: (text: string) => void;
  onBlur?: (e: any) => void;
}

const InputWithLabel: React.FC<Props> = ({
  label,
  value,
  multiline,
  placeholder,
  containerStyle,
  inputStyle,
  onChangeText,
  onBlur,
}) => (
  <View style={[styles.container, containerStyle]}>
    <View>
      {!!label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        value={value}
        multiline={multiline}
        secureTextEntry={true}
        placeholder={placeholder}
        placeholderTextColor={Colors.lightGray}
        style={[styles.input, inputStyle]}
        onChangeText={onChangeText}
        onBlur={onBlur}
      />
    </View>
  </View>
);

export default InputWithLabel;
