import {
  Image, ImageResizeMode, ImageStyle, StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle,
} from 'react-native';
import React, { ReactElement } from 'react';

import LoadingWrapper from '../LoadingWrapper';
import styles from './styles';

interface Props {
  imageSource?: number | { uri: string };
  imageStyle?: StyleProp<ImageStyle>;
  imageComponent?: ReactElement;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp <TextStyle>;
  text?: string;
  activeOpacity?: number;
  backgroundColor?: string;
  resizeMode?: ImageResizeMode;
  loaderSize?: 'small' | 'large',
  loaderColor?: string,
  isLoading?: boolean;
  disabled?: boolean;
  onPress?: () => void;
}

const ButtonWithImage : React.FC<Props> = ({
  containerStyle,
  textStyle,
  imageStyle,
  activeOpacity = 0.5,
  text,
  imageSource,
  imageComponent,
  backgroundColor,
  resizeMode = 'contain',
  loaderSize,
  loaderColor,
  disabled,
  isLoading,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={StyleSheet.flatten([{ backgroundColor }, containerStyle])}
      disabled={disabled}
      activeOpacity={activeOpacity}
      onPress={onPress}
    >
      <LoadingWrapper isLoading={isLoading} size={loaderSize} color={loaderColor}>
        {imageComponent || (
        <Image
          style={StyleSheet.flatten([styles.image, imageStyle])}
          resizeMode={resizeMode}
          source={imageSource}
        />
        )}

      </LoadingWrapper>
      {!!text && (
        <Text style={StyleSheet.flatten([styles.text, textStyle])}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default React.memo(ButtonWithImage);
