import { StyleSheet } from 'react-native';

import { Colors, Fonts } from 'constants';
import { scale } from 'utils/responsiveDimensions';

export default StyleSheet.create({
  container: {
    width: scale(151),
    height: scale(43),
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.aquaGreen,
  },
  disabled: {
    opacity: 0.6,
  },
  text: {
    fontFamily: Fonts.primaryBold,
    fontSize: scale(16),
    color: Colors.white,
    // textTransform: 'uppercase',
    letterSpacing: 1,
  },
});
