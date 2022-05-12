import { StyleSheet } from 'react-native';

import { Colors, Fonts } from 'constants';
import { scale } from 'utils/responsiveDimensions';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    opacity: 0.6,
  },
  text: {
    fontSize: scale(14),
    fontFamily: Fonts.primary,
    color: Colors.gray,
  },
});
