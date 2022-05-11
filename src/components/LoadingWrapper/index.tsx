import { ActivityIndicator, StyleProp, View, ViewStyle } from 'react-native';
import React, { Fragment, ReactElement } from 'react';

import { Colors } from 'constants';
import styles from './styles';

interface Props {
  containerStyle?: StyleProp<ViewStyle>,
  size?: 'small' | 'large',
  color?: string,
  isLoading: boolean,
  children: ReactElement,
}

const LoadingWrapper: React.FC<Props> = ({
  containerStyle,
  size = 'large',
  color = Colors.gray,
  isLoading,
  children,
}) => (
  <Fragment>
    {!isLoading ? (
      children
    ) : (
      <View style={[styles.container, containerStyle]}>
        <ActivityIndicator color={color} size={size} />
      </View>
    )}
  </Fragment>
);


export default LoadingWrapper;
