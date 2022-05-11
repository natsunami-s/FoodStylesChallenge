import { StyleSheet } from 'react-native';

import { Colors, Fonts } from 'constants';
import { scale } from 'utils/responsiveDimensions';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    paddingTop: scale(16),
    paddingLeft: scale(6)
  },
  title: {
    fontFamily: Fonts.primaryBold,
    fontSize: scale(20),
    lineHeight: scale(22),
    color: Colors.white,
    width: scale(299),
    textAlign: 'center',
  },
  backButton: {
    width: scale(41),
    height: scale(41),
    // borderWidth: 1
  },
});
