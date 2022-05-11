import {
  Image,
  ImageResizeMode,
  ImageStyle,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React, { ReactElement } from 'react';

import styles from './styles';

interface Props {
  imageSource?: number | { uri: string };
  imageStyle?: StyleProp<ImageStyle>;
  imageComponent?: ReactElement;
  containerStyle?: StyleProp<ViewStyle>;
  activeOpacity?: number;
  resizeMode?: ImageResizeMode;
  disabled?: boolean;
  onPress?: () => void;
}

const ImageButton: React.FC<Props> = ({
  containerStyle,
  imageStyle,
  activeOpacity = 0.5,
  imageSource,
  imageComponent,
  resizeMode = 'contain',
  disabled,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={containerStyle}
      disabled={disabled}
      activeOpacity={activeOpacity}
      onPress={onPress}>
      {imageComponent || (
        <Image
          style={StyleSheet.flatten([styles.image, imageStyle])}
          resizeMode={resizeMode}
          source={imageSource}
        />
      )}
    </TouchableOpacity>
  );
};

export default React.memo(ImageButton);
