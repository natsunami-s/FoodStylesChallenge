import { Text, View } from 'react-native';
import React from 'react';

import { Images } from 'constants';
import styles from './styles';
import ImageButton from 'components/ImageButton';

interface Props {
  title: string;
  onBackPress?: () => void;
}

const Header: React.FC<Props> = ({ title, onBackPress }) => (
  <View style={styles.container}>
    <ImageButton
      imageSource={Images.backButton}
      containerStyle={styles.backButton}
      imageStyle={styles.backButton}
      onPress={onBackPress}
    />
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default React.memo(Header);
