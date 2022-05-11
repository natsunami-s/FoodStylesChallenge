import { StyleProp, View, ViewStyle } from 'react-native';
import React from 'react';

import styles from './styles';

interface Props {
  color?: string,
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>,
}

const Spacer: React.FC<Props> = ({ style, width, height, color }) => (
  <View style={[styles.separator, style, { width }, { height }, { backgroundColor: color }]} />
);

export default Spacer;
