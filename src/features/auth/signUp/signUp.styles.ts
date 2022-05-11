import { StyleSheet } from 'react-native';

import { Colors, Fonts } from 'constants';
import { scale } from 'utils/responsiveDimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  contentContainer: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    // paddingBottom: scale(100),
    height: '100%',
  },
  content: {
    alignItems: 'center',
    marginTop: scale(30),
    width: scale(375),
  },
  buttonText: {
    textTransform: 'uppercase',
  },
});
