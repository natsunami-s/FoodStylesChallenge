import { StyleSheet } from 'react-native';

import Fonts from './fonts';
import Colors from './colors';
import { scale } from 'utils/responsiveDimensions';

export default StyleSheet.create({
  label: {
    fontFamily: Fonts.primarySemibold,
    fontSize: scale(16),
    color: Colors.white,
    letterSpacing: 0,
    marginBottom: scale(7),
  },
  subLabel: {
    fontFamily: Fonts.primary,
  },
  input: {
    width: scale(299),
    height: scale(35),
    borderRadius: 4,
    backgroundColor: Colors.white,
    fontSize: scale(16),
    color: Colors.greyishBrown,
    paddingTop: scale(7),
    paddingBottom: scale(7),
    paddingLeft: scale(11),
  },
});
