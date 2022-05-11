import { StyleSheet } from 'react-native';

import { Colors, Fonts } from 'constants';
import { scale } from 'utils/responsiveDimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: Colors.white,
    height: '100%',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: scale(16),
    paddingTop: scale(74),
  },
  button: {
    width: scale(236),
    height: scale(43),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: scale(12),
    paddingBottom: scale(12),
    paddingHorizontal: scale(25),
    backgroundColor: Colors.white,
    borderRadius: 100,
  },
  buttonIcon: {
    marginRight: scale(10),
  },
  buttonText: {
    fontFamily: Fonts.primarySemibold,
    color: Colors.greyishBrown,
    fontSize: scale(16),
    lineHeight: scale(18),
  },
  appleLogo: {
    width: scale(13),
    height: scale(16),
  },
  fbLogo: {
    width: scale(17),
    height: scale(17),
  },
  googleLogo: {
    width: scale(16),
    height: scale(16),
  },
  subtitle: {
    fontFamily: Fonts.primary,
    fontSize: scale(18),
    lineHeight: scale(22),
    color: Colors.white,
    textAlign: 'center',
  },
  acceptTerms: {
    fontFamily: Fonts.primarySemibold,
    fontSize: scale(13),
    color: Colors.white,
    textAlign: 'center',
    width: scale(300),
    opacity: 0.8,
  },
  secondaryButtonText: {
    fontFamily: Fonts.primarySemibold,
    fontSize: scale(16),
    lineHeight: scale(18),
    color: Colors.white,
  },
  link: {
    textDecorationLine: 'underline',
  },
});
