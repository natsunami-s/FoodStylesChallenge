import { StyleSheet } from 'react-native';

import { Colors, Fonts } from 'constants';
import { scale } from 'utils/responsiveDimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundWhite,
    alignItems: 'center',
    height: '100%',
    paddingTop: scale(13),
  },
  content: {
    alignItems: 'center',
    marginTop: scale(20),
    width: scale(375),
  },
  buttonText: {
    textTransform: 'uppercase',
  },
  title: {
    textTransform: 'uppercase',
    fontFamily: Fonts.primaryBold,
    fontSize: scale(15),
    color: Colors.greyishBrown,
    alignSelf: 'flex-start',
    marginLeft: scale(18),
  },
  input: {
    backgroundColor: Colors.gray,
    width: scale(339),
  },
  label: {
    color: Colors.greyishBrown,
    fontSize: scale(14),
  },
  logOutButton: {
    backgroundColor: Colors.transparent,
    borderWidth: 1,
    borderColor: Colors.lightGray,
    paddingVertical: scale(14),
  },
  logOutButtonText: {
    color: Colors.greyishBrown,
    textTransform: 'uppercase',
    fontSize: scale(13),
    lineHeight: scale(14),
    letterSpacing: 0.5,
  },
  doneButton: {
    alignSelf: 'center',
  },
});
