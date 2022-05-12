import { ActivityIndicator, StyleProp, View, ViewStyle } from 'react-native';
import React, { Fragment, ReactElement } from 'react';
import LinearGradient from 'react-native-linear-gradient';

import { Colors } from 'constants';
import styles from './styles';

interface Props {
  containerStyle?: StyleProp<ViewStyle>;
  children: ReactElement | ReactElement[];
}

const GradientBackground: React.FC<Props> = ({ containerStyle, children }) => (
  <LinearGradient
    colors={[Colors.lightOrange, Colors.brightOrange]}
    start={{ x: 1.75, y: -0.25 }}
    end={{ x: 0.5, y: 0.8 }}
    style={[styles.container, containerStyle]}>
    {children}
  </LinearGradient>
);

export default GradientBackground;
