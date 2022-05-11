import { Text, View } from 'react-native';
import React from 'react';

import styles from './styles';
import Spacer from '../Spacer';
import { scale } from 'utils/responsiveDimensions';

type Props = {
  errorMsg: string;
};

const ErrorMessage: React.FC<Props> = ({ errorMsg }) => (
  <View>
    <Spacer height={scale(26)} />
    <Text style={styles.errorText}>{errorMsg}</Text>
  </View>
);

export default ErrorMessage;
