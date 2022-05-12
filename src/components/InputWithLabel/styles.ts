import { StyleSheet } from 'react-native';

import { SharedStyles } from 'constants';
import { scale } from 'utils/responsiveDimensions';

export default StyleSheet.create({
  container: {
    width: scale(342),
    marginBottom: scale(17),
    alignItems: 'center',
  },
  disabled: {
    opacity: 0.7,
  },
  label: {
    ...SharedStyles.label,
  },
  input: {
    ...SharedStyles.input,
  },
});
