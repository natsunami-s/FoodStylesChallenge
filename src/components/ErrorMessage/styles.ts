import { StyleSheet } from 'react-native';

import { Colors, Fonts } from 'constants';
import { scale } from 'utils/responsiveDimensions';

export default StyleSheet.create({
  errorText: {
    height: scale(28.5),
    color: Colors.white,
    fontFamily: Fonts.primarySemibold,
    fontSize: scale(16),
    backgroundColor: Colors.red,
    paddingHorizontal: scale(9),
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
