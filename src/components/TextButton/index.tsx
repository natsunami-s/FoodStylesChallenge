import { StyleProp, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import React from 'react';

import { Colors } from 'constants';
import LoadingWrapper from '../LoadingWrapper';
import styles from './styles';

interface Props {
  text: string,
  textColor?: string,
  loaderColor?: string,
  disabled?: boolean,
  isLoading?: boolean,
  activeOpacity?: number;
  containerStyle?: StyleProp<ViewStyle>,
  textStyle?: StyleProp<TextStyle>,
  onPress?: () => void,
}

const TextButton: React.FC<Props> = ({
  text,
  textColor,
  loaderColor = Colors.white,
  disabled,
  containerStyle,
  textStyle,
  isLoading,
  activeOpacity,
  onPress,
}) => (
  <TouchableOpacity
    style={[
      styles.container,
      containerStyle,
      disabled && styles.disabled,
    ]}
    disabled={disabled || isLoading}
    activeOpacity={activeOpacity}
    onPress={onPress}
  >
    <LoadingWrapper size="small" isLoading={isLoading} color={loaderColor}>
      <Text
        style={[styles.text, textStyle, !!textColor && { color: textColor } ]}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {text}
      </Text>
    </LoadingWrapper>
  </TouchableOpacity>
);

export default React.memo(TextButton);
